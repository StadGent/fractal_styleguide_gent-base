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

Do not use the detail layout to present an overview of content. In this case, use the <a href="{{path './overview-layout'}}">overview layout</a> instead.

## How it works

A detail layout consists of the following parts:

* <a href="{{path './header'}}">Header</a> (required)
* Page title (heading h1, required)
* <a href="{{path './readspeaker-button'}}">Text to speech button</a> (optional, only when the website has a text so speech ability)
* Detail page content (required)
* <a href="{{path './footer'}}">Footer</a> (required)

### Layout of the detail page content and its children

The detail page content gets a default width of 7/12 based on the container.

However, as also shown in the example, some direct children of the detail page content break out of the default 7 column width.

The following components in the detail page content get a width of 10/12 based on the container:

* <a href="{{path './contact-details'}}">Contact details</a>
* <a href="{{path './cta-block'}}">Call to action</a>
* <a href="{{path './highlight'}}">Highlight</a>
* <a href="{{path './partner-block'}}">Partner Block</a>
* <a href="{{path './quote'}}">Quote</a>
* <a href="{{path './summary'}}">Summary</a>
* <a href="{{path './image-gallery'}}">Image gallery (for multiple images)</a>

The following component in the detail page content get a width of 12/12 based on the container:

* <a href="{{path './gentinfo'}}">Gentinfo</a>
* <a href="{{path './timeline'}}">Timeline</a>
* <a href="{{path './programme'}}">Programme</a>
  
If you are unable to place these components as direct children of the page content,  
you can use the helper classes `.w7-o2`, `.w9-o1`, `.w10-o1` and `.w12` on whatever wrapper element you are dealing with.
