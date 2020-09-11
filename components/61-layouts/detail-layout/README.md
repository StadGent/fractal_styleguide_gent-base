# Detail layout

The detail layout is a one-column layout with one small column.

## When to use this layout

Use the detail layout for detail pages of content.

Examples of detail pages of content:

* A general, informational page about a certain specific topic.
* A news article page.
* An event page.
* A page about a specific location.
* A page about a specific person.

## When not to use this layout

Do not use the detail layout to present an overview of content. In this case, use the <a href="{{path './overview-layout.html'}}">overview layout</a> instead.

## How it works

A detail layout conists of the following parts:

* <a href="{{path './header.html'}}">Header</a> (required)
* Page title (heading h1, required)
* <a href="{{path './readspeaker-button.html'}}">Text to speech button</a> (optional, only when the website has a text so speech ability)
* Detail page content (required)
* <a href="{{path './footer.html'}}">Footer</a> (required)

As you can see, some direct children of the page content are allowed to break out of the default 7 column width.  
Examples are the summary, call to action, contact details and image gallery.  
If you are unable to place these components as direct children of the page content,
you can use the helper class `.w10-o1` on whatever wrapper element you are dealing with.
