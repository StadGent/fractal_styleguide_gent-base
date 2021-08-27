# Overview layout

The overview layout is a one-column layout with one wide column.

## When to use this layout

Use the overview layout to show an overview of content and to link to content in the overview.

The overview page typically uses a <a href="{{path './collection'}}">collection</a> of <a href="{{path './teaser'}}">teasers</a> to show the overview of the content and link to the detail pages about the content.

Examples of overview pages of content:

* A page with an overview of general, informational pages about a certain specific topic.
* A news articles overview page.
* An events overview page.

## How it works

An overview layout conists of the following parts:

* <a href="{{path './header'}}">Header</a> (required)
* Page title (heading h1, with City of Ghent colon icon, required)
* Overview page content before the collection of teasers (optional)
* Collection of teasers (required)
* <a href="{{path './pagination'}}">Pagination</a> of <a href="{{path './teaser'}}">teasers</a> (optional)
* Overview page content after the collection of teasers (optional)
* <a href="{{path './footer'}}">Footer</a> (required)