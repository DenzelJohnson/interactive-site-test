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
    row_srcs.append(None)  # No data source for label
    
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
            src = ColumnDataSource({'x':xs,'y':ys,'val':vals, 'alpha':[1]*49}, name=f'src_{o}_{d}')

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
                ("Origin",      o),
                ("Destination", d),
                ("row (y)",     "@y"),
                ("col (x)",     "@x"),
                ("value",       "@val{0}")  # Round to whole number
            ]
            p.axis.visible = False
            p.grid.visible = False
        else:
            src = ColumnDataSource({'x':[], 'y':[], 'val':[], 'alpha':[]}, name=f'src_{o}_{d}')
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
            
            src = ColumnDataSource({'x':xs,'y':ys,'val':vals})
            
            # Create enlarged plot (400x400px)
            p_large = figure(
                tools="hover",
                toolbar_location=None,
                x_range=(-0.5,6.5), y_range=(-0.5,6.5),
                sizing_mode='fixed',
                width=450, height=450,  # Larger to better fill the container
                title=f"{o} → {d}"
            )
            p_large.rect('x','y',1,1, source=src, line_color="white", line_width=1,
                        fill_color={'field':'val','transform':mapper})
            hover = p_large.select_one(HoverTool)
            hover.tooltips = [
                ("Origin",      o),
                ("Destination", d),
                ("row (y)",     "@y"),
                ("col (x)",     "@x"),
                ("value",       "@val{0}")  # Round to whole number
            ]
            p_large.axis.visible = False
            p_large.grid.visible = False
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

# Generate all enlarged plot divs as hidden elements
enlarged_divs_html = '\n'.join([
    f'<div id="enlarged-{key}" style="display:none;">{div_content}</div>'
    for key, div_content in div.items() if key != 'main_grid'
])

html = f"""
<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\">
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
        width: 700px;
        height: 500px;
        border: 1px solid #ccc;
        flex-shrink: 0;
    }}
    
    #enlarged-container {{
        width: 450px;  /* Match enlarged plot width */
        height: 500px;  /* Match map height */
        border: 1px solid #ccc;
        flex-shrink: 0;
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
    
    .controls button {{
        font-size: 16px;   /* Larger button */
        padding: 8px 16px; /* More padding in button */
        margin-left: 15px; /* Space from dropdowns */
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
    <button id="main-submit" onclick="updateAll()">Submit</button>
  </div>
  
  <!-- Top panel with map and enlarged display -->
  <div class="top-panel">
    <div id="google-map"></div>
    <div id="enlarged-container">
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
    
    // Unified update function
    function updateAll() {{
      console.log('[updateAll] Called');
      updateMap();
      updateEnlargedDisplay();
      accentuateGrid();
    }}
    
    window.onload = function() {{
      initMap();
      updateEnlargedDisplay();
      accentuateGrid();
      // Attach listeners
      document.getElementById('origin').addEventListener('change', updateAll);
      document.getElementById('destination').addEventListener('change', updateAll);
      document.getElementById('main-submit').addEventListener('click', updateAll);
    }};
  </script>
  <script>
    // Bokeh grid accentuation logic
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
  </script>
</body>
</html>
"""

with open("index.html","w") as f:
    f.write(html)

print("✔️  index.html written — open it in your browser to try it out.")
