# Opening hours accordion

## When to use this component

Use the opening hours accordion component to:

* Show an overview of opening hours for a certain location that has one or multiple ways of being open, for instance, free entrance without appointment versus appointment only.
* Include opening hours but clearly show the type of opening hours and show or hide them depending on if the opening hours are essential for all users or only necessary for a minority of users (progressive disclosure principle).
* Offer opening hours for this week and for this month and what the opening hours are for each day but also have a quick way to show if the location is open today and what the opening hours are for today.

The opening hours accordion is only to be used on detail pages.

## How it works

The opening hours accordion uses the <a href="{{path './accordion.html'}}">accordion component with a single expandable item</a> to show or hide a certain type of opening hours (a way of being open) for a certain location.

The opening hours are shown using the <a href="{{path './opening-hours.html'}}">opening hours component</a>.

To clearly indicate what type of opening hours (the way of being open) the opening hours accordion hides, the opening hours accordion has a title (heading 3) representing the type of opening hours.

Next to that, the opening hours accordion contains an <a href="{{path './open-today.html'}}">open today component</a>. This open today component is always visible so that users can quickly see if the location is open today and what the opening hours are for today.

Finally, the opening hours accordion can be repeated for every different type of opening hours (different ways the location can be open). There should be one opening hours accordion per different type of opening hours.

By default, all opening hours accordion components are collapsed.