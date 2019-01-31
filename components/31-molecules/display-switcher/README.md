# Display switcher 

## When to use this component

Use the display switcher component to let users switch between display modes of one section of content.

For example:

* A list and a map view
* A list and a grid view

**Important**: The section of content that is presented in the display modes that are available must be exactly the same.

## When not to use this component

Do not use the display switcher component to switch between two or more *different* sections of content. In this case, use the <a href="{{path './tabs.html'}}">tabs</a> component instead.

## How it works

The display switcher shows the display modes that are available for a section of content. Each display mode is presented with an icon and a label.

The display mode that is currently active is clearly indicated. By default, the first display mode is always active.

When clicking another display mode, the content below the display switcher is presented in a different way. The display switcher again clearly indicates the new active display mode.