# Breadcrumbs

The breadcrumbs component helps users understand where they are in the website's structure and to let them move between levels of the website.

## When to use this component

Use the breadcrumbs component when you need to help users understand and move between the multiple levels of a website.

Breadcrumbs are required for most websites.

When breadcrumbs are used, breadcrumbs should be included:

* On all pages of the website, except the home page.
* On all device resolutions (desktop, tablet and mobile).

## When not to use this component

Do not use the breadcrumbs component on websites that have a flat website structure, in other words, websites that go only one level deep. In this case, breadcrumbs can be omitted.

Do not use the breadcrumbs component to show progress or a linear flow when collecting user input in multiple steps or to guide users through a process. In these cases, use a <a href="{{path './multistep-form'}}">multistep form</a> or a <a href="{{path './wizard'}}">wizard</a> instead.

## How it works

Breadcrumbs show website users their current location relative to higher-level sections. They also afford one-click access to higher website sections and to the homepage of the website.

Breadcrumbs are composed as follows:

1. They start with a link to the homepage. This link always links to the homepage of the **current website** where the website user is (see some examples below). **This link should always have the label "Home".**
2. After that the higher-level sections relative to the current web page are shown using links to each of these sections.
3. They end with the page title of the current page. This is not a link.

Examples for the link to the homepage:

* On the City of Ghent general website, including theme sites, the breadcrumbs starts with "Home" and links to the homepage of the City of Ghent general website.
* On a separate website, the breadcrumbs also starts with "Home" and links to the corresponding homepage of that separate website.

## Accessibility

* Breadcrumbs must be contained in a nav region.
* The nav region must include a visually hidden title 'breadcrumbs' (translatable) as first element.
* The nav region must use the aria-labelledby attribute to reference the hidden title.
