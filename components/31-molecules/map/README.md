
# Map

## When to use this component

Use the map component to show one or more locations on a map.

## How it works

A map can consist of the following parts:

* Map layers (required)
* Legend with data layers (optional)
* Location markers (required)
* Search address function (optional)
* Zoom in/out buttons (required)
* Current location button (optional)
* Fullscreen toggle button (optional)
* Distance marker  (required)
* Map layer switch button (optional, only when there are multiple map layers)

### Map layers

There should be at least one map layer. There can also be multiple map layers. In the latter case, the map layer switch button should be included.

### Legend with data layers

The legend shows what data layers can be seen on the map. The legend can be expanded or collapsed. By default, the legend is collapsed. The data layers are shown using an <a href="{{path './accordion'}}">accordion</a> with multiple expandable items. Each item contains a list of data layers using <a href="{{path './checkboxes'}}">checkboxes</a>. By selecting or deselecting the checkboxes, the corresponding data layers are shown or hidden.

### Location markers

Location markers represent locations on the map from the data layers that are currently visible.

When location markers are too close to each other in a way that they overlap or the cannot be clicked or tapped independently anymore, a cluster is shown with the numer of locatoin markers that overlap. When zooming in, the cluster will be hidden and the individual location markers will be shown. When zooming out, the cluster will be shown again.

Next to the location markers and the clusters, also the current location of the user is shown. This is only the case if the user has explicitely approved the website to use the current location.

### Search address function

The search address function allows to enter an address to zoom and center in the map on the location of that address.

### Zoom in/out buttons

The zoom/in out buttons let the user zoom in or zoom out the map.

### Current location button

The current location button lets the user zoom and center the map on the current location. This is only possible after the user has explicitely approved the website to use the current location.

### Fullscreen toggle button

The fullscreen toggle button toggles fhe fullscreen mode of the map on or off.

### Distance marker

The distance marker shows has a certain fixed with in pixels and shows the real distance that it corresponds with on the map to show the scale of the map.

### Switch visible map layer button

The switch visible map layer button lets the user switch map layers. This is only applicable when there are multiple map layers.

## Styling

The example styling is based on a default implementation of an Open Layers based
map. As a result our selectors and SASS are not as clearly as envisioned.

Use the styling in this styleguide as an example or use it in conjunction with
the gent_base_theme and the dg_maps module (a closed source Drupal 8 module
developed at District09) to achieve optimal results.

The styling will be refactored, in sync with subsequent releases of the DG Maps
module.
