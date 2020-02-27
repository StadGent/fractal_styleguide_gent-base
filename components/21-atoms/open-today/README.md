# Open today

## When to use this component

The open today component is used to show if a certain location is open today and what the opening hours are for today. It is mainly used on overview pages with locations. It may also be used on detail pages of locations.

## When not to use this component

The open today component cannot be used to indicate if a location is open *now*. The open today commonent does not show if a location is open at the current point in time, but it shows if the location is (or was) open today.

## How it works

When the location is open today, the open today component shows "Open today" and the opening hours for today are shown.

When the location is not open today, the open today component shows "Closed today" no opening hours are shown.

In case the location has multiple ways of being open, for instance, free entrance without appointment versus appointment only, the "multi-channel" variant is used. In this case, the opening hours for each way are shown with a clear indication of the difference in the opening hours: "Open today", "Open by appointment".

## Usage within the style guide

The open today component is used in the <a href="{{path './opening-hours-accordion.html'}}">opening hours accordion component</a>.