# Display switcher 

## When to use this component

Use the display switcher component when **a page reload** is triggered to let users:

* Switch between two or more display modes of one section of content
* Switch between two different sections of content

For example:

* Switch between a list and map view using a page reload
* Switch between a list, map and grid view using a page reload
* Switch between a list of all job openings and a list of job openings on one specific location using a page reload

## When not to use this component

Do **not** use the display switcher component when **no page reload** is triggered. In this case, use <a href="{{path './tabs.html'}}">tabs</a> instead.

Furthermore, do not use a page reload and the display switcher component:

* When users will need to see all sections at once, for instance to compare information in the different sections.
* When users have to read through all the related sections of content in order, for example, to understand a process.
* To show progress or a linear flow when collecting user input in multiple steps or to guide users through a process. In these cases, use a <a href="{{path './multistep-form.html'}}">multistep form</a> or a <a href="{{path './wizard.html'}}">wizard</a> instead.

Alternative to using a display switcher component:

* Reduce and simplify the content so that it can be placed on one page, without the need to trigger a page reload and for a display switcher component. On that one page, use tabs instead or keep the content as is on the page, separate the content by headings and/or use a <a href="{{path './table-of-contents.html'}}">table of contents component</a> to let users navigate quickly to specific sections of content.

## How it works

The display switcher shows the display modes or the sections of content that are available. Each display mode or section of content is presented with an icon and a label.

The display mode or section of content that is currently active is clearly indicated. By default, the first display mode is always active.

When clicking another display mode, a page reload is trigger and the content is presented in a different way or the other section of content is shown. The display switcher again clearly indicates the new active display mode or section of content.