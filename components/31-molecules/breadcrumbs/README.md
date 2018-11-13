# Breadcrumbs

## General

Breadcrumbs are used to show website users their current location relative to higher-level sections, helping them to understand where they are in relation to the rest of the website. They also afford one-click access to higher website sections and to the homepage of the website.

## When to use

Breadcrumbs should always be used on all websites.

## Where to use

Breadcrumbs should be used:

* On every web page of the website except the homepage.
* On all resolutions (desktop, tablet and mobile).

## Composition

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
* The nav region must use the aria-labelledby attribute to reference the hidden title.```
