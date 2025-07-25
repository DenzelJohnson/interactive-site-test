import pandas as pd
import numpy as np
import requests
import time
import os
import folium
import matplotlib.cm as cm
import matplotlib.colors as mcolors

from bokeh.plotting import figure
from bokeh.embed import components
from bokeh.resources import CDN
from bokeh.models import ColumnDataSource, LinearColorMapper, HoverTool, Select, Button, CustomJS, Div, ColorBar, FixedTicker
from bokeh.layouts import gridplot, column, row
from bokeh.palettes import Spectral11

# --- Geocode helper ---
def geocode_location(name):
    url = f"https://nominatim.openstreetmap.org/search"
    params = {"q": name, "format": "json", "limit": 1}
    headers = {"User-Agent": "travel-time-dashboard/1.0"}
    resp = requests.get(url, params=params, headers=headers)
    if resp.status_code == 200 and resp.json():
        d = resp.json()[0]
        return float(d["lat"]), float(d["lon"])
    return None, None

# --- Load and prep your data ---
data = pd.read_csv('data/comprehensive_travel_time_adjustments.csv')
origins      = sorted(data['Origin'].unique())
destinations = sorted(data['Destination'].unique())

# --- Geocode all unique locations and cache ---
coord_cache_file = 'data/location_coords.csv'
if os.path.exists(coord_cache_file):
    coords_df = pd.read_csv(coord_cache_file)
else:
    coords = []
    for loc in sorted(set(origins) | set(destinations)):
        lat, lon = geocode_location(loc)
        coords.append({"location": loc, "lat": lat, "lon": lon})
        time.sleep(1)  # be nice to the API
    coords_df = pd.DataFrame(coords)
    coords_df.to_csv(coord_cache_file, index=False)

loc2latlon = {row['location']: (row['lat'], row['lon']) for _, row in coords_df.iterrows()}

all_vals = data.iloc[:, 2:51].values.flatten().astype(float)

# Exactly replicate the notebook's color scheme  
# Define a colormap with 24 discrete colors (matching the notebook)
n_colors = 24
min_val = np.nanmin(all_vals)
max_val = np.nanmax(all_vals)

# Create the exact same boundaries as BoundaryNorm in matplotlib
boundaries = np.linspace(min_val, max_val, n_colors + 1)

# Use matplotlib to get the exact same 24 Spectral colors as the notebook
cmap = cm.get_cmap('Spectral', n_colors)
# Get colors for each discrete bin (0 to n_colors-1)
spectral_24 = [mcolors.to_hex(cmap(i)) for i in range(n_colors)]
# Do NOT reverse - notebook uses default Spectral orientation (red=low, purple=high)

mapper = LinearColorMapper(palette=spectral_24, low=min_val, high=max_val)

# --- Build the grid of small heatmaps (as Bokeh figures) ---
plots = []
plot_sources = []

# Create header row with destination names
header_row = []
header_row.append(figure(width=80, height=40, toolbar_location=None, tools=""))  # Empty corner cell
header_row[-1].axis.visible = False
header_row[-1].grid.visible = False

for d in destinations:
    header_fig = figure(width=80, height=40, toolbar_location=None, tools="")
    header_fig.text(x=[0.5], y=[0.5], text=[d], text_align="center", text_baseline="middle", 
                   text_font_size="10pt", text_font_style="bold")
    header_fig.x_range.range_padding = 0
    header_fig.y_range.range_padding = 0
    header_fig.axis.visible = False
    header_fig.grid.visible = False
    header_row.append(header_fig)

plots.append(header_row)

# Create data rows with origin labels  
data_plot_sources = []  # Separate tracking for data sources
for i, o in enumerate(origins):
    row_plots = []
    row_srcs = []
    
    # Add origin label as first cell in row
    origin_fig = figure(width=80, height=80, toolbar_location=None, tools="")
    origin_fig.text(x=[0.5], y=[0.5], text=[o], text_align="center", text_baseline="middle",
                   text_font_size="10pt", text_font_style="bold", angle=1.5708)  # 90 degrees
    origin_fig.x_range.range_padding = 0
    origin_fig.y_range.range_padding = 0
    origin_fig.axis.visible = False
    origin_fig.grid.visible = False
    row_plots.append(origin_fig)
    row_srcs.append(None)
    
    # Add data cells
    for d in destinations:
        sub = data[(data['Origin']==o)&(data['Destination']==d)]
        if not sub.empty:
            # Get the 49 values from columns 2-50 
            values = sub.iloc[0,2:51].astype(float).values
            # Reshape column-wise (Fortran order) then flip horizontally to match expected pattern
            mat = values.reshape(7,7, order='F')[:, ::-1]
            xs  = np.repeat(np.arange(7), 7)
            ys  = np.tile(np.arange(7), 7)  # Remove flip - standard row-major order
            vals= mat.flatten()
            vals_rounded = np.ceil(vals).astype(int)  # Round up for display
            
            # Create coverage and uncertainty labels for tooltips
            coverage_levels = ['0.7', '0.75', '0.8', '0.85', '0.9', '0.95', '1.0']
            uncertainty_levels = ['1.0', '0.95', '0.9', '0.85', '0.8', '0.75', '0.7']  # Top to bottom
            coverage_labels = [coverage_levels[x] for x in xs]
            uncertainty_labels = [uncertainty_levels[y] for y in ys]
            
            src = ColumnDataSource({'x':xs,'y':ys,'val':vals, 'val_display':vals_rounded, 'alpha':[1]*49, 
                                  'coverage':coverage_labels, 'uncertainty':uncertainty_labels}, name=f'src_{o}_{d}')

            p = figure(
                tools="hover",
                toolbar_location=None,
                x_range=(0,6), y_range=(0,6),
                sizing_mode='fixed',
                width=80, height=80  # Larger cells
            )
            p.rect('x','y',1,1, source=src, line_color=None,
                   fill_color={'field':'val','transform':mapper}, fill_alpha='alpha')
            hover = p.select_one(HoverTool)
            hover.tooltips = [
                ("Origin",         o),
                ("Destination",    d),
                ("Coverage Level", "@coverage"),
                ("Uncertainty Level", "@uncertainty"),
                ("Travel Time",    "@val_display min")
            ]
            p.axis.visible = False
            p.grid.visible = False
        else:
            src = ColumnDataSource({'x':[], 'y':[], 'val':[], 'val_display':[], 'alpha':[], 
                                   'coverage':[], 'uncertainty':[]}, name=f'src_{o}_{d}')
            p = figure(width=80, height=80, toolbar_location=None, tools="")
            p.axis.visible = False
            p.grid.visible = False
        row_plots.append(p)
        row_srcs.append(src)
    plots.append(row_plots)
    data_plot_sources.append(row_srcs)

grid = gridplot(plots, sizing_mode='fixed')

# Create color bar with discrete boundaries - make it taller to span the grid
grid_height = 40 + (len(origins) * 80)  # Header height + data rows

# Create comprehensive tick list including all boundaries
all_ticks = [int(round(t)) for t in boundaries]
# Ensure we have min and max values
if int(round(min_val)) not in all_ticks:
    all_ticks.insert(0, int(round(min_val)))
if int(round(max_val)) not in all_ticks:
    all_ticks.append(int(round(max_val)))
all_ticks = sorted(list(set(all_ticks)))  # Remove duplicates and sort

color_bar = ColorBar(
    color_mapper=mapper,
    width=30,
    height=grid_height,
    label_standoff=12,
    location=(0,0),
    title="Travel Time (minutes)",
    title_text_font_size="14pt",
    major_label_text_font_size="10pt",
    ticker=FixedTicker(ticks=all_ticks)  # Include all boundary values plus min/max
)

# Create a dummy figure to hold the color bar
colorbar_fig = figure(
    height=grid_height + 20, # Add some padding to prevent cutoff
    width=120,  # Wider to accommodate labels and prevent cutoff
    toolbar_location=None,
    tools="",
    title="",
    x_range=(0,1), 
    y_range=(0,1)
)
colorbar_fig.add_layout(color_bar, 'right')
colorbar_fig.axis.visible = False
colorbar_fig.grid.visible = False

# Combine grid and color bar in a row layout
main_layout = row(grid, colorbar_fig, sizing_mode='fixed')

# Create enlarged plots for each origin-destination pair
enlarged_plots = {}
for o in origins:
    for d in destinations:
        sub = data[(data['Origin']==o)&(data['Destination']==d)]
        if not sub.empty:
            # Get the 49 values from columns 2-50 
            values = sub.iloc[0,2:51].astype(float).values
            # Reshape column-wise (Fortran order) then flip horizontally to match expected pattern
            mat = values.reshape(7,7, order='F')[:, ::-1]
            xs  = np.repeat(np.arange(7), 7)
            ys  = np.tile(np.arange(7), 7)
            vals= mat.flatten()
            vals_rounded = np.ceil(vals).astype(int)  # Round up for display
            
            # Create coverage and uncertainty labels for tooltips
            coverage_levels = ['0.7', '0.75', '0.8', '0.85', '0.9', '0.95', '1.0']
            uncertainty_levels = ['1.0', '0.95', '0.9', '0.85', '0.8', '0.75', '0.7']  # Top to bottom
            coverage_labels = [coverage_levels[x] for x in xs]
            uncertainty_labels = [uncertainty_levels[y] for y in ys]
            
            src = ColumnDataSource({'x':xs,'y':ys,'val':vals, 'val_display':vals_rounded, 'alpha':[1]*49,
                                  'coverage':coverage_labels, 'uncertainty':uncertainty_labels}, name=f'enlarged_src_{o}_{d}')
            
            # Create enlarged plot (450x450px)
            p_large = figure(
                tools="hover",
                toolbar_location=None,
                x_range=(-0.5,6.5), y_range=(-0.5,6.5),
                sizing_mode='fixed',
                width=450, height=450,  # Larger to better fill the container
                title=f"{o} → {d}",
                x_axis_label="Coverage Level",
                y_axis_label="Uncertainty Level"
            )
            p_large.rect('x','y',1,1, source=src, line_color="white", line_width=1,
                        fill_color={'field':'val','transform':mapper}, fill_alpha='alpha')
            hover = p_large.select_one(HoverTool)
            hover.tooltips = [
                ("Coverage Level", "@coverage"),
                ("Uncertainty Level", "@uncertainty"),
                ("Travel Time",    "@val_display min")
            ]
            
            # Configure axis labels and ticks
            p_large.xaxis.ticker = list(range(7))
            p_large.yaxis.ticker = list(range(7))
            p_large.xaxis.major_label_overrides = {i: coverage_levels[i] for i in range(7)}
            p_large.yaxis.major_label_overrides = {i: uncertainty_levels[i] for i in range(7)}
            p_large.xaxis.axis_label_text_font_size = "12pt"
            p_large.yaxis.axis_label_text_font_size = "12pt"
            p_large.xaxis.major_label_text_font_size = "10pt"
            p_large.yaxis.major_label_text_font_size = "10pt"
            
            # Show grid lines for better readability
            p_large.grid.visible = True
            p_large.grid.grid_line_alpha = 0.3
            
            enlarged_plots[f"{o}_{d}"] = p_large
        else:
            # Create empty enlarged plot
            p_large = figure(
                toolbar_location=None,
                tools="",
                sizing_mode='fixed',
                width=450, height=450,  # Match other enlarged plots
                title=f"{o} → {d} (No Data)"
            )
            p_large.axis.visible = False
            p_large.grid.visible = False
            enlarged_plots[f"{o}_{d}"] = p_large

# Create default empty enlarged plot
empty_enlarged = figure(
    toolbar_location=None,
    tools="",
    sizing_mode='fixed',
    width=450, height=450,  # Match other enlarged plots
    title="Select Origin & Destination"
)
empty_enlarged.text(x=[0.5], y=[0.5], text=["Select origin and destination\nto view enlarged grid"], 
                   text_align="center", text_baseline="middle", text_font_size="14pt")
empty_enlarged.axis.visible = False
empty_enlarged.grid.visible = False
empty_enlarged.x_range.range_padding = 0
empty_enlarged.y_range.range_padding = 0

script, div = components({
    'main_grid': main_layout, 
    'enlarged': empty_enlarged,
    **enlarged_plots
})
resources  = CDN.render()

# Prepare locations JS object and dropdowns from CSV
locations_js = '{\n' + ',\n'.join([
    f'  "{row["location"]}": {{lat: {row["lat"]}, lng: {row["lon"]}}}'
    for _, row in coords_df.iterrows()
]) + '\n}'
origin_options = '<option value="">-- Select Origin --</option>\n' + '\n'.join([
    f'<option value="{row["location"]}">{row["location"]}</option>'
    for _, row in coords_df.iterrows()
])
dest_options = '<option value="">-- Select Destination --</option>\n' + '\n'.join([
    f'<option value="{row["location"]}">{row["location"]}</option>'
    for _, row in coords_df.iterrows()
])

# Add coverage and uncertainty level options
coverage_options = '<option value="">-- Select Coverage Level --</option>\n' + '\n'.join([
    f'<option value="{val}">{val}</option>'
    for val in ['0.7', '0.75', '0.8', '0.85', '0.9', '0.95', '1.0']
])
uncertainty_options = '<option value="">-- Select Uncertainty Level --</option>\n' + '\n'.join([
    f'<option value="{val}">{val}</option>'
    for val in ['0.7', '0.75', '0.8', '0.85', '0.9', '0.95', '1.0']
])

# Generate all enlarged plot divs as hidden elements
enlarged_divs_html = '\n'.join([
    f'<div id="enlarged-{key}" style="display:none;">{div_content}</div>'
    for key, div_content in div.items() if key != 'main_grid'
])

html = f"""
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>⎯⎯ My Travel-Time Dashboard ⎯⎯</title>
  {resources}
  {script}
  <style>
    body {{ font-family:sans-serif; margin:20px; }}
    
    /* Three-panel layout container */
    .top-panel {{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 20px;
        gap: 20px;
    }}
    
    #google-map {{
        width: 800px;
        height: 600px;
        border: 1px solid #ccc;
        flex-shrink: 0;
    }}
    
    #enlarged-container {{
        width: 450px;  /* Match enlarged plot width */
        height: 600px;  /* Match map height */
        border: 1px solid #ccc;
        flex-shrink: 0;
        position: relative;  /* Enable absolute positioning for child elements */
        margin-top: 90px;  /* Provide space for the text above with new positioning */
    }}
    
    #heatmap-container {{ 
        width:95vw;    /* Use most of viewport width */
        height:auto;   /* auto height to preserve aspect */
        max-width:1400px; /* Allow it to get larger */
        margin:0 auto;
        display: flex;
        justify-content: center;
    }}
    
    .controls {{ 
        text-align: center; 
        margin-bottom: 20px; 
        font-size: 18px;  /* Larger font */
        padding: 15px;    /* More padding */
    }}
    
    .controls select {{
        font-size: 16px;   /* Larger select boxes */
        padding: 8px 12px; /* More padding in selects */
        margin: 0 10px;    /* Space between elements */
        min-width: 150px;  /* Minimum width for dropdowns */
    }}
    
    h1 {{ text-align: center; }}
    
    /* Hide Bokeh logo and any toolbar elements */
    .bk-logo, .bk-toolbar, .bk-toolbar-button, .bk-button-bar {{ 
        display: none !important; 
    }}
    
    /* Hide any remaining Bokeh UI elements */
    .bk-toolbar-right, .bk-toolbar-left, .bk-toolbar-above, .bk-toolbar-below {{
        display: none !important;
    }}
  </style>
</head>
<body>
  <div class="controls">
    Origin:
    <select id="origin">{origin_options}</select>
    Destination:
    <select id="destination">{dest_options}</select>
    Coverage Level:
    <select id="coverage">{coverage_options}</select>
    Uncertainty Level:
    <select id="uncertainty">{uncertainty_options}</select>
  </div>
  
  <!-- Top panel with map and enlarged display -->
  <div class="top-panel">
    <div id="google-map"></div>
    <div id="enlarged-container">
      <div id="travel-time-range" style="position: absolute; top: -80px; right: 20px; font-weight: bold; color: #2c3e50; white-space: nowrap;">Possible Range: <span id="min-time" style="color: green;">--</span> to <span id="max-time" style="color: red;">--</span></div>
      <div id="travel-time-specific" style="position: absolute; top: -50px; right: 20px; font-weight: bold; color: black; white-space: nowrap;">Travel Time Prediction: <span style="color: black;">--</span></div>
      {enlarged_divs_html}
    </div>
  </div>
  
  <!-- Bottom panel with full grid -->
  <div id="heatmap-container">
    {div['main_grid']}
  </div>
  
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXbSYStWSMczRjNpmCR-kM_vYn2fGu8vk"></script>
  <script>
    const locations = {locations_js};
    let map, originMarker, destMarker, line;
    
    function initMap() {{
      map = new google.maps.Map(document.getElementById('google-map'), {{
        center: {{lat: 43.5, lng: -80.0}},
        zoom: 5
      }});
      updateMap();
    }}
    
    function updateMap() {{
      const originName = document.getElementById('origin').value;
      const destName = document.getElementById('destination').value;
      const origin = locations[originName];
      const destination = locations[destName];
      console.log('[Map] updateMap called with', originName, destName, origin, destination);
      
      // Clear existing markers and line
      if (originMarker) originMarker.setMap(null);
      if (destMarker) destMarker.setMap(null);
      if (line) line.setMap(null);
      
      if (!origin || !destination || !originName || !destName) return;
      
      originMarker = new google.maps.Marker({{
        position: origin,
        map: map,
        title: 'Origin: ' + originName,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      }});
      destMarker = new google.maps.Marker({{
        position: destination,
        map: map,
        title: 'Destination: ' + destName,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
      }});
      line = new google.maps.Polyline({{
        path: [origin, destination],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map
      }});
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(origin);
      bounds.extend(destination);
      map.fitBounds(bounds);
    }}
    
    function updateEnlargedDisplay() {{
      const originName = document.getElementById('origin').value;
      const destName = document.getElementById('destination').value;
      
      console.log('[Enlarged] Updating display for', originName, destName);
      
      // Hide all enlarged plots first
      const container = document.getElementById('enlarged-container');
      const allEnlarged = container.querySelectorAll('[id^="enlarged-"]');
      allEnlarged.forEach(div => div.style.display = 'none');
      
      if (!originName || !destName) {{
        // Show default empty state
        const emptyDiv = document.getElementById('enlarged-enlarged');
        if (emptyDiv) emptyDiv.style.display = 'block';
      }} else {{
        // Show specific enlarged plot
        const plotKey = `${{originName}}_${{destName}}`;
        const plotDiv = document.getElementById(`enlarged-${{plotKey}}`);
        if (plotDiv) {{
          plotDiv.style.display = 'block';
        }} else {{
          // Fallback to empty state
          const emptyDiv = document.getElementById('enlarged-enlarged');
          if (emptyDiv) emptyDiv.style.display = 'block';
        }}
      }}
    }}
    
    // Function to map coverage and uncertainty to grid coordinates
    function getGridCoordinates(coverage, uncertainty) {{
      // Coverage levels: 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0 (columns 0-6)
      // Uncertainty levels: 1.0, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7 (rows 0-6, top to bottom)
      const coverageLevels = ['0.7', '0.75', '0.8', '0.85', '0.9', '0.95', '1.0'];
      const uncertaintyLevels = ['1.0', '0.95', '0.9', '0.85', '0.8', '0.75', '0.7'];
      
      const col = coverageLevels.indexOf(coverage);
      const row = uncertaintyLevels.indexOf(uncertainty);
      
      return {{ row: row, col: col }};
    }}
    
    // Function to get travel time value for specific coordinates
    function getTravelTimeValue(origin, destination, coverage, uncertainty) {{
      if (!origin || !destination || !coverage || !uncertainty) return null;
      
      const bokehDocs = window.Bokeh ? window.Bokeh.documents : [];
      if (!bokehDocs || bokehDocs.length === 0) return null;
      
      const doc = bokehDocs[0];
      const src = doc.get_model_by_name(`enlarged_src_${{origin}}_${{destination}}`);
      if (!src) return null;
      
      const coords = getGridCoordinates(coverage, uncertainty);
      if (coords.row === -1 || coords.col === -1) return null;
      
      // Find the data point that matches these coordinates
      for (let i = 0; i < src.data['x'].length; i++) {{
        if (src.data['x'][i] === coords.col && src.data['y'][i] === coords.row) {{
          return Math.ceil(src.data['val'][i]); // Round up
        }}
      }}
      return null;
    }}
    
    // Function to get min/max travel time values for the current grid
    function getTravelTimeRange(origin, destination) {{
      if (!origin || !destination) return null;
      
      const bokehDocs = window.Bokeh ? window.Bokeh.documents : [];
      if (!bokehDocs || bokehDocs.length === 0) return null;
      
      const doc = bokehDocs[0];
      const src = doc.get_model_by_name(`enlarged_src_${{origin}}_${{destination}}`);
      if (!src || !src.data['val'] || src.data['val'].length === 0) return null;
      
      const values = src.data['val'];
      const minVal = Math.ceil(Math.min(...values)); // Round up
      const maxVal = Math.ceil(Math.max(...values)); // Round up
      
      return {{ min: minVal, max: maxVal }};
    }}
    
    // Function to calculate optimal font size for text to fit in container
    function getOptimalFontSize(element, maxWidth) {{
      const minSize = 12;
      const maxSize = 25;  // Reduced from 40 to 25
      let fontSize = maxSize;
      
      // Create a temporary span to measure text width
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.position = 'absolute';
      tempSpan.style.fontWeight = element.style.fontWeight;
      tempSpan.style.whiteSpace = 'nowrap';
      document.body.appendChild(tempSpan);
      
      // Binary search for optimal font size
      let low = minSize;
      let high = maxSize;
      
      while (low <= high) {{
        fontSize = Math.floor((low + high) / 2);
        tempSpan.style.fontSize = fontSize + 'px';
        tempSpan.innerHTML = element.innerHTML;
        
        if (tempSpan.offsetWidth <= maxWidth) {{
          low = fontSize + 1;
        }} else {{
          high = fontSize - 1;
        }}
      }}
      
      document.body.removeChild(tempSpan);
      return high; // Return the largest size that fits
    }}
    
    // Function to update font sizes dynamically
    function updateFontSizes() {{
      const rangeElement = document.getElementById('travel-time-range');
      const specificElement = document.getElementById('travel-time-specific');
      
      // Maximum width (container width minus right margin)
      const maxWidth = 400; // Approximate max width before going off screen
      
      // Get optimal font sizes for both elements
      const rangeOptimalSize = getOptimalFontSize(rangeElement, maxWidth);
      const specificOptimalSize = getOptimalFontSize(specificElement, maxWidth);
      
      // Use the smaller of the two sizes for both elements
      const finalSize = Math.min(rangeOptimalSize, specificOptimalSize);
      
      rangeElement.style.fontSize = finalSize + 'px';
      specificElement.style.fontSize = finalSize + 'px';
    }}
    
    // Function to update travel time display
    function updateTravelTimeDisplay() {{
      const origin = document.getElementById('origin').value;
      const destination = document.getElementById('destination').value;
      const coverage = document.getElementById('coverage').value;
      const uncertainty = document.getElementById('uncertainty').value;
      
      const rangeElement = document.getElementById('travel-time-range');
      const specificElement = document.getElementById('travel-time-specific');
      const minTimeSpan = document.getElementById('min-time');
      const maxTimeSpan = document.getElementById('max-time');
      
      // Update range display
      const range = getTravelTimeRange(origin, destination);
      if (range !== null) {{
        minTimeSpan.textContent = `${{range.min}} min`;
        maxTimeSpan.textContent = `${{range.max}} min`;
      }} else {{
        minTimeSpan.textContent = '--';
        maxTimeSpan.textContent = '--';
      }}
      
      // Update specific travel time display
      const travelTime = getTravelTimeValue(origin, destination, coverage, uncertainty);
      if (travelTime !== null && coverage && uncertainty) {{
        specificElement.innerHTML = `Travel Time Prediction: <span style="color: black;">${{travelTime}} min</span>`;
      }} else {{
        specificElement.innerHTML = `Travel Time Prediction: <span style="color: black;">--</span>`;
      }}
      
      // Update font sizes after content change
      setTimeout(() => updateFontSizes(), 10);
    }}
    
    // Unified update function
    function updateAll() {{
      console.log('[updateAll] Called');
      updateMap();
      updateEnlargedDisplay();
      accentuateGrid();
      accentuateEnlargedGrids();
      updateTravelTimeDisplay();
    }}
    
    window.onload = function() {{
      initMap();
      updateEnlargedDisplay();
      accentuateGrid();
      accentuateEnlargedGrids();
      updateTravelTimeDisplay();
      updateFontSizes();
      // Attach listeners
      document.getElementById('origin').addEventListener('change', updateAll);
      document.getElementById('destination').addEventListener('change', updateAll);
      document.getElementById('coverage').addEventListener('change', updateAll);
      document.getElementById('uncertainty').addEventListener('change', updateAll);
    }};
  </script>
  <script>
    // Bokeh grid accentuation logic for main 11x11 grid
    function accentuateGrid() {{
      const bokehDocs = window.Bokeh ? window.Bokeh.documents : [];
      if (!bokehDocs || bokehDocs.length === 0) {{
        console.log('[Grid] No Bokeh docs found');
        return;
      }}
      const doc = bokehDocs[0];
      const origins = {origins};
      const destinations = {destinations};
      const origin = document.getElementById('origin').value;
      const dest = document.getElementById('destination').value;
      console.log('[Grid] accentuateGrid called with', origin, dest);
      
      for (let i=0; i<origins.length; ++i) {{
        for (let j=0; j<destinations.length; ++j) {{
          let src = doc.get_model_by_name(`src_${{origins[i]}}_${{destinations[j]}}`);
          if (!src) continue;
          
          // If either origin or dest is empty, show all at full opacity
          let is_selected = origin && dest && (origins[i] === origin && destinations[j] === dest);
          let new_alpha = src.data['alpha'].map(_ => {{
            if (!origin || !dest) return 1;  // Full opacity when nothing selected
            return is_selected ? 1 : 0.1;    // Highlight only selected
          }});
          src.data['alpha'] = new_alpha;
          src.change.emit();
        }}
      }}
    }}
    
    // Bokeh grid accentuation logic for enlarged grids
    function accentuateEnlargedGrids() {{
      const bokehDocs = window.Bokeh ? window.Bokeh.documents : [];
      if (!bokehDocs || bokehDocs.length === 0) {{
        console.log('[EnlargedGrid] No Bokeh docs found');
        return;
      }}
      const doc = bokehDocs[0];
      const origins = {origins};
      const destinations = {destinations};
      const origin = document.getElementById('origin').value;
      const dest = document.getElementById('destination').value;
      const coverage = document.getElementById('coverage').value;
      const uncertainty = document.getElementById('uncertainty').value;
      
      console.log('[EnlargedGrid] accentuateEnlargedGrids called with', origin, dest, coverage, uncertainty);
      
      for (let i=0; i<origins.length; ++i) {{
        for (let j=0; j<destinations.length; ++j) {{
          let src = doc.get_model_by_name(`enlarged_src_${{origins[i]}}_${{destinations[j]}}`);
          if (!src) continue;
          
          // Check if this is the currently displayed origin-destination pair
          let is_current_pair = origin && dest && (origins[i] === origin && destinations[j] === dest);
          
          if (!is_current_pair) {{
            // For non-current pairs, set all to full opacity
            let new_alpha = src.data['alpha'].map(_ => 1);
            src.data['alpha'] = new_alpha;
            src.change.emit();
            continue;
          }}
          
          // For the current pair, handle coverage/uncertainty highlighting
          let new_alpha = src.data['alpha'].map((_, idx) => {{
            const x = src.data['x'][idx];
            const y = src.data['y'][idx];
            
            // If both coverage and uncertainty are specified, highlight exact cell
            if (coverage && uncertainty) {{
              const coords = getGridCoordinates(coverage, uncertainty);
              return (x === coords.col && y === coords.row) ? 1 : 0.1;
            }}
            // If only uncertainty is specified, highlight the entire row
            else if (uncertainty && !coverage) {{
              const coords = getGridCoordinates('0.7', uncertainty); // Use any coverage for row
              return (y === coords.row) ? 1 : 0.1;
            }}
            // If only coverage is specified, highlight the entire column
            else if (coverage && !uncertainty) {{
              const coords = getGridCoordinates(coverage, '0.7'); // Use any uncertainty for column
              return (x === coords.col) ? 1 : 0.1;
            }}
            // If neither is specified, show all at full opacity
            else {{
              return 1;
            }}
          }});
          
          src.data['alpha'] = new_alpha;
          src.change.emit();
        }}
      }}
    }}
  </script>
</body>
</html>
"""

with open("index.html","w") as f:
    f.write(html)

print("✔️  index.html written with coverage/uncertainty controls — open it in your browser to try it out.") 