# Content header

The content header displays the page title in a specific way for different content types.

## When to use this component

Use the content header when the following conditions apply:

* The web page is
  * a generic info page
  * a news/event page
  * a form page
  * a theme page
  * a topic overview page

When these conditions apply, the content header can be used.

If used, the content header should always be placed just below the general header.

## When not to use this component

Do not use the content header when the above conditions don't apply.

Do not use the content header on other places then the page title.

## Components

The content header is a combination of one or more of the following 4 components:

1. Readspeaker (optional)
2. Page title
3. Page summary text (optional)
4. Image (optional)

## Technical usage

* This organism must be used as the first item within the content container.
* Some succeeding elements are influenced by the content header and may partly overlap with the content header. E.g. the event summary box.
* To influence the display behaviour of the header, the following header classes can be used:
  * `primary`: Set the primary theme color as background.
  * `dark-background`: Makes content light colored for dark backgrounds (use in combination with `primary`).
  * `secondary`: Set the secondary theme color as background.
  * `accolade-title`: Use the accolade layout.
  * `breakout`: When the accolade title has to break out of the box (use in combination with `accolade-title` without any other header elements).
  * `overlap`: Adjust the bottom padding to create space for overlapping elements.
