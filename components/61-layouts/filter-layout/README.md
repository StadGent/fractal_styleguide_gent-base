# Filter layout

The filter layout is a two-column layout version of the overview layout with a left-side bar to show filters.

## When to use this layout

Use the filter layout for overview pages where it should be possible to filter the overview of content.

Examples of overview pages of content with filters:

* A page with an overview of locations with filters for specific characteristics.
* A search results page with filters to further refine the search results.

## When not to use this layout

Do not use the filter layout to present an overview of content where it should not be possible to filter the overview of content.

Do not use the filter layout for other uses than to show an overview of content.

Do not use the filter layout when the left-side bar will be used for other uses than showing filters.

## How it works

A filter layout conists of the following parts:

* <a href="{{path './header.html'}}">Header</a> (required)
* Left-side bar with filters (required)
* Page title (heading h1, with City of Ghent colon icon, required)
* Filter page content before the collection of teasers (exceptional, for instance a search form)
* Current active/selected filters with option to clear all (required, only visible when there is at least one current actice/selected filter)
* Number of results (required)
* Collection of teasers (required)
* <a href="{{path './pagination.html'}}">Pagination</a> of <a href="{{path './teaser.html'}}">teasers</a> (optional)
* Filter page content after the collection of teasers (optional)
* <a href="{{path './footer.html'}}">Footer</a> (required)

<!-- @TODO describe in more detail the behavior of filters -->