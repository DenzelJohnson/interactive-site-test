import pandas as pd
import numpy as np

from bokeh.plotting import figure
from bokeh.embed import components
from bokeh.resources import CDN
from bokeh.models import ColumnDataSource, LinearColorMapper, HoverTool
from bokeh.layouts import gridplot
from bokeh.palettes import Spectral11

# ——— Load and prep your data ———
data = pd.read_csv('data/comprehensive_travel_time_adjustments.csv')
origins      = sorted(data['Origin'].unique())
destinations = sorted(data['Destination'].unique())

all_vals = data.iloc[:, 2:51].values.flatten().astype(float)
mapper  = LinearColorMapper(palette=Spectral11, low=np.nanmin(all_vals), high=np.nanmax(all_vals))

# ——— Build the grid of small heatmaps ———
plots = []
for o in origins:
    row = []
    for d in destinations:
        sub = data[(data['Origin']==o)&(data['Destination']==d)]
        if not sub.empty:
            mat = sub.iloc[0,2:51].astype(float).values.reshape(7,7)
            xs  = np.repeat(np.arange(7), 7)
            ys  = np.tile(np.arange(7)[::-1], 7)
            vals= mat.flatten()
            src = ColumnDataSource({'x':xs,'y':ys,'val':vals})

            p = figure(
                tools="hover",
                toolbar_location=None,
                x_range=(0,6), y_range=(0,6),
                sizing_mode='scale_both'
            )

            p.rect('x','y',1,1, source=src, line_color=None,
                   fill_color={'field':'val','transform':mapper})
            hover = p.select_one(HoverTool)
            hover.tooltips = [
                ("Origin",      o),
                ("Destination", d),
                ("row (y)",     "@y"),
                ("col (x)",     "@x"),
                ("value",       "@val")
            ]
            p.axis.visible = False
        else:
            p = figure(width=200, height=200)
            p.axis.visible = False

        row.append(p)
    plots.append(row)

grid = gridplot(plots, sizing_mode='scale_both')

# ——— Grab the script & div ———
script, div = components(grid)
resources  = CDN.render()

# ——— Write out a single HTML file ———
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
   #heatmap-container {{ 
       width:90vw;    /* up to 90% of viewport width */
       height:auto;   /* auto height to preserve aspect */
       max-width:800px; /* but don’t get too huge */
       margin:50px auto;
   }}  </style>
</head>
<body>
  <h1>My Travel-Time Dashboard</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
     enim vel eros luctus ullamcorper. Vivamus aliquet sapien non lectus
     commodo, nec bibendum justo aliquet.</p>
  <p>Phasellus et magna in risus luctus fermentum. Sed nec malesuada
     purus. Mauris hendrerit arcu nec urna tincidunt, a vulputate orci
     tristique.</p>

  <div id="heatmap-container">
    {div}
  </div>
</body>
</html>
"""

with open("index.html","w") as f:
    f.write(html)

print("✔️  index.html written — open it in your browser to try it out.")
