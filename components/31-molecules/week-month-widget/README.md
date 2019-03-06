# Opening hours

## When to use this component

Use the opening hours component to show opening hours for a certain location for this week and for this month and what the opening hours are for each day. It is only to be used on detail pages of locations.

## When not use this component

When the location has multiple ways of being open, for instance, free entrance without appointment versus appointment only, use the <a href="{{path './opening-hours-accordion.html'}}">opening hours accordion component</a> instead.

## How it works

The opening hours component shows on what days a certain location is open this week or this month and what the opening hours are for each day this week or this month. <a href="{{path './tabs.html'}}">Tabs</a> are used to switch between opening hours this week and opening hours this month. By default, the opening hours for this week are shown.

### Opening hours this week

The opening hours for this week are shown as a list with the next 7 days starting from today. For each day, the opening hours for that day are shown in the list. When the location is closed on a certain day, this is clearly indicated using the label "Closed".

### Opening hours this month

The opening hours for this month are shown as a calendar view that shows the current month. By default, the current month is shown but the user can click back and forth to  previous or coming months.

For each day of the month, it is visually indicated if the location is open or closed. When clicking a day of the month, the day is selected, and the opening hours for that day are shown. When the location is closed on a certain day, this is clearly indicated using the label "Closed".

## Usage within the style guide

The opening hours component is used in the <a href="{{path './opening-hours-accordion.html'}}">opening hours accordion component</a>.