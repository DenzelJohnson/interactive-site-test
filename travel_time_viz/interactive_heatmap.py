import pandas as pd
import numpy as np
from bokeh.plotting import figure, show, output_file
from bokeh.models import ColumnDataSource, LinearColorMapper, HoverTool
from bokeh.layouts import gridplot
from bokeh.palettes import Spectral11

# ——— load your data (same CSV) ———
data = pd.read_csv('data/comprehensive_travel_time_adjustments.csv')
origins      = sorted(data['Origin'].unique())
destinations = sorted(data['Destination'].unique())

# ——— set up a shared color mapper over the full 7×7 blocks ———
all_vals = data.iloc[:, 2:51].values.flatten().astype(float)
color_mapper = LinearColorMapper(palette=Spectral11,
                                 low=np.nanmin(all_vals),
                                 high=np.nanmax(all_vals))

# ——— build a grid of small heatmaps ———
plots = []
for o in origins:
    row = []
    for d in destinations:
        sub = data[(data['Origin']==o) & (data['Destination']==d)]
        if not sub.empty:
            # turn that one‐row of 49 values into a 7×7
            mat = sub.iloc[0, 2:51].astype(float).values.reshape(7,7)
            # flatten for Bokeh’s ColumnDataSource
            xs = np.repeat(np.arange(7), 7)
            ys = np.tile(np.arange(7)[::-1], 7)   # flip y so 0 is at bottom
            vals = mat.flatten()

            src = ColumnDataSource({'x': xs, 'y': ys, 'val': vals})
            p = figure(
                width=200, height=200,
                tools="hover", toolbar_location=None,
                x_range=(0,6), y_range=(0,6)
            )
            p.rect(
                'x', 'y', width=1, height=1,
                source=src, line_color=None,
                fill_color={'field': 'val', 'transform': color_mapper}
            )
            hover = p.select_one(HoverTool)
            hover.tooltips = [
                ("Origin",    o),
                ("Destination", d),
                ("row (y)",   "@y"),
                ("col (x)",   "@x"),
                ("value",     "@val")
            ]
            p.axis.visible = False
        else:
            # empty slot
            p = figure(width=200, height=200)
            p.axis.visible = False

        row.append(p)
    plots.append(row)

# ——— write out a standalone HTML and open it in your browser ———
output_file("heatmap.html", title="Interactive Travel Time Heatmaps")
grid = gridplot(plots)
show(grid)
