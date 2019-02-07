# Teaser

## When to use this component

Use the teaser component in a <a href="{{path './collection.html'}}">collection</a> to show teasers of content.

The teaser component is used in collections on overview and on filter pages to show the overview of the content with links to the content. The teaser component can also be used in a collection on detail pages to show and link to related content.

## When not to use this component

Do not use the teaser component as a standalone component. Always use the teaser component in a <a href="{{path './collection.html'}}">collection</a>.

## How it works

A teaser can consist of the following parts:

* Teaser image (optional)
* Label with icon (optional, typically to indicate a special type or category of content in the collection, for instance, events in a news and events overview)
* Tags (optional, one or more, typically to indicate content that is related to a certain subject)
* Teaser title (required)
* Event date (optional, only for events)
* Teaser summary text or content (optional)
* List of secondary teaser links (optional)
* Primary teaser link (required)

The entire teaser block is clickable. When clicking the teaser block, the primary teaser link is followed.

The secondary teaser links inside the teaser block are also clickable. When clicking a secondary teaser link, that links is followed. When not clicking on a secondary teaser link but anywhere else in the teaser block, the primary teaser link is followed.

## Accessibility

* Do not repeat links, links inside one molecule must have unique destinations.
* The teaser overlay-link is excluded from the tabindex and invisible to
  screenreaders (WCAG 2.4.3).
* The teaser overlay-link has visually hidden text content (WCAG 2.4.9).
* Teaser content must include exactly one link which has the same destination as
  the overlay link (WCAG 2.1.3).
* If a 'read more' link is used: use aria-label or aria-labelledby to provide
  screenreader information (WCAG 2.4.4).
