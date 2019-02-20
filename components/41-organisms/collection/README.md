# Collection

A collection is a list of <a href="{{path './teaser.html'}}">teasers</a> used to show teasers of content.

## When to use this component

Use the collection component with teasers:

* On overview and filter pages to show the overview of the content with links to the content.
* On detail pages to show and link to a selection of related content.

## When not to use this component

Do not use the collection component with other components than teasers components.

## How it works

A collection is a <a href="{{path './list.html'}}">list</a> of teaser components that can be shown in a grid of maximum 2, 3, 4 or 5 columns. Depending on the screen resolution, less columns are shown.

On overview and filter pages, <a href="{{path './pagination.html'}}">pagination</a> can be used to divide the content on overview pages with a big amount of content into multiple pages.

On detail pages, an optional "Show more" link can be included, as seen in the example, to link to more related content. The "Show more" always links to another page where more content is shown in an overview, typically an overview or filter page.

Pagination and the "Show more" link can never be used together. Either the teaser collection already shows all content there is and pagination is used to divide the content into multiple pages, or the teaser collection is used to show a selection of related content and a "Show more" link is used to link to all related content.

## Accessibility

- A collection of teasers forms a list (WCAG 1.3.1).
