# Opening hours accordion

## When to use this component

Use the opening hours component to show opening hours for a certain location that has multiple ways of being open, for instance, free entrance without appointment versus appointment only.

## How it works

The opening hours accordion uses the <a href="{{path './opening-hours.html'}}">opening hours component</a> to show opening hours for this week and for this month and what the opening hours are for each day. It is only to be used on detail pages of locations.

An <a href="{{path './accordion.html'}}">accordion component with multiple expandable items</a> is used to present the multiple ways the location can be open, for instance, free entrance without appointment versus appointment only.

In the opening hours accordion, the <a href="{{path './open-today.html'}}">open today component</a> is used to show an overview of the different ways the location can be open and if the location in these particular ways is open today and what the opening hours are for today.

The opening hours accordion consists of the following elements:

* Title (heading h3) representing the type of opening hours (required)
* Open today component (required)
* Accordion component (required, always collapsed by default)
  * Opening hours component (required)

By default, all the opening hours are collapsed.