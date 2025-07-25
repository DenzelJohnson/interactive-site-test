import json
from pathlib import Path
import numpy as np
from bokeh.embed import json_item
from bokeh.plotting import figure
from bokeh.models import ColumnDataSource
from bokeh.models import HoverTool
from bokeh.transform import linear_cmap

# Cities in the Great Lakes region
CITIES = [
    "Chicago", "Cleveland", "Detroit", "Hamilton", "Milwaukee", 
    "Thunder Bay", "Toronto", "Windsor", "Duluth", "Montreal", "Buffalo"
]

print(f"Building travel-time visualization for {len(CITIES)} cities...")

# Output directories
out_dir = Path(__file__).resolve().parent.parent / "static"
out_dir.mkdir(exist_ok=True)
details_dir = out_dir / "details"
details_dir.mkdir(exist_ok=True)

# ============================================================================
# 1. Generate Main 11x11 Grid JSON
# ============================================================================
def create_main_grid():
    """Create the main 11x11 grid showing all O-D pairs"""
    fig = figure(
        width=600, height=600,
        x_range=(-0.5, 10.5), y_range=(-0.5, 10.5),
        tools="tap,hover", toolbar_location=None,
        title="Travel Time Matrix - Great Lakes Region"
    )
    
    # Create grid coordinates and labels
    xs, ys, origins, destinations = [], [], [], []
    for i, origin in enumerate(CITIES):
        for j, dest in enumerate(CITIES):
            xs.append(j)
            ys.append(10-i)  # Flip Y so origin cities read top-to-bottom
            origins.append(origin)
            destinations.append(dest)
    
    # Generate placeholder average travel times (hours)
    # Diagonal (same city) = 0, others = random 2-12 hours
    avg_times = []
    for i, origin in enumerate(CITIES):
        for j, dest in enumerate(CITIES):
            if origin == dest:
                avg_times.append(0)
            else:
                avg_times.append(np.random.uniform(2, 12))
    
    # Create color mapping
    mapper = linear_cmap('avg_time', palette="Viridis256", low=0, high=12)
    
    # Create data source
    source = ColumnDataSource(dict(
        x=xs, y=ys, 
        origin=origins, destination=destinations, 
        avg_time=avg_times
    ))
    
    # Add rectangles
    fig.rect(x='x', y='y', width=0.9, height=0.9,
             fill_color=mapper, line_color='white', line_width=1,
             source=source)
    
    # Configure hover tool
    hover = HoverTool(tooltips=[
        ("Origin", "@origin"),
        ("Destination", "@destination"), 
        ("Avg Travel Time", "@avg_time{0.1f} hours")
    ])
    fig.add_tools(hover)
    
    # Style the plot
    fig.axis.visible = False
    fig.grid.visible = False
    
    return fig

# ============================================================================
# 2. Generate Individual 7x7 Detail JSONs
# ============================================================================
def create_detail_grid(origin, destination):
    """Create detailed 7x7 grid for specific O-D pair"""
    fig = figure(
        width=400, height=400,
        x_range=(-0.5, 6.5), y_range=(-0.5, 6.5),
        tools="hover", toolbar_location=None,
        title=f"{origin} → {destination} (Travel Time Details)"
    )
    
    # Generate 7x7 grid of travel times (placeholder data)
    xs = np.repeat(range(7), 7)
    ys = np.tile(range(6, -1, -1), 7)  # Flip Y coordinates
    
    if origin == destination:
        # Same city - all zeros
        travel_times = np.zeros(49)
    else:
        # Different cities - random travel times with some structure
        base_time = np.random.uniform(3, 10)
        travel_times = np.random.normal(base_time, base_time*0.2, 49)
        travel_times = np.clip(travel_times, 0.5, 20)  # Keep reasonable bounds
    
    # Create color mapping
    mapper = linear_cmap('travel_time', palette="Viridis256", 
                        low=travel_times.min(), high=travel_times.max())
    
    # Create data source
    source = ColumnDataSource(dict(
        x=xs, y=ys, travel_time=travel_times,
        row=ys, col=xs
    ))
    
    # Add rectangles
    fig.rect(x='x', y='y', width=1, height=1,
             fill_color=mapper, line_color='white', line_width=0.5,
             source=source)
    
    # Configure hover
    hover = HoverTool(tooltips=[
        ("Row", "@row"), ("Col", "@col"),
        ("Travel Time", "@travel_time{0.2f} hours")
    ])
    fig.add_tools(hover)
    
    # Style
    fig.axis.visible = False
    fig.grid.visible = False
    
    return fig

# ============================================================================
# Build all files
# ============================================================================

# Generate main grid
print("Creating main 11×11 grid...")
main_grid = create_main_grid()
main_path = out_dir / "main-grid.json"
with main_path.open("w") as f:
    json.dump(json_item(main_grid, "main-grid"), f)
print(f"✅ Wrote {main_path}")

# Generate detail grids for each O-D pair
detail_count = 0
for origin in CITIES:
    for destination in CITIES:
        detail_fig = create_detail_grid(origin, destination)
        detail_path = details_dir / f"{origin}_{destination}.json"
        with detail_path.open("w") as f:
            json.dump(json_item(detail_fig, "detail-grid"), f)
        detail_count += 1

print(f"✅ Generated {detail_count} detail grids in {details_dir}")
print(f"🎉 Build complete! Ready to serve travel-time visualization.") 