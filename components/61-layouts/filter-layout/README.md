# Filter layout

The filter layout is a two-column layout version of the <a href="{{path './overview-layout'}}">overview layout</a> with a left-side column to show filters.

## When to use this layout

Use the filter layout for overview pages where it should be possible to filter the overview of content.

Examples of overview pages of content with filters:

* A page with an overview of locations with filters for specific characteristics.
* A search results page with filters to further refine the search results.

## When not to use this layout

Do not use the filter layout to present an overview of content where it should not be possible to filter the overview of content. In this case, use the default <a href="{{path './overview-layout'}}">overview layout</a> instead.

Do not use the filter layout for other uses than to show an overview of content.

Do not use the filter layout when the left-side column will be used for other uses than showing filters.

## How the layout works

A filter layout conists of the following parts:

* <a href="{{path './header'}}">Header</a> (required)
* Left-side column with filters (required)
* Main content column on the right (required) with:
  * Page title (heading h1, required)
  * <a href="{{path './readspeaker-button'}}">Text to speech button</a> (optional, only when the website has a text so speech ability)
  * Top filter page content (optional) with:
    * Introduction text for SEO reasons (optional, only shown on desktop and tablet resolutions).
    * Other content such as a general search form (exceptional).
  * Selected filters with label "You have selected:" showing the current active/selected filters with an option to clear all (required, only visible when there is at least one current actice/selected filter)
  * Number of results (required) using label "We have found XXX results"
  * Overview of results using a <a href="{{path './collection'}}">collection</a> of <a href="{{path './teaser'}}">teasers</a> (required)
  * <a href="{{path './pagination'}}">Pagination</a> (if applicable)
  * Bottom filter page content (exceptional), for instance a <a href="{{path './cta-block'}}">call to action component</a>.
* <a href="{{path './footer'}}">Footer</a> (required)

On **desktop resolutions and tablets in landscape mode**, this two-column layout is used.

On **tablets in portrait mode and mobile resolutions**, the two-column layout is transformed to a **one-column layout**. This is done by putting the left-side column with filters into a modal that is opened by clicking a button "Filters" to toggle the modal and show the filters.

See the example for the responsive behavior of the filter layout on various screen resolutions.

# How the filters work

The filters are represented in a filter form using the <a href="{{path './cta-block'}}">form component</a>.

Each filter in the filter form is created and presented as a fieldset.

Inside each the filter fieldset, one of the following form elements can be used:

* <a href="{{path './formitem'}}">Input</a>
* <a href="{{path './checkboxes'}}">Checkboxes</a>
* <a href="{{path './checkboxes-dynamic'}}">Checkboxes Dynamic</a>
* <a href="{{path './radios'}}">Radios</a>
* <a href="{{path './select'}}">Select</a>

The filter form has one form action and this is the submit button of the form.

The submit button submits the values entered or updated by the user and reloads the page shows the new set of results based on the current active/selected filters.

**Important:** The page and the set of results are **never reloaded automatically**. After a user enters or updates one or more values of one or more filters, the page is **not reloaded**. It is **only after the user clicks the submit button** that the values are submitted, the page reloads and the new set of results is shown. **Doing otherwise is an accessibility violation** (WCAG 3.2.5).

**Good to know:** After the page is reloaded showing the new set of results, make sure the page automatically scrolls to the selected filters with label "You have selected:". This way, the user sees the new set of results faster (less scrolling is required).
