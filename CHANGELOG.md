# Changelog

All notable changes to this style guide are documented here.


## [6.x-dev unreleased]

* New Stad Gent style. View all markup changes below. Always look up
the mentioned elements in the styleguide to see the new HTML markup.

## New mixins

### theme-body()

The themify `theme()` function creates style selectors like this:
```css
.cs--blue .original-selector .child ... {}
```

Where cs--blue is the theme color and that class is added to the <body> element.

But sometimes the `.original-selector` is a body class which is not supported by
the `theme()` function.
The `theme-body()` function adds the color class to the first element of the
selector:
```css
.cs--blue.original-selector .child ... {}
```

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
### Legends
**Added legend-title class**
The legend now has a `<span class="legend-title">` around the text/title/label

### Input submit
Changed `<input>` to `<button>`. This is important to be able to use the hover effect in combination with an icon.

### Icon atom
**Removed icons:** external-link, fancyback

**Added icons:** basket, civil-affairs, contact, cross-circle, culture,
education, environment, for-children, fullscreen-enter, fullscreen-exit, ghent,
health, info-circle, layers, link, living, map, mobility, music, next, pause,
pinterest, play, previous, question, question-circle, refresh, settings,
shopping, stop, tag, target, view-grid, view-list, virus, whatsapp,
wheelchair-no, work, uitpas, uit-met-vlieg, sign-language, spoken-language.

Some icons have been updated, using the same machine name.

### Label icon
This element is new. Existing labels such as on teasers can be replaced by this
atom. See teaser markup changes.

### Important note molecule
This new molecule is used to display a colored text with same color icon in front of it. It is e.g. used in the Timeline Roadmap display.

### Modal molecule
Default heading changed from `h3` to `h2` and the close button has the `.button-secondary` class

### Accordion molecule
This module is expanded with the option to add another container (for images, e.g. on Timeline) that is controlled with the `data-controls-img` attribute, linking it to the id of the img container.

Use the `.accordion--link` class for read-more type links with the correct button and content classes.

### Contact details molecule
A wrapper was added to columns: `.contact-details-columns` and the `h3` is changed to an `h2` with class `.h3`, which is outside of those columns.

### Highlight molecule
No more spot images via classes. The icon can be changed in HTML markup via
the proper icon name in the `<i>` element.
An H2 title has been added.

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
* Not based on Highlight molecule anymore.
* Title is now an `h2` instead of an `h3`.
* `.single-partner` becomes `.partners` class because styling changes are determined based on wrapper class `.partner__single` or `.partner__multiple`.
* `<a>` tag has `.no-icon` class so that it does not get an external link icon in some cases
* (Optional) intro block contains only the title and text: extra wrappers for `.intro` and `.intro-content`.

### Teaser molecule
There are multiple variations of teasers instead of just one. Pick the right
variation for your use case.
- Teasers without image now need the teaser class `no-image` for correct styling.
- Teaser titles are now `h3` with `.h4` class, except for `teaser--square__double`, which has a regular `h3` as a first teaser.
- Event dates have the class `date` instead of `event`.
- Labels follow the markup of the new atom "Label". See label atom changes.
- Tags list moved to below the teaser title, except for the square variant.
- Tags and label in the square variant get a new parent div with class `tags-label-wrapper`.
- Accolade markup should be deleted.
- Wide teaser has no changes except for heading change and accolade removal, see above. The image has a 1:1 ratio.
- Square double teaser added.

### Banner organism
A `banner-image-container full-width` wrapper is added. The image inside is not a gallery but a simple image shown without `data-ratio` attribute.

### Collection organism
The grid system is updated (Susy is removed), an example is added to the readme. The old (legacy) grid classes still work for now.

### Header organism
- The logo is bigger on the frontpage, based on a parent class `is-frontpage`.

### Timeline organism
**Timeline paragraph title** is now an `h3`, the **Timeline item title** is now an `h4` and the **Timeline item subtitle** is now an `h5`.

There's an image (singular) that is loaded twice: once on the right side and shown on mobile and once on the left side and shown on desktop. Make sure the `data-controls-img` attribute of the title is the same as the image container for desktops' id.

The timeline slots can have a reverse order (by adding the `.timeline-slot-reverse` class) e.g. if the previous slot is odd, but also if the previous slot is even and also has the `.timeline-slot-reverse` class.

The new `timeline--roadmap` variant is used for displaying steps. It also includes an accordion with extra content options.

### Programme organism
Titles have changed to h2 and h3 for slot title and teaser title

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


### Contact details organism
Not based on Highlight molecule anymore.
The HTML markup has been simplified.
```
<section class="contact-details">
  ...
</section>
```
The links get a `no-icon` class.

Add the `.contact-details--with-image` class to the contact-details section if you want to remove the side margins and set it to full width.


### Footer organism
* Titles become `h4` except Gentinfo title stays `h3`.
* `gentinfo-block` class gets 2nd class `dark-background`.
* `icon-document` icon becomes `icon-subscribe`
* Gentinfo ul element gets extra class `inline`.
* Gentinfo ul links get new class `no-icon`.
* Gentinfo button is secondary instead primary and gets extra class `icon-left`.

### Theme footer organism
* Social block has an `h4` title instead of `h3`.
* The newsletter block does not use highlight block anymore, instead it uses the
  new feature-block markup.


### Filter layout
* "You have selected" and "Found results" is normal text instead of `h2`.
* The left sidebar title changed from `h2` to `h3`.

## [5.x and older]

* See full changelog at
  https://github.com/StadGent/fractal_styleguide_gent-base/blob/5.x/CHANGELOG.md


[6.x-dev unreleased]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.x...6.x-dev
[5.x and older]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/5.x...6.x
