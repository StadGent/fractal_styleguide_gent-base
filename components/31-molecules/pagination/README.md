# Pagination

## When to use this component

Use pagination to divide the content on overview pages with a big amount of content into multiple pages.

When using pagination, the pagination component shows the number of pages, the current page and links to all other pages, in particular the first page, the last page, the previous page and the next page. The pagination component is used on overview pages and on filter pages.

## When not to use this component

Do not use the pagination component (or hide it) when the content on a overview pages is not divided or does not need to be divided into multiple pages.

Do not use the pagination component on detail pages.

In general, do not use the pagination component for other uses than pagination.

## How it works

The pagination component consists of the following required elements:

* Indication of the current page.
* Link to the first page.
* Link to the previous page.
* Link to the next page.
* Link to the last page.
* An ellipsis between the link to the previouw page and the link to the the first available next page number.
* An ellipsis between the link to the next page and the link to the first available previous page number.

Depending on the available width, the number of pages and what the current page is at a certain point, the elements are shown or hidden in a certain way. See the examples for more context.
