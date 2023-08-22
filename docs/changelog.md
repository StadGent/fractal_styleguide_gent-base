# Changelog

All notable changes to this style guide are documented here.


## [6.x-dev unreleased]

* New Stad Gent style.

## New mixins

### Accolade element
`@include accolade;`

Add an outside accolade to an element and add a color to it.

### Abstract shadow
`@include abstract-shadow;`

Add an underlying container of the same size under the chosen element.
For example the highlight molecule.

### Icon-right
`@include button-icon-right;`

Also added the `.icon-right` class for icons that are on the right-hand side.

## HTML markup changes

### Icon atom
**Removed icons:** external-link, fancyback

**Added icons:** basket, civil-affairs, contact, cross-circle, culture, education,
environment, fullscreen-enter, fullscreen-exit, ghent, health, info-circle,
layers, link, living, map, mobility, next, pause, pinterest, play, previous,
question, question-circle, refresh, settings, shopping, stop, tag, target,
view-grid, view-list, virus, whatsapp, wheelchair-no, work

Some icons have been updated, using the same machine name.

### Label icon
This element is new. Existing labels such as on teasers can be replaced by this
atom. See teaser markup changes.

### Modal molecule
Default heading changed from H3 to ***H2*** and the close button has the `.button-secondary` class

### Accordion molecule
This module is expanded with the option to add another container (for images, e.g. on Timeline) that is controlled with the `data-controls-img` attribute, linking it to the id of the img container.

### Highlight molecule
No more spot images via classes. The icon can be changed in HTML markup via
the proper icon name in the `<i>` element.
An H3 title has been added.

### Call to action molecule
Not based on Highlight molecule anymore.
Instead, there is new markup, including the option for an image (1:1).

### Table of contents molecule
The H2 heading changed to H4 and is visible. The heading text changed as well.
A class is added to the `<ul>` element to define 2 or 3 columns.

### Status messages molecule
The icon classes have changed to the circle variants.

### File upload molecule
The file upload molecule (variation multiple) has the new class multiple added on the section. 
`<section class="file-upload multiple">`.
This change is needed to hide the 'No file chosen.' text on this variation.

### Partner block molecule
* Not based on Highlight molecule anymore
* Title is now an `h2` instead of an h3
* `.single-partner` becomes `.partners` class because styling changes are determined based on wrapper class `.partner__single` or `.partner__multiple`
* (Optional) intro block contains only the title and text: extra wrappers for `.intro` and `.intro-content`

### Teaser molecule
There are multiple variations of teasers instead of just one. Pick the right
variation for your use case.
- Teasers without image now need the teaser class `no-image` for correct styling.
- Teaser titles are now `h4`.
- Event dates have the class `date` instead of `event`.
- Labels follow the markup of the new atom "Label". See label atom changes.
- Tags list moved to below the teaser title, except for the square variant.
- Accolade markup should be deleted.

### Header organism
- The logo is bigger on the frontpage, based on a parent class `is-frontpage`.

### Timeline organism
**Date** is now an h3 and the **timeline-slot-title** is now an h4.

There's an image (singular) that is loaded twice: once on the right side and shown on mobile and once on the left side and shown on desktop.

Both the image and the content go into separate `<dd>` containers and are alternated (left/right). Make sure the `data-controls-img` attribute of the title is the same as the image container for desktops' id.

### Summary box organism
Not based on Highlight molecule anymore.
The HTML markup has been simplified.
```
<aside class="summary-box">
  ...
</aside>
```

### Image gallery multiple organism
```
<span>Show all photos <i class="icon-arrow-right" aria-hidden="true"></i></span>
```
Becomes
```
<span>Show all photos <i class="icon-fullscreen-enter" aria-hidden="true"></i></span>
```


### Footer organism
* Titles become h4 except Gentinfo title stays h3.
* `gentinfo-block` class gets 2nd class `dark-background`.
* `icon-document` icon becomes `icon-subscribe`
* Gentinfo ul element gets extra class `inline`.
* Gentinfo ul links get new class `no-icon`.
* Gentinfo button is secondary instead primary and gets extra class `icon-left`.

### Theme footer organism
* Social block has an H4 title instead of H3.
* The newsletter block does not use highlight block anymore, instead it uses the
  new feature-block markup.

## [5.x and older]

* See full changelog at
  https://github.com/StadGent/fractal_styleguide_gent-base/blob/5.x/CHANGELOG.md


[6.x-dev unreleased]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.x...6.x-dev
[5.x and older]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/5.x...6.x
