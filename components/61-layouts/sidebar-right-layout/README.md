# Sidebar layout

The sidebar layout is a two-column layout version of the <a href="{{path './overview-layout'}}">overview layout</a> with a right-side column to show info.

## When to use this layout

Use the sidebar layout for overview pages where it should be possible to add extra content on the right side like a highlight or cart summary.

Examples of overview pages of content with filters:

* A page with a highlight at the right side to give users extra info about the page.
* A cart page where you have a summary at the right side.

## How the layout works

A filter layout conists of the following parts:

* <a href="{{path './header'}}">Header</a> (required)
* Right-side column with highlight or other components (required)
* Main content column on the left (required) with:
  * Page title (heading h1, required)

On **desktop resolutions and tablets in landscape mode**, this two-column layout is used.

On **tablets in portrait mode and mobile resolutions**, the two-column layout is transformed to a **one-column layout**. This is done by putting the left-side column with filters into a modal that is opened by clicking a button "Filters" to toggle the modal and show the filters.

See the example for the responsive behavior of the sidebar layout on various screen resolutions.