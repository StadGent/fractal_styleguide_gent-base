# Teaser

## Functionality

- The entire teaser block is clickable.
- Links and buttons inside the teaser are clickable.

## Accessibility

- Do not repeat links, links inside one molecule must have unique destinations.
- The teaser overlay-link is excluded from the tabindex and invisible to
  screenreaders (WCAG 2.4.3).
- The teaser overlay-link has visually hidden text content (WCAG 2.4.9).
- Teaser content must include exactly one link which has the same destination as
  the overlay link (WCAG 2.1.3).
- If a 'read more' link is used: use aria-label or aria-labelledby to provide
  screenreader information (WCAG 2.4.4).