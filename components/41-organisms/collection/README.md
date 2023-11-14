# Collection

A collection is a list of <a href="{{path './teaser'}}">teasers</a> used to show teasers of content.

## When to use this component

Use the collection component with teasers:

* On overview and filter pages to show the overview of the content with links to the content.
* On detail pages to show and link to a selection of related content.

## When not to use this component

Do not use the collection component with other components than teaser components.

## How it works

A collection is a <a href="{{path './list'}}">list</a> of teaser components that can be shown in a grid of maximum 2, 3, 4 or 5 columns. Depending on the screen resolution, less columns are shown.

On overview and filter pages, <a href="{{path './pagination'}}">pagination</a> can be used to divide the content on overview pages with a big amount of content into multiple pages.

On detail pages, an optional "Show more" link can be included, as seen in the example, to link to more related content. The "Show more" always links to another page where more content is shown in an overview, typically an overview or filter page.

Pagination and the "Show more" link can never be used together. Either the teaser collection already shows all content there is and pagination is used to divide the content into multiple pages, or the teaser collection is used to show a selection of related content and a "Show more" link is used to link to all related content.

### Legacy
The old grid system (which still works) was based on the `.grid-*` class. The new grid (without Susy), works with row and col classes, like so:
```
<ul class="row">
    <li class="col-sm-6 col-lg-4">
        ...
    </li>
</ul>
```
This example replaces the grid-3 collection (not grid-4) since the old system counted the number of teasers instead of the number of columns they span. So `.col-lg-6` means that at the lg (desktop) breakpoint 2 teasers of each 6 columns wide (in a 12 column setup).

Breakpoints can be found in `11-base/grid/flexbox-grid/variables/_grid-variables`.

## Accessibility

- A collection of teasers forms a list (WCAG 1.3.1).
