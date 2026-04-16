# Changelog

All notable changes to this style guide are documented here.

## [7.2.4]

### Updated

- SGD8-3068: Update vesta contact teaser.

### Fixed 

- SGD8-2885: Fix partner block li height.

## [7.2.3]

### Fixed

- SGD8-3093: Fix teaser date styling on multiple lines.

## [7.2.2]

### Fixed

- STIJ-453: Fix dependency type of swiper.

## [7.2.1]

### Fixed

- STIJ-453: Fix failing tests due to outdated chrome(driver) version.
- STIJ-453: Fix outdated node version in the npm-publish action.

## [7.2.0]

### Added

- STIJ-453: Add green color theme to the theme selector.

### Changed

- STIJ-453: Change from sass-lint to stylelint.

### Fixed

- STIJ-453: Fix SCSS issues detected with stylelint. 

### Updated

- STIJ-453: Update gulp from 4 to 5.
- STIJ-453: Update gulpfile.js to .mjs (module style).
- STIJ-453: Update fractal.js to .mjs (module style).

## [7.1.0]

### Added

- SODICRMWEB-846: Add green theme.

## [7.0.6]

### Fixed

- SGD8-2026: Fix collapsible breadcrumbs for multiple instances.

## [7.0.5]

### Fixed

- SGD8-3055: Fix link display in partner block description.

## [7.0.4]

### Added

- ZALENZOEK-693: Add color-zero-medium to blue theme.

### Updated

- Update nvmrc node version to 20.
- Update some colors to remove use of --lighten and --darken.

## [7.0.3]

### Fixed

- SGD8-3049: Fix breakpoint mixin.

## [7.0.2]

### Fixed

- SGD8-3049: Fix font-weight of headings.
- SGD8-3049: Fix overview page title styling.
- SGD8-3049: Fix headings width and color.

## [7.0.1]

### Updated

- Update changelog instructions.

### Fixed

- STIJ-446: Fix minor Sass validation errors.
- STIJ-446: Clean up outdated --darken and --lighten colors.

## [7.0.0]

This major update contains no style changes. Instead, the Sass structure
has been updated to match the latest standards.

### Changed

- STIJ-446: Fix Sass deprecations. This affects api changes:
  - The function color() has changed to coloring().
  - Styleguide now uses the Sass `@forward` and `@use` method to include SASS
    resources in one another. `@import` is not used anymore. Every SASS file
    in your own project should now `@use` any resource needed from
    gent_styleguide, such as variables and mixins.
  - The order of `@include` changes: all `@include` without mixin, only CSS
    need to be at the top, followed by `@include` with mixins.
  - Sass now provides functions that can be used where needed like so:
    ```
    @use "sass:list";
    @use "sass:map";
    @use "sass:meta";
    @use "sass:string";
    @use "sass:color";

    p {
      color: color.mix(..., ...);
    }
    ```
### Fixed
- STIJ-446: Fix Sass deprecations.
- STIJ-446: Fix gc machine description issues in fractal build.

## [6.0.17]

### Updated
- KAG-489: Fix background accolade.
- SGD8-2552: Updated accolade with 1px extra.

### Removed
- SGD8-2802: Removed margin from figcaption on full img.

## [6.0.16]

### Removed
- SGD8-2985: Removed opening-hours field in teaser mobile.

### Updated
- SGD8-2552: Updated accolade to new design.

## [6.0.15]

### Removed
- SGD8-2802: Removed accolade for full image figcaptions.

### Fixed
- SGD8-2915: Fixed the spacing for CTA blocks with img on the right side & mobile spacing.
- SGD8-3009: Fixed initial page zooming when swiper is present.

### Updated
- Updated Chromedriver to v138.
- Updated Snyk to v1.1297.3.

## [6.0.14]

### Added
- HEAT-6831451: Added icons for parking, car-charger and arrows-left-right.

### Changed
- SGD8-3000: Changed border for responsive table to slides instead of whole table.

## [6.0.13]

### Fixed
- SGD8-3000: Fixed table equal heights.  

## [6.0.12]

### Fixed
- SGD8-2287: Fixed table max-width on mobile.

### Changed
- SGD8-2965: Changed overlap spacing for content headers with img overlap.

### Removed
- SGD8-2982: Removed new fonts styling and reverted to old styling with eot and old font files.

## [6.0.11]

### Added
- SGD8-2982: Added WOFF font files for fallback on servers without font/woff2 MIME-type.

## [6.0.10]

### Added
- SGD8-2982: Added version parameter to font url for anti-caching purposes.

## [6.0.9]

### Fixed
- SGD8-2982: Fixed faulty copying of font files with gulp task.

## [6.0.8]

### Added
- SGD8-2986: Add CSS hyphenation to teasers.

### Fixed
- SGD8-2581: Fixed empty opening hours widgets' margin.

## [6.0.7]

### Fixed
- SGD8-2982: Fixed corrupted font files.

## [6.0.6]

### Fixed
- SGD8-2982: Fixed broken WOFF2 font files in base fonts.

## [6.0.5]

### Removed
- SGD8-2602: Removed unnecessary font extensions.

### Fixed
- SGD8-2287: Fixed table styling with Swiper to load library.
- Broken build script.

## [6.0.4]

### Added
- SDG8-2888: Added styling for titles inside list-items.

### Changed
- SGD8-2287: Changed tables' mobile theming to use swiper for 2nd column and onwards (`<table>` markup changes because of this).

### Removed
- SGD8-2602: Removed unnecessary font extensions (eot, ttf, woff and svg).

## [6.0.3]

### Fixed
- Revert STIJ-444: Fix disabled button styling that was overwritten for submit buttons

## [6.0.2]

### Added
- SGD8-2949: Added icons for Bluesky and Threads

### Fixed
- STIJ-444: Fix disabled button styling that was overwritten for submit buttons
- SGD8-2548: Fix figcaption width for large figcaptions

## [6.0.1]
### Added
- SGD8-2581: Added space under opening-hours day element
- SGD8-2548: Added figcaption margins to cta block

### Fixed
- SGD8-2482: Fixed error messages in forms + select size
- SGD8-2604: Fixed first and second item nr in steps

## [6.0.0]

**New Stad Gent style. View all markup changes below. Always look up
the mentioned elements in the styleguide to see the new HTML markup.**

### Added

#### theme-body() (mixin)

The themify `theme()` function creates style selectors like this:
```css
.cs--blue .original-selector .child ... {}
```

Where `.cs--blue` is the theme color and this class is added to the <body> element.

But sometimes the `.original-selector` is a body class which is not supported by
the `theme()` function.
The `theme-body()` function adds the color class to the first element of the
selector:
```css
.cs--blue.original-selector .child ... {}
```

#### Accolade element (mixin)
`@include accolade;`

Add an outside accolade to an element and add a color to it.

#### Abstract shadow (mixin)
`@include abstract-shadow;`

Add an underlying container of the same size under the chosen element.
For example the highlight molecule.

#### Icon-right (mixin)
`@include button-icon-right;`

Also added the `.icon-right` class for icons that are on the right-hand side.

### Changed (HTML markup)
**Follow these markup changes in your project to have CSS applied flawlessly.**

#### Legends
**Added legend-title class**
The legend now has a `<span class="legend-title">` around the text/title/label

#### Input submit
Changed `<input>` to `<button>`. This is important to be able to use the hover effect in combination with an icon.

#### Icon atom
**Removed icons:** external-link, fancyback

**Added icons:** basket, civil-affairs, contact, cross-circle, culture,
education, environment, for-children, fullscreen-enter, fullscreen-exit, ghent,
health, info-circle, layers, link, living, map, mobility, music, next, pause,
pinterest, play, previous, question, question-circle, refresh, settings,
shopping, sign-language, sign-out, spoken-language, stop, tag, target, uitpas, 
uit-met-vlieg, view-grid, view-list, virus, whatsapp, wheelchair-no, work.

Some icons have been updated, using the same machine name.

#### Label icon
This element is new. Existing labels such as on teasers can be replaced by this
atom. See teaser markup changes.

#### Important note molecule
This new molecule is used to display a colored text with same color icon in front of it. It is e.g. used in the Timeline Roadmap display.

#### Modal molecule
Default heading changed from `h3` to `h2` and the close button has the `.button-secondary` class

#### Accordion molecule
This module is expanded with the option to add another container (for images, e.g. on Timeline) that is controlled with the `data-controls-img` attribute, linking it to the id of the img container.

Use the `.accordion--link` class for read-more type links with the correct button and content classes.

#### Contact details molecule
A wrapper was added to columns: `.contact-details-columns` and the `h3` is changed to an `h2` with class `.h3`, which is outside of those columns.

#### Highlight molecule
No more spot images via classes. The icon can be changed in HTML markup via
the proper icon name in the `<i>` element.
An H2 title has been added.

#### Call to action molecule
Not based on Highlight molecule anymore.
Instead, there is new markup, including the option for an image (1:1).

#### Table of contents molecule
The H2 heading changed to H4 and is visible. The heading text changed as well.
A class is added to the `<ul>` element to define 2 or 3 columns.

#### Status messages molecule
The icon classes have changed to the circle variants.

#### File upload molecule
The file upload molecule (variation multiple) has the new class multiple added on the section. 
`<section class="file-upload multiple">`.
This change is needed to hide the 'No file chosen.' text on this variation.

#### Partner block molecule
* Not based on Highlight molecule anymore.
* Title is now an `h2` instead of an `h3`.
* `.single-partner` becomes `.partners` class because styling changes are determined based on wrapper class `.partner__single` or `.partner__multiple`.
* `<a>` tag has `.no-icon` class so that it does not get an external link icon in some cases
* (Optional) intro block contains only the title and text: extra wrappers for `.intro` and `.intro-content`.

#### Teaser molecule
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

#### Banner organism
A `banner-image-container full-width` wrapper is added. The image inside is not a gallery but a simple image shown without `data-ratio` attribute.

#### Collection organism
The grid system is updated (Susy is removed), an example is added to the readme. The old (legacy) grid classes still work for now.

#### Header organism
- The logo is bigger on the frontpage, based on a parent class `is-frontpage`.

#### Timeline organism
**Timeline paragraph title** is now an `h3`, the **Timeline item title** is now an `h4` and the **Timeline item subtitle** is now an `h5`.

There's an image (singular) that is loaded twice: once on the right side and shown on mobile and once on the left side and shown on desktop. Make sure the `data-controls-img` attribute of the title is the same as the image container for desktops' id.

The timeline slots can have a reverse order (by adding the `.timeline-slot-reverse` class) e.g. if the previous slot is odd, but also if the previous slot is even and also has the `.timeline-slot-reverse` class.

The new `timeline--roadmap` variant is used for displaying steps. It also includes an accordion with extra content options.

#### Programme organism
Titles have changed to h2 and h3 for slot title and teaser title

#### Summary box organism
Not based on Highlight molecule anymore.
The HTML markup has been simplified.
```
<aside class="summary-box">
  ...
</aside>
```

#### Image gallery multiple organism
```
<span>Show all photos <i class="icon-arrow-right" aria-hidden="true"></i></span>
```
Becomes
```
<span>Show all photos <i class="icon-fullscreen-enter" aria-hidden="true"></i></span>
```

#### Contact details organism
Not based on Highlight molecule anymore.
The HTML markup has been simplified.
```
<section class="contact-details">
  ...
</section>
```
The links get a `no-icon` class.

Add the `.contact-details--with-image` class to the contact-details section if you want to remove the side margins and set it to full width.

#### Footer organism
* Titles become `h4` except Gentinfo title stays `h3`.
* `gentinfo-block` class gets 2nd class `dark-background`.
* `icon-document` icon becomes `icon-subscribe`
* Gentinfo ul element gets extra class `inline`.
* Gentinfo ul links get new class `no-icon`.
* Gentinfo button is secondary instead primary and gets extra class `icon-left`.

#### Theme footer organism
* Social block has an `h4` title instead of `h3`.
* The newsletter block does not use highlight block anymore, instead it uses the
  new feature-block markup.

#### Filter layout
* "You have selected" and "Found results" is normal text instead of `h2`.
* The left sidebar title changed from `h2` to `h3`.


## [5.x and older]

* See full changelog at
  https://github.com/StadGent/fractal_styleguide_gent-base/blob/5.x/CHANGELOG.md


[7.x-dev unreleased]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.x...7.x-dev
[7.2.4]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.2.4...7.2.4
[7.2.3]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.2.2...7.2.3
[7.2.2]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.2.1...7.2.2
[7.2.1]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.2.0...7.2.1
[7.2.0]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.1.0...7.2.0
[7.1.0]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.0.6...7.1.0
[7.0.6]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.0.5...7.0.6
[7.0.5]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.0.4...7.0.5
[7.0.4]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.0.3...7.0.4
[7.0.3]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.0.2...7.0.3
[7.0.2]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.0.1...7.0.2
[7.0.1]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/7.0.0...7.0.1
[7.0.0]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.17...7.0.0

[6.x-dev unreleased]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.x...6.x-dev
[6.0.17]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.16...6.0.17
[6.0.16]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.15...6.0.16
[6.0.15]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.14...6.0.15
[6.0.14]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.13...6.0.14
[6.0.13]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.12...6.0.13
[6.0.12]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.11...6.0.12
[6.0.11]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.10...6.0.11
[6.0.10]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.9...6.0.10
[6.0.9]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.8...6.0.9
[6.0.8]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.7...6.0.8
[6.0.7]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.6...6.0.7
[6.0.6]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.5...6.0.6
[6.0.5]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.4...6.0.5
[6.0.4]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.3...6.0.4
[6.0.3]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.2...6.0.3
[6.0.2]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.1...6.0.2
[6.0.1]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.0.0...6.0.1
[6.0.0]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/5.1.7...6.0.0
[5.x and older]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/5.x...6.x
