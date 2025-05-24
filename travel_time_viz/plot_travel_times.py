import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from matplotlib.colors import Normalize, BoundaryNorm
from matplotlib.cm import ScalarMappable, get_cmap

# Load your data
data = pd.read_csv('data/comprehensive_travel_time_adjustments.csv')  # ← point to data/

# Determine the number of unique origins and destinations
origins = data['Origin'].unique()
destinations = data['Destination'].unique()

# Sort origins and destinations if not already ordered
origins = sorted(origins)
destinations = sorted(destinations)

# Create a large figure to hold all subplots (heatmaps)
fig, axes = plt.subplots(
    nrows=len(origins),
    ncols=len(destinations),
    figsize=(20, 20),
    sharex='col',
    sharey='row'
)

# Flatten the axes array for easy handling
if len(origins) == 1 or len(destinations) == 1:
    axes = axes.flatten()
else:
    axes = axes.ravel()

# Determine the full range of the matrix data
full_range = data.iloc[:, 2:51].values  # Assuming these are the matrix data columns
min_val = np.nanmin(full_range)
max_val = np.nanmax(full_range)

# Define a colormap with 24 discrete colors
n_colors = 24
cmap = get_cmap('Spectral', n_colors)
norm = BoundaryNorm(np.linspace(min_val, max_val, n_colors + 1), n_colors)

# Plot each 7x7 matrix
for (i, j), ax in zip(np.ndindex(len(origins), len(destinations)), axes):
    sub_data = data[(data['Origin'] == origins[i]) & (data['Destination'] == destinations[j])]
    if not sub_data.empty:
        try:
            matrix_data = sub_data.iloc[0, 2:51].astype(float).values.reshape((7, 7))
            im = ax.imshow(matrix_data, cmap=cmap, norm=norm)
            ax.set_xticks([])
            ax.set_yticks([])
        except ValueError:
            ax.text(0.5, 0.5, 'Data Error',
                    horizontalalignment='center',
                    verticalalignment='center',
                    transform=ax.transAxes)
    else:
        ax.axis('off')

# Labels on rows & columns
for ax, row in zip(axes.reshape(len(origins), -1)[:, 0], origins):
    ax.set_ylabel(row, rotation=90, labelpad=15,
                  verticalalignment='center',
                  fontsize=12, fontweight='bold')

for ax, col in zip(axes.reshape(-1, len(destinations))[0], destinations):
    ax.set_title(col, pad=10, fontsize=12, fontweight='bold')

# Colorbar
fig.subplots_adjust(wspace=0.1, hspace=0.1, right=0.8)
cbar_ax = fig.add_axes([0.85, 0.15, 0.05, 0.7])
fig.colorbar(ScalarMappable(norm=norm, cmap=cmap), cax=cbar_ax)

plt.show()
