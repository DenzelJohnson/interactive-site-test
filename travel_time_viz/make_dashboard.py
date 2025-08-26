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
header_row[-1].min_border = 0
header_row[-1].min_border_left = 0
header_row[-1].min_border_right = 0
header_row[-1].outline_line_color = None

for d in destinations:
    header_fig = figure(width=80, height=40, toolbar_location=None, tools="")
    header_fig.name = f'header_{d}'
    header_fig.text(x=[0.5], y=[0.5], text=[d], text_align="center", text_baseline="middle", 
                   text_font_size="10pt", text_font_style="bold")
    header_fig.x_range.range_padding = 0
    header_fig.y_range.range_padding = 0
    header_fig.axis.visible = False
    header_fig.grid.visible = False
    header_fig.min_border = 0
    header_fig.min_border_left = 0
    header_fig.min_border_right = 0
    header_fig.outline_line_color = None
    header_row.append(header_fig)

plots.append(header_row)

# Create data rows with origin labels  
data_plot_sources = []  # Separate tracking for data sources
for i, o in enumerate(origins):
    row_plots = []
    row_srcs = []
    
    # Add origin label as first cell in row
    origin_fig = figure(width=80, height=80, toolbar_location=None, tools="")
    origin_fig.name = f'origin_{o}'
    origin_fig.text(x=[0.5], y=[0.5], text=[o], text_align="center", text_baseline="middle",
                   text_font_size="10pt", text_font_style="bold", angle=1.5708)  # 90 degrees
    origin_fig.x_range.range_padding = 0
    origin_fig.y_range.range_padding = 0
    origin_fig.axis.visible = False
    origin_fig.grid.visible = False
    origin_fig.min_border = 0
    origin_fig.min_border_left = 0
    origin_fig.min_border_right = 0
    origin_fig.outline_line_color = None
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
            cov_labels = ['0.7','0.75','0.8','0.85','0.9','0.95','1.0']
            unc_labels = ['1.0','0.95','0.9','0.85','0.8','0.75','0.7']
            cov_text = [cov_labels[x] for x in xs]
            unc_text = [unc_labels[y] for y in ys]
            val_up = np.ceil(vals).astype(int)
            src = ColumnDataSource({'x':xs,'y':ys,'val':vals, 'alpha':[1]*49, 'cov_text': cov_text, 'unc_text': unc_text, 'val_up': val_up}, name=f'src_{o}_{d}')

            p = figure(
                tools="hover",
                toolbar_location=None,
                x_range=(0,6), y_range=(0,6),
                sizing_mode='fixed',
                width=80, height=80  # Larger cells
            )
            p.name = f'cell_{o}_{d}'
            p.rect('x','y',1,1, source=src, line_color=None,
                   fill_color={'field':'val','transform':mapper}, fill_alpha='alpha')
            hover = p.select_one(HoverTool)
            hover.tooltips = f"""
            <div style='font-size:25px; line-height:1.25; color:#000; font-family: Open Sans, Arial, sans-serif;'>
              <div><b>Origin:</b> {o}</div>
              <div><b>Destination:</b> {d}</div>
              <div><b>Coverage Level:</b> @cov_text</div>
              <div><b>Uncertainty Level:</b> @unc_text</div>
              <div><b>Travel Time:</b> @val_up min</div>
            </div>
            """
            p.axis.visible = False
            p.grid.visible = False
            p.min_border = 0
            p.min_border_left = 0
            p.min_border_right = 0
            p.outline_line_color = None
        else:
            src = ColumnDataSource({'x':[], 'y':[], 'val':[], 'alpha':[]}, name=f'src_{o}_{d}')
            p = figure(width=80, height=80, toolbar_location=None, tools="")
            p.axis.visible = False
            p.grid.visible = False
            p.min_border = 0
            p.min_border_left = 0
            p.min_border_right = 0
            p.outline_line_color = None
        row_plots.append(p)
        row_srcs.append(src)
    plots.append(row_plots)
    data_plot_sources.append(row_srcs)

grid = gridplot(plots, sizing_mode='fixed', toolbar_location=None, merge_tools=True)

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
colorbar_fig.name = 'colorbar'
colorbar_fig.add_layout(color_bar, 'right')
colorbar_fig.axis.visible = False
colorbar_fig.grid.visible = False
colorbar_fig.min_border = 0
colorbar_fig.min_border_left = 0
colorbar_fig.min_border_right = 0
colorbar_fig.outline_line_color = None

# Combine grid and color bar in a row layout
main_layout = row(grid, colorbar_fig, sizing_mode='fixed', spacing=0)

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
            cov_labels = ['0.7','0.75','0.8','0.85','0.9','0.95','1.0']
            unc_labels = ['1.0','0.95','0.9','0.85','0.8','0.75','0.7']
            cov_text = [cov_labels[x] for x in xs]
            unc_text = [unc_labels[y] for y in ys]
            val_up = np.ceil(vals).astype(int)
            src = ColumnDataSource({'x':xs,'y':ys,'val':vals, 'alpha':[1]*49, 'cov_text': cov_text, 'unc_text': unc_text, 'val_up': val_up}, name=f'enlarged_src_{o}_{d}')
            
            # Create enlarged plot (400x400px)
            p_large = figure(
                tools="hover",
                toolbar_location=None,
                x_range=(-0.5,6.5), y_range=(-0.5,6.5),
                sizing_mode='fixed',
                width=450, height=450,  # Larger to better fill the container
                title=f"{o} → {d}"
            )
            p_large.name = f'enlarged_{o}_{d}'
            p_large.rect('x','y',1,1, source=src, line_color="white", line_width=1,
                        fill_color={'field':'val','transform':mapper}, fill_alpha='alpha')
            hover = p_large.select_one(HoverTool)
            hover.tooltips = f"""
            <div style='font-size:25px; line-height:1.25; color:#000; font-family: Open Sans, Arial, sans-serif;'>
              <div><b>Coverage Level:</b> @cov_text</div>
              <div><b>Uncertainty Level:</b> @unc_text</div>
              <div><b>Travel Time:</b> @val_up min</div>
            </div>
            """
            p_large.axis.visible = True
            p_large.xaxis.axis_label = "Coverage Level"
            p_large.yaxis.axis_label = "Uncertainty Level"
            p_large.xaxis.ticker = FixedTicker(ticks=[0,1,2,3,4,5,6])
            p_large.yaxis.ticker = FixedTicker(ticks=[0,1,2,3,4,5,6])
            p_large.xaxis.major_label_overrides = {0:'0.7',1:'0.75',2:'0.8',3:'0.85',4:'0.9',5:'0.95',6:'1.0'}
            p_large.yaxis.major_label_overrides = {0:'1.0',1:'0.95',2:'0.9',3:'0.85',4:'0.8',5:'0.75',6:'0.7'}
            p_large.xaxis.axis_label_text_font_size = "16pt"
            p_large.yaxis.axis_label_text_font_size = "16pt"
            p_large.xaxis.major_label_text_font_size = "14pt"
            p_large.yaxis.major_label_text_font_size = "14pt"
            p_large.title.text_font_size = "18pt"
            p_large.xgrid.grid_line_color = "#f0f0f0"
            p_large.ygrid.grid_line_color = "#f0f0f0"
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

# Precompute JS snippets for responsive sizing
resize_headers_js = '\n'.join([
    f"let h_{i}=doc.get_model_by_name('header_{destinations[i]}'); if(h_{i}){{h_{i}.width=cellW;h_{i}.height=headerH;h_{i}.change.emit();}}"
    for i in range(len(destinations))
])
resize_origins_js = '\n'.join([
    f"let o_{i}=doc.get_model_by_name('origin_{origins[i]}'); if(o_{i}){{o_{i}.width=cellW;o_{i}.height=cellH;o_{i}.change.emit();}}"
    for i in range(len(origins))
])
resize_cells_js = '\n'.join([
    '\n'.join([
        f"let c_{i}_{j}=doc.get_model_by_name('cell_{origins[i]}_{destinations[j]}'); if(c_{i}_{j}){{c_{i}_{j}.width=cellW;c_{i}_{j}.height=cellH;c_{i}_{j}.change.emit();}}"
        for j in range(len(destinations))
    ])
    for i in range(len(origins))
])
resize_enlarged_js = '\n'.join([
    '\n'.join([
        f"let e_{i}_{j}=doc.get_model_by_name('enlarged_{origins[i]}_{destinations[j]}'); if(e_{i}_{j}){{e_{i}_{j}.width=availW;e_{i}_{j}.height=availH;e_{i}_{j}.change.emit();}}"
        for j in range(len(destinations))
    ])
    for i in range(len(origins))
])

html = f"""
<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\">
  <title>⎯⎯ My Travel-Time Dashboard ⎯⎯</title>
  {resources}
  {script}
  <link href=\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap\" rel=\"stylesheet\">
  <style>
    :root {{ --map-w: 45vw; --map-h: 50vh; --enlarged-w: 40vw; --enlarged-h: 50vh; }}
    body {{ font-family:'Open Sans', Arial, sans-serif; margin:20px; }}
    .bk-root, .bk-tooltip, select, button, input, label {{ font-family:'Open Sans', Arial, sans-serif; }}
    .top-panel {{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 2vh;
        gap: 2vw;
        flex-wrap: wrap;
    }}
    #google-map {{
        width: var(--map-w);
        height: var(--map-h);
        border: 1px solid #ccc;
        flex-shrink: 0;
    }}
    #enlarged-container {{
        width: var(--enlarged-w);
        height: var(--enlarged-h);
        border: 1px solid #ccc;
        flex-shrink: 0;
        padding: 1vh 1vw;
        box-sizing: border-box;
    }}
    #heatmap-outer {{ width: 96vw; margin: 0 auto; overflow: hidden; }}
    #heatmap-scale {{ display: inline-block; transform-origin: top left; }}
    .controls {{ 
        text-align: center; 
        margin-bottom: 2vh; 
        font-size: clamp(16px, 2.2vw, 28px);
        padding: clamp(8px, 1.5vh, 18px);
        display: flex;
        gap: 1.2vw;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }}
    .controls select {{
        font-size: clamp(14px, 1.8vw, 22px);
        padding: clamp(8px, 1.2vh, 14px) clamp(10px, 1.2vw, 16px);
        min-width: clamp(140px, 14vw, 280px);
    }}
    h1 {{ text-align: center; }}
    .bk-logo, .bk-toolbar, .bk-toolbar-button, .bk-button-bar {{ display: none !important; }}
    .bk-toolbar-right, .bk-toolbar-left, .bk-toolbar-above, .bk-toolbar-below {{ display: none !important; }}
    #travel-time-range {{ font-weight:bold; color:#2c3e50; margin-bottom:1vh; font-size: clamp(18px, 2vw, 30px); text-align:center; }}
    #travel-time-specific {{ font-weight:bold; color:black; margin-bottom:1.2vh; font-size: clamp(18px, 2vw, 30px); text-align:center; }}
    #travel-time-range span#min-time {{ color: green; }}
    #travel-time-range span#max-time {{ color: red; }}
  </style>
</head>
<body>
  <div class=\"controls\">\n    Origin:\n    <select id=\"origin\">{origin_options}</select>\n    Destination:\n    <select id=\"destination\">{dest_options}</select>\n    Coverage Level:\n    <select id=\"coverage\">\n      <option value=\"\">Any</option>\n      <option value=\"0.7\">0.7</option>\n      <option value=\"0.75\">0.75</option>\n      <option value=\"0.8\">0.8</option>\n      <option value=\"0.85\">0.85</option>\n      <option value=\"0.9\">0.9</option>\n      <option value=\"0.95\">0.95</option>\n      <option value=\"1.0\">1.0</option>\n    </select>\n    Uncertainty Level:\n    <select id=\"uncertainty\">\n      <option value=\"\">Any</option>\n      <option value=\"1.0\">1.0</option>\n      <option value=\"0.95\">0.95</option>\n      <option value=\"0.9\">0.9</option>\n      <option value=\"0.85\">0.85</option>\n      <option value=\"0.8\">0.8</option>\n      <option value=\"0.75\">0.75</option>\n      <option value=\"0.7\">0.7</option>\n    </select>
  </div>
  
  <!-- Top panel with map and enlarged display -->
  <div class=\"top-panel\">\n    <div id=\"google-map\"></div>\n    <div id=\"enlarged-container\">\n      <div id=\"travel-time-range\">Possible Range: <span id=\"min-time\">--</span> to <span id=\"max-time\">--</span></div>\n      <div id=\"travel-time-specific\">Travel Time Prediction: <span id=\"predicted-time\">--</span></div>\n      {enlarged_divs_html}\n    </div>\n  </div>
  
  <!-- Bottom panel with full grid -->
  <div id=\"heatmap-outer\">
    <div id=\"heatmap-scale\">{div['main_grid']}</div>
  </div>
  
  <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBXbSYStWSMczRjNpmCR-kM_vYn2fGu8vk\"></script>
  <script>
    const locations = {locations_js};
    const covVals = ["0.7","0.75","0.8","0.85","0.9","0.95","1.0"];
    const uncVals = ["1.0","0.95","0.9","0.85","0.8","0.75","0.7"];
    const NUM_ORIGINS = {len(origins)};
    const NUM_DESTS = {len(destinations)};
    let map, originMarker, destMarker, line;
    let scaleRaf = 0;
    // Resize performance helpers
    let lastCellW = -1, lastCellH = -1, lastHeaderH = -1;
    let resizeRaf = 0;
    
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
      const container = document.getElementById('enlarged-container');
      const allEnlarged = container.querySelectorAll('[id^=\"enlarged-\"]');
      allEnlarged.forEach(div => div.style.display = 'none');
      if (!originName || !destName) {{
        const emptyDiv = document.getElementById('enlarged-enlarged');
        if (emptyDiv) emptyDiv.style.display = 'block';
      }} else {{
        const plotKey = `${{originName}}_${{destName}}`;
        const plotDiv = document.getElementById(`enlarged-${{plotKey}}`);
        if (plotDiv) plotDiv.style.display = 'block';
      }}
    }}

    function getSelectedEnlargedSource() {{
      const bokehDocs = window.Bokeh ? window.Bokeh.documents : [];
      if (!bokehDocs || bokehDocs.length === 0) return null;
      const originName = document.getElementById('origin').value;
      const destName = document.getElementById('destination').value;
      if (!originName || !destName) return null;
      const doc = bokehDocs[0];
      return doc.get_model_by_name(`enlarged_src_${{originName}}_${{destName}}`);
    }}

    function accentuateEnlarged() {{
      const src = getSelectedEnlargedSource();
      if (!src) return;
      const covSel = document.getElementById('coverage').value;
      const uncSel = document.getElementById('uncertainty').value;
      const xs = src.data['x'];
      const ys = src.data['y'];
      let newAlpha = xs.map((x, idx) => {{
        const y = ys[idx];
        const covIdx = covVals.indexOf(covSel);
        const uncIdx = uncVals.indexOf(uncSel);
        if (covIdx === -1 && uncIdx === -1) return 1;
        if (covIdx !== -1 && uncIdx !== -1) return (x === covIdx && y === uncIdx) ? 1 : 0.15;
        if (covIdx !== -1) return (x === covIdx) ? 1 : 0.15;
        return (y === uncIdx) ? 1 : 0.15;
      }});
      src.data['alpha'] = newAlpha;
      src.change.emit();
    }}

    function updateTravelTimeDisplay() {{
      const src = getSelectedEnlargedSource();
      const minEl = document.getElementById('min-time');
      const maxEl = document.getElementById('max-time');
      const predEl = document.getElementById('predicted-time');
      if (!src) {{
        minEl.textContent = '--';
        maxEl.textContent = '--';
        predEl.textContent = '--';
        return;
      }}
      const vals = src.data['val'];
      if (!vals || vals.length === 0) {{
        minEl.textContent = '--';
        maxEl.textContent = '--';
        predEl.textContent = '--';
        return;
      }}
      const minVal = Math.min(...vals);
      const maxVal = Math.max(...vals);
      minEl.textContent = Math.floor(minVal);
      maxEl.textContent = Math.ceil(maxVal);

      const covSel = document.getElementById('coverage').value;
      const uncSel = document.getElementById('uncertainty').value;
      const covIdx = covVals.indexOf(covSel);
      const uncIdx = uncVals.indexOf(uncSel);
      if (covIdx === -1 || uncIdx === -1) {{
        predEl.textContent = '--';
        return;
      }}
      const xs = src.data['x'];
      const ys = src.data['y'];
      const valsArr = src.data['val'];
      for (let i=0; i<xs.length; ++i) {{
        if (xs[i] === covIdx && ys[i] === uncIdx) {{
          predEl.textContent = Math.ceil(valsArr[i]);
          return;
        }}
      }}
      predEl.textContent = '--';
    }}

    function resizeLayout() {{
      const bokehDocs = window.Bokeh ? window.Bokeh.documents : [];
      if (!bokehDocs || bokehDocs.length === 0) return;
      const doc = bokehDocs[0];
      const totalCols = 1 + NUM_DESTS;
      const gridWidth = Math.max(600, Math.floor(window.innerWidth * 0.92));
      const cellW = Math.max(60, Math.floor(gridWidth / totalCols));
      const cellH = cellW;
      const headerH = Math.max(40, Math.floor(cellH * 0.6));
      // If nothing actually changed, skip heavy updates
      if (cellW === lastCellW && cellH === lastCellH && headerH === lastHeaderH) return;
      lastCellW = cellW; lastCellH = cellH; lastHeaderH = headerH;
      // Compute target base size once at load, then scale container instead of touching every plot
      // On first run, size the plots; afterward, only apply CSS scale
      if (!doc._did_initial_layout) {{
        {resize_headers_js}
        {resize_origins_js}
        {resize_cells_js}
        const cb = doc.get_model_by_name('colorbar');
        if (cb) {{ cb.height = headerH + (NUM_ORIGINS*cellH) + 20; cb.width = Math.max(60, Math.floor(window.innerWidth*0.06)); cb.change.emit(); }}
        doc._did_initial_layout = true;
      }}
      // Scale the grid container to target width without redrawing plots
      const scaleHost = document.getElementById('heatmap-scale');
      if (scaleHost) {{
        // Base width equals (1 + NUM_DESTS) * lastCellW; add small gutter
        const baseW = (1 + NUM_DESTS) * lastCellW + 40;
        const outerW = document.getElementById('heatmap-outer').clientWidth;
        const scale = Math.max(0.5, Math.min(outerW / baseW, 2));
        scaleHost.style.transform = 'scale(' + scale + ')';
      }}
      // enlarged plot sizes
      const box = document.getElementById('enlarged-container');
      const availW = box.clientWidth - 16; const availH = box.clientHeight - 110;
      {resize_enlarged_js}
    }}

    function updateAll() {{
      updateMap();
      updateEnlargedDisplay();
      accentuateGrid();
      accentuateEnlarged();
      updateTravelTimeDisplay();
      resizeLayout();
    }}
    
    window.onload = function() {{
      initMap();
      updateEnlargedDisplay();
      accentuateGrid();
      accentuateEnlarged();
      updateTravelTimeDisplay();
      resizeLayout();
      document.getElementById('origin').addEventListener('change', updateAll);
      document.getElementById('destination').addEventListener('change', updateAll);
      document.getElementById('coverage').addEventListener('change', updateAll);
      document.getElementById('uncertainty').addEventListener('change', updateAll);
      window.addEventListener('resize', () => {{
        if (resizeRaf) cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(resizeLayout);
      }});
    }};
  </script>
  <script>
    // Bokeh grid accentuation logic
    function accentuateGrid() {{
      const bokehDocs = window.Bokeh ? window.Bokeh.documents : [];
      if (!bokehDocs || bokehDocs.length === 0) {{ return; }}
      const doc = bokehDocs[0];
      const origins = {origins};
      const destinations = {destinations};
      const origin = document.getElementById('origin').value;
      const dest = document.getElementById('destination').value;
      for (let i=0; i<origins.length; ++i) {{
        for (let j=0; j<destinations.length; ++j) {{
          let src = doc.get_model_by_name(`src_${{origins[i]}}_${{destinations[j]}}`);
          if (!src) continue;
          let new_alpha = src.data['alpha'].map(_ => {{
            if (!origin || !dest) return 1;
            return (origins[i] === origin && destinations[j] === dest) ? 1 : 0.1;
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
