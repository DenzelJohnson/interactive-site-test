import pandas as pd
import numpy as np
import requests
import time
import os
import json

from bokeh.plotting import figure
from bokeh.embed import components
from bokeh.resources import CDN
from bokeh.models import (ColumnDataSource, LinearColorMapper, HoverTool, 
                         ColorBar, BasicTicker, PrintfTickFormatter, Div)
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
origins = sorted(data['Origin'].unique())
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
        time.sleep(1)
    coords_df = pd.DataFrame(coords)
    coords_df.to_csv(coord_cache_file, index=False)

# --- Create color mapper with original Spectral palette ---
all_vals = data.iloc[:, 2:51].values.flatten().astype(float)
min_val = np.nanmin(all_vals)
max_val = np.nanmax(all_vals)

# Create separate color mappers for different uses
main_mapper = LinearColorMapper(palette=Spectral11, low=min_val, high=max_val)
enlarged_mapper = LinearColorMapper(palette=Spectral11, low=min_val, high=max_val)
colorbar_mapper = LinearColorMapper(palette=Spectral11, low=min_val, high=max_val)

# --- Build the full 11x11 grid ---
plots = []
plot_sources = []

# Create header row with destination names
header_row = []
header_row.append(figure(width=120, height=60, toolbar_location=None))  # Empty corner
header_row[-1].axis.visible = False
header_row[-1].grid.visible = False

for d in destinations:
    header_fig = figure(width=120, height=60, toolbar_location=None)
    header_fig.text(x=[3], y=[0.5], text=[d], text_align="center", text_baseline="middle", 
                   text_font_size="10pt", text_font_style="bold")
    header_fig.axis.visible = False
    header_fig.grid.visible = False
    header_fig.x_range.range_padding = 0
    header_fig.y_range.range_padding = 0
    header_row.append(header_fig)

plots.append(header_row)

# Create data rows with origin labels and heatmaps
for i, o in enumerate(origins):
    row_plots = []
    row_srcs = []
    
    # Origin label
    origin_fig = figure(width=120, height=120, toolbar_location=None)
    origin_fig.text(x=[0.5], y=[3], text=[o], text_align="center", text_baseline="middle",
                   text_font_size="10pt", text_font_style="bold", angle=np.pi/2)
    origin_fig.axis.visible = False
    origin_fig.grid.visible = False
    origin_fig.x_range.range_padding = 0
    origin_fig.y_range.range_padding = 0
    row_plots.append(origin_fig)
    row_srcs.append(None)
    
    # Heatmap cells
    for j, d in enumerate(destinations):
        sub = data[(data['Origin']==o) & (data['Destination']==d)]
        if not sub.empty:
            mat = sub.iloc[0, 2:51].astype(float).values.reshape(7, 7)
            xs = np.repeat(np.arange(7), 7)
            ys = np.tile(np.arange(7)[::-1], 7)
            vals = mat.flatten()
            src = ColumnDataSource({'x': xs, 'y': ys, 'val': vals, 'alpha': [1]*49}, 
                                 name=f'src_{o}_{d}')

            p = figure(
                tools="hover",
                toolbar_location=None,
                x_range=(0, 6), y_range=(0, 6),
                sizing_mode='scale_both',
                width=120, height=120
            )
            p.rect('x', 'y', 1, 1, source=src, line_color=None,
                   fill_color={'field': 'val', 'transform': main_mapper}, fill_alpha='alpha')
            
            hover = p.select_one(HoverTool)
            hover.tooltips = [
                ("Origin", o),
                ("Destination", d),
                ("Travel Time", "@val{0.0} min")
            ]
            p.axis.visible = False
            p.grid.visible = False
        else:
            src = ColumnDataSource({'x': [], 'y': [], 'val': [], 'alpha': []}, 
                                 name=f'src_{o}_{d}')
            p = figure(width=120, height=120, toolbar_location=None)
            p.axis.visible = False
            p.grid.visible = False
            
        row_plots.append(p)
        row_srcs.append(src)
    
    plots.append(row_plots)
    plot_sources.append(row_srcs)

# Create the main grid
main_grid = gridplot(plots, sizing_mode='scale_both')

# Create a separate colorbar
color_bar_fig = figure(height=400, width=100, toolbar_location=None,
                      title="Travel Time (minutes)")
color_bar = ColorBar(color_mapper=colorbar_mapper, ticker=BasicTicker(),
                    label_standoff=12, location=(0,0))
color_bar_fig.add_layout(color_bar, 'right')
color_bar_fig.axis.visible = False
color_bar_fig.grid.visible = False

# Create enlarged detail plots for each origin-destination pair
enlarged_plots = {}
for o in origins:
    for d in destinations:
        sub = data[(data['Origin']==o) & (data['Destination']==d)]
        if not sub.empty:
            mat = sub.iloc[0, 2:51].astype(float).values.reshape(7, 7)
            xs = np.repeat(np.arange(7), 7)
            ys = np.tile(np.arange(7)[::-1], 7)
            vals = mat.flatten()
            src = ColumnDataSource({'x': xs, 'y': ys, 'val': vals})

            # Create individual color mapper for this plot
            plot_mapper = LinearColorMapper(palette=Spectral11, low=min_val, high=max_val)
            
            p = figure(
                tools="hover",
                toolbar_location=None,
                x_range=(0, 6), y_range=(0, 6),
                width=400, height=400,
                title=f"{o} → {d}"
            )
            p.rect('x', 'y', 1, 1, source=src, line_color=None,
                   fill_color={'field': 'val', 'transform': plot_mapper})
            
            hover = p.select_one(HoverTool)
            hover.tooltips = [("Travel Time", "@val{0.0} min")]
            p.axis.visible = False
            p.grid.visible = False
            
            enlarged_plots[f"{o}_{d}"] = p

# Generate components
full_grid_script, full_grid_div = components(main_grid)
colorbar_script, colorbar_div = components(color_bar_fig)

# Generate enlarged plot components
enlarged_components = {}
for key, plot in enlarged_plots.items():
    script, div = components(plot)
    enlarged_components[key] = {'script': script, 'div': div}

# Save enlarged components to JSON
enlarged_js = {}
for key, comp in enlarged_components.items():
    enlarged_js[key] = comp['div']

# Prepare locations and options
locations_js = '{\n' + ',\n'.join([
    f'  "{row["location"]}": {{lat: {row["lat"]}, lng: {row["lon"]}}}'
    for _, row in coords_df.iterrows()
]) + '\n}'
origin_options = '\n'.join([
    f'<option value="{row["location"]}">{row["location"]}</option>'
    for _, row in coords_df.iterrows()
])

# Write the full grid JavaScript to external file
with open('../static/js/bokeh_full_grid.js', 'w') as f:
    # Extract only the JavaScript content, removing HTML script tags
    js_content = full_grid_script
    if js_content.startswith('<script'):
        # Find the content between <script> tags
        start = js_content.find('>') + 1
        end = js_content.rfind('</script>')
        js_content = js_content[start:end].strip()
    f.write(js_content)

# Write the enlarged plots JavaScript to external file
enlarged_scripts = '\n'.join([comp['script'] for comp in enlarged_components.values()])
with open('../static/js/bokeh_enlarged_grids.js', 'w') as f:
    # Extract only the JavaScript content, removing HTML script tags
    js_content = enlarged_scripts
    if js_content.startswith('<script'):
        # Find the content between <script> tags
        start = js_content.find('>') + 1
        end = js_content.rfind('</script>')
        js_content = js_content[start:end].strip()
    f.write(js_content)

# Create the enhanced HTML
html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enhanced Travel Time Dashboard</title>
    {CDN.render()}
    <style>
        body {{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }}
        .container {{
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }}
        .header {{
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            text-align: center;
        }}
        .controls {{
            padding: 20px;
            background: #f8f9fa;
            border-bottom: 1px solid #dee2e6;
            text-align: center;
        }}
        .controls select, .controls button {{
            margin: 0 10px;
            padding: 8px 16px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
        }}
        .controls button {{
            background: #007bff;
            color: white;
            cursor: pointer;
            border: none;
        }}
        .controls button:hover {{
            background: #0056b3;
        }}
        .dashboard-grid {{
            display: grid;
            grid-template-columns: 1fr 400px;
            grid-template-rows: 400px 1fr;
            gap: 20px;
            padding: 20px;
            height: calc(100vh - 200px);
        }}
        .map-container {{
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
        }}
        .enlarged-container {{
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }}
        .grid-container {{
            grid-column: 1 / -1;
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 10px;
            overflow: auto;
        }}
        .grid-with-colorbar {{
            display: flex;
            align-items: flex-start;
            gap: 20px;
        }}
        .colorbar-container {{
            flex-shrink: 0;
        }}
        #google-map {{
            width: 100%;
            height: 100%;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚗 Enhanced Travel Time Dashboard</h1>
            <p>Interactive visualization of travel times between Great Lakes cities</p>
        </div>
        
        <div class="controls">
            <label>Origin: 
                <select id="origin">{origin_options}</select>
            </label>
            <label>Destination: 
                <select id="destination">{origin_options}</select>
            </label>
            <button onclick="updateAll()">Update Route</button>
        </div>
        
        <div class="dashboard-grid">
            <div class="map-container">
                <div id="google-map"></div>
            </div>
            
            <div class="enlarged-container">
                <h3>Selected Route Detail</h3>
                <div id="enlarged-display">
                    <p>Select an origin and destination to view detailed travel times</p>
                </div>
            </div>
            
            <div class="grid-container">
                <h3>All Origin-Destination Pairs</h3>
                <div class="grid-with-colorbar">
                    <div id="full-grid">
                        {full_grid_div}
                    </div>
                    <div class="colorbar-container">
                        {colorbar_div}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXbSYStWSMczRjNpmCR-kM_vYn2fGu8vk"></script>
    <script src="../static/js/bokeh_full_grid.js"></script>
    <script src="../static/js/bokeh_enlarged_grids.js"></script>
    
    <script>
        const locations = {locations_js};
        const origins = {origins};
        const destinations = {destinations};
        const enlargedPlots = {json.dumps(enlarged_js)};
        
        let map, originMarker, destMarker, routeLine;
        
        function initMap() {{
            map = new google.maps.Map(document.getElementById('google-map'), {{
                center: {{lat: 43.5, lng: -80.0}},
                zoom: 5,
                mapTypeId: 'roadmap'
            }});
            updateAll();
        }}
        
        function updateMap() {{
            const originName = document.getElementById('origin').value;
            const destName = document.getElementById('destination').value;
            const origin = locations[originName];
            const destination = locations[destName];
            
            if (!origin || !destination) return;
            
            // Clear existing markers and route
            if (originMarker) originMarker.setMap(null);
            if (destMarker) destMarker.setMap(null);
            if (routeLine) routeLine.setMap(null);
            
            // Add new markers
            originMarker = new google.maps.Marker({{
                position: origin,
                map: map,
                title: `Origin: ${{originName}}`,
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            }});
            
            destMarker = new google.maps.Marker({{
                position: destination,
                map: map,
                title: `Destination: ${{destName}}`,
                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            }});
            
            // Add route line
            routeLine = new google.maps.Polyline({{
                path: [origin, destination],
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 3,
                map: map
            }});
            
            // Fit bounds to show both markers
            const bounds = new google.maps.LatLngBounds();
            bounds.extend(origin);
            bounds.extend(destination);
            map.fitBounds(bounds);
        }}
        
        function updateEnlargedDisplay() {{
            const originName = document.getElementById('origin').value;
            const destName = document.getElementById('destination').value;
            const key = `${{originName}}_${{destName}}`;
            
            const enlargedDiv = document.getElementById('enlarged-display');
            if (enlargedPlots[key]) {{
                enlargedDiv.innerHTML = enlargedPlots[key];
            }} else {{
                enlargedDiv.innerHTML = '<p>No data available for this route</p>';
            }}
        }}
        
        function highlightGrid() {{
            const bokehDocs = window.Bokeh ? window.Bokeh.documents : [];
            if (!bokehDocs || bokehDocs.length === 0) return;
            
            const doc = bokehDocs[0];
            const origin = document.getElementById('origin').value;
            const dest = document.getElementById('destination').value;
            
            for (let i = 0; i < origins.length; i++) {{
                for (let j = 0; j < destinations.length; j++) {{
                    const src = doc.get_model_by_name(`src_${{origins[i]}}_${{destinations[j]}}`);
                    if (!src || !src.data.alpha) continue;
                    
                    const isSelected = (origins[i] === origin && destinations[j] === dest);
                    const newAlpha = src.data.alpha.map(() => isSelected ? 1 : 0.3);
                    src.data.alpha = newAlpha;
                    src.change.emit();
                }}
            }}
        }}
        
        function updateAll() {{
            updateMap();
            updateEnlargedDisplay();
            highlightGrid();
        }}
        
        // Initialize when page loads
        window.onload = function() {{
            initMap();
            
            // Set default selections
            document.getElementById('origin').value = 'Chicago';
            document.getElementById('destination').value = 'Toronto';
            
            // Add event listeners
            document.getElementById('origin').addEventListener('change', updateAll);
            document.getElementById('destination').addEventListener('change', updateAll);
            
            updateAll();
        }};
        
        {colorbar_script}
    </script>
</body>
</html>"""

# Write the HTML file
with open('../project1.html', 'w') as f:
    f.write(html)

print("✅ Enhanced dashboard created!")
print("📁 Generated files:")
print("   - project1.html (main dashboard)")
print("   - static/js/bokeh_full_grid.js (grid visualization)")
print("   - static/js/bokeh_enlarged_grids.js (detailed views)") 