# Changelog

All notable changes to this style guide are documented here.

NOTE: Refer to upcoming changes in our README.md under "Roadmap"

## [Unreleased]

### Added

* Subsite header title added for mobile.

### Updated

* Refactored subsite header template.

### Fixed

* Bug where checkboxes in fixed-height modal were displayed in the `modal-actions`.

## [3.0.0-beta8]

### Updated

* Changed width of image gallery to 10 columns in the Detail layout.
* Quote wrapper is displayed over the full 12 columns in the Detail layout.
* Social block in theme footer is left aligned on mobile devices.

### Fixed

* JS error when no caption for table is provided.
* Spacing for mobile tables.
* Broken line in accolade for the Quote component.
* Image placeholders on Overview layout.

## [3.0.0-beta7]

### Added

* File upload molecule.

### Updated

* Added class `form-steps-list` to make Form Steps extendable.
* Make it possible to override the icon of `button-alert`.

### Fixed

* Table row color for tables that both have a `thead` and `tbody` element.

## [3.0.0-beta6]

### Added

* Added table theming.
* Added JS functionality that adds necessary attributes to tables on page load.

### Added

* Added table theming.
* Added JS functionality that adds necessary attributes to tables on page load.

### Updated

* Added all possible variants for the `Theme Footer` component.
* Added all language variants for the `Footer` component.
* Increased `legend` font-size.

### Fixed

* Faulty underline for tabs.
* Missing border-bottom for tags with a link.
* Header search button underline.

### Removed

* Multiselect variant for `Select` component.

## [3.0.0-beta5]

### Added

* Bottom border to fieldset.
* Logo to theme footer.
* No Image fallback for avatar in MijnGent block.

### Fixed

* Accolade background for field messages in boxes.
* Positioning of the subsite figure on IE11.

### Updated

* Underline for links.

## [3.0.0-beta4]

### Added

* DTGB-684: Separate `checkboxes` component.
* DTGB-684: Separate `radios` component.
* DTGB-688: Vertical variant for Form Steps.
* DTGB-688: Wizard (as a variant for the Form organism).
* DTGB-688: Multistep form (as a variant for the Form organism).

### Updated

* DTGB-684: Moved `select` to molecules and have it use the `form-item` component.
* DTGB-684: Moved `form` to organisms.
* DTGB-688: Renamed 'Wizard Steps' to 'Form Steps'.

    > :warning: The `wizard-steps` CSS class is now deprecated and will be removed in the next major version. Update it to `form-steps`.

* DTGB-707: Removed webkit datepicker up/down arrows.
* DTGB-708: Fixed button styling for iOS' Safari.

### Removed

* DTGB-684: Dark button variant.

## [3.0.0-beta3]

### Updated

* Reverted the `render` tag back to the default `include` tag.
* Re-added path filters to fix asset paths for the generated static files.

## [3.0.0-beta2]

### Updated

* Changed yarn engine requirements to a `^1.12.0`.
* Component templates are now included with the `render` tag. More info: [frctl/twig](https://github.com/frctl/twig#included-tags).
* Resolved all dependency vulnerabilities.

### Removed

* Contact box component.

## [3.0.0-beta1]

### Added

* DTGB-552: Spinner.
* DTGB-680: Form-row.
* DTGB-673: Added Gent Info component.
* DTGB-621: Modal component in molecules tree (i.e. this component isn't hidden anymore).
* DTGB-673: Added Gent Info component.
* DTGB-678: Form-disclaimer.
* DTGB-677: Wizard steps.
* DTGB-172: Component documentation.

### Updated

* DTGB-676: Exposed modal open and close functions.
* DTGB-665: Refactored pages to only show layouts. This shouldn't affect any
  custom projects.
* DTGB-621: Cross-browser behavior of the modal component.
* DTGB-621: Focus management of the modal component.
* DTGB-659: Changed tablet breakpoint from `769px` to `768px`.
* DTGB-675: Refactoring of some components:

    * Fonts description changed.
    * Label component hidden in style guide.
    * Field message component hidden in style guide.
    * Logo component hidden in style guide.

* DTGB-607: Changed font-size for boxes to `16px` (a.k.a. `.8rem`)
* DTGB-629: Updated text alignment for boxes on detail pages.
* DTGB-697: Updated hover animation for links.

### Removed

* DTGB-677: Form steps.
* DTGB-683: Frequently visited.
* DTGB-683: Filter placeholder.

## [3.0.0-alpha11]

### Added

* DTGB-649: contact block variants
* DTGB-650: multiple cta-block wrapper
* DTGB-651: Links on topic overview page
* DTGB-654: File download molecule
* DTGB-656: Frequently visited molecule
* DTGB-658: Filter placeholder

### Updated

* DTGB-651: Topic teaser styling
* DTGB-656: Border-width of tag
* DTGB-655: Updated copy in checkbox-with-filter popup
* DTGB-604: removed font-size increase on +1920px screens
* DTGB-660: Added gentinfo logo to the gentinfo-island.

### Changed

* DTGB-648: Refactored form fields

### Removed

* DTGB-648: Field description (replaced by variant of field message)

## [3.0.0-alpha.10]

### Added

* DTGB-574: tabs
* DTGB-633: inverted variant of contact-details

### Updated

* DTGB-634: cta block variants

### Changed
* DTGB-641: Refactored filter template to display filter button next to result instead of above it

### Fixed

* DTGB-635: Fixed missing scroll lock on mobile menu.

## [3.0.0-alpha.9]

### Added

* DTGB-547: Added icon overview to the icon atom page.
* DTGB-569: Added subscribe molecule (hidden).
* DTGB-547: Renamed `icon-link` to `icon-url`
* DTGB-610: Added dash-separated list
* DTGB-555: Added programme organism.
* DTGB-555: Added modal molecule.

### Changed

* DTGB-569: Completely refactored theme footer.

## [3.0.0-alpha.8]

* DTGB-429: Temporarily replaced baguettebox.js with a Forked version.
* DTGB-539: Refactored footer templates to sections.
* DTGB-539: Refactored timeline item wrappers to role listitem.
* DTBG-539: Refactored image-gallery template to also use labelledby.

### Updated

* DTGB-509: Updated checkbox-with-filter template.

## [3.0.0-alpha.7]

* DTGB-208: Added max-width fallback for text elements.
* DTGB-416: Updated gulp build to fail on error.
* DTGB-410: Added fractal search functionality.
* DTGB-203: Refactored gulpfile to gulp ^4.0.0
* DTGB-144: Added SassDoc generation for external developers.
* DTGB-147: Redefined the color palletes and color schemes.
  * Refactored the way themify works. This removed the use of variables
    to determine the themified variant of a component.
  * **Sections have changed into color schemes**
    Sections have been changed into color schemes with the `cs--` prefix.
    Colors are now defined in a `$colors` SASS map and accessed through the
    `color()` function. See the documentation of colors for more information.
  * **Themify changes**
    Refactored the way themify works. This removed the use of variables
    to determine the themified variant of a component.
  * **Color scheme nesting removed**
    Color scheme nesting has also been removed because they won't be used
    anymore in the new style guide.
  * **Color panals introduced**
    Color panels have been added to allow easier default styling of new
    components and to allow easier overriding of the properties of these
    components.
* STIJ-159: Added tag atom styling.
* DTGB-174: Changed styling of status messages.
* DTGB-214: Added new styling to buttons.
* DTGB-218: Added new logo.
* DTGB-258: Added gulp task to generate iconfont.
* DTGB-283: Updated the license file to GPLv2.
* DTGB-288: Added the quote molecule.
* DTGB-394: Moved layouts from 61-layouts directory to a 71-pages directory.
* DTGB-180: Added gulp task to perform accessibility checks.
* DTGB-209: Added new styling for basic input field atoms.
* DTGB-431: Added video component.
  * We added styling for radio buttons and checkboxes. These were not styled in
    previous versions of the style guide.
  * **Removed jQuery UI Datepicker support and integration!**
    Did some refactoring to the SASS partials. Most of the input field styling
    can now be found in the `_forms.scss` partial.
* DTGB-406: Added styling for the footer organism.
* DTGB-407: Changed the default font size breakpoints.
* DTGB-421: Added a feedback form component.
* DTGB-282: Added an image gallery organism.
* DTGB-282: Replaced lightgallery by baguettebox as lightbox libary.
* DTGB-423: Added a topic collection organism.
* DTGB-148: Refactored heading organism.
* DTGB-148: Added info-box organism.

## 2.11.0

* DTGB-140: Removed some files from the NPM package.
* DTGB-140: Fixed a bug where `npm install` breaks
  the install of the style guide.
* DTGB-276: Fixed a bug where the breadcrumb alignment was not correct.
  * Some markup changes have been introduced so you might need some
    refactoring.
* DTGB-397: Changed the markup of radio buttons and checkboxes. They are
  now inside their own fieldset.
* DTGB-401: Updated links to new public gent_base repository.
* DTGB-402: Added a required form fields indicator at the top of forms.
* DTGB-443: Added article teaser component.
* DTGB-443: Added 'more articles' block.

## 2.9.0

* STIJ-246: Added a mixin  and class `no-link-style` to make it possible
  to override the link styling of certain blocks with `text-decoration: none;`.
* STIJ-246: Give links that are styled like a button a `text-decoration: none;`.
* STIJ-86: Added documentation for the description atom.
* STIJ-93: Added external link variant. This defines a class `.external-link`
  that provides a `::before` on the link and adds a new-tab icon.
* STIJ-92: Updated the label atom documentation.
* STIJ-88: Updated the heading atom documentation.
* STIJ-96: Updated the paragraph atom documentation.
* STIJ-94: Updated the list atom documentation.
* STIJ-250: Added small fix for empty teaser collection preview templates.

## 2.8.1

* STIJ-244: Fixed critical gulp build bug. **IMPORTANT** Necessary fix for 2.8.0.

## 2.8.0

* STIJ-198: Changed color-element-states() mixin to element-states() mixin.
* STIJ-236: Fixed markup of breadcrumb + fixed an issue where the
  breadcrumb didn't wrap correctly.
* STIJ-237: **IMPORTANT** Removed bootstrap grid styling for forms.

## 2.7.8

* STIJ-200: Refactor status messages.
* STIJ-229 Refactored Gulp-file to ECMA-6
* STIJ-229 Fixed gulp npm-install. Added --help support and argument checking
  through the yargs module.
* STIJ-229 Fixed gulp build to support -h --help, option validation through Yargs.
* STIJ-229 Refactored ES-lint to accomodate node.js, ES-6, enforced
  'use strict'; on a function level instead of global.

## 2.7.7

* STIJ-235: Refactor form actions.

## 2.7.6

* STIJ-221: Removed header margin top again. We need to think of a better way to
  implement this.
* STIJ-219: Added travis integration.
* STIJ-223: Added codeclimate integration.

## 2.7.5

* STIJ-216:
  * Added masonry-layout library.
  * Added organism for masonry layout.
* STIJ-217: Added validation check to version_tag.sh script.

## 2.7.4

* STIJ-197: Added margin top to headings and fixed the color of links inside
  headings.
* STIJ-207: Fixed small issue for preview templates.
* STIJ-208: Fixed bug in `postinstall.sh` script.
* STIJ-210: Move some dependencies to devDependencies.
* STIJ-211: Fixed newsletter block styling.
* STIJ-214: Added preview template fixes after refactoring the heading atoms.

## 2.7.3

Due to some issues with publishing to NPM we had to update to a new patch
version without introducing new changes to the style guide.

## 2.7.2

* STIJ-208: Removed console log and updated postinstall.sh script to generate
  main_cli.scss content.

## 2.7.1

* STIJ-170: Fixed a bug where the search icon in the header did not work for FF
  and IE.
* STIJ-175: Added teaser and topic teaser molecules.
* STIJ-193: Added figcaption atom and figure molecule.
* STIJ-194: Updated preview layouts and added some building blocks.
* STIJ-199: Removed some style guide specific preview templates that where not
  necessary anymore.
* STIJ-205: Added deploy script for admins.
* STIJ-206: Added main_cli.scss file that creates the main sass file **without
  SASS globbing** to support Angular CLI.
* STIJ-207: Added small fix for preview layouts.

## 2.7.0

IMPORTANT: Class .text-center has been removed

* STIJ-1: Fixed whitespace issue for the gallery component.
* STIJ-30: Fixed styling for select and multi select fields on iPad.
* STIJ-39: Fixed component colors inside of sections, based on guidelines fron
  the City of Ghent.
* STIJ-45: Changed jQuery UI datepicker format to a Dutch format.
* STIJ-87: Added description field documentation.
* STIJ-87: Refactored description field atom to use Themify mixin.
* STIJ-89: Changed the documentation of an icon to English and update it a bit.
* STIJ-96: Added paragraph atom documentation.
* STIJ-96: Removed the paragraph variant that contains centered text, **it is
  not allowed by the City of Ghent**!
* STIJ-100: Added variant for CTA links.
* STIJ-100: Added CTA link documentation.
* STIJ-106: Added search molecule documentation.
* STIJ-170: Fixed search molecule bug where it was using the old button submit
  atom instead of the input type submit atom.
* STIJ-170: Added a label to the search molecule.
* STIJ-170: Hide the label of the search molecule in the header organism.
* STIJ-170: Add placeholder to search molecule inside the header organism.
* STIJ-175: Added page wide image component.
* STIJ-177: Added newsletter block component.
* STIJ-178: Added styling for inline form-items.
* STIJ-178: Added address organism.
* STIJ-182: Fixed whitespace when previewing footer component in the style guide.
* STIJ-186: Added header variant with breadcrumb and with a banner image.
* STIJ-186: Added small fix to the buttons in the header.
* STIJ-188: Fixed issue in gulp command js:dist.
* STIJ-189: Fixed some style guide specific issues.

## 2.6.19

* STIJ-158: Changed datepicker date format to an English format.
* STIJ-159: Removed button submit atom.
* STIJ-159: Moved the submit button documentation to the input submit atom.
* STIJ-160: Changed the form actions - editor molecule variant to include a
  normal button instead of a dropbutton.
* STIJ-161: Fixed broken links in documentation files.
* STIJ-162: Changed all Dutch text to English.
* STIJ-168: Changed style guide title to a versioned version.
* STIJ-169: Integrate link in style guide to the GitHub CHANGELOG.

## 2.6.18

* STIJ-50: Fixed label for attributes and changed a lot of the form examples in
  the style guide.
* STIJ-86: Added documentation to some components.
* STIJ-156: Updated the CONTRIBUTING and README files.
* STIJ-156: Updated the README file of the gallery component with important
  licensing information.
* STIJ-157: Changed the loaded JS files in the _preview.twig file to the
  minified versions. This fixes issues when automatically deploying.
* STIJ-157: Changed the gulp file to also locally minify the JS files. This
  fixes local JS issues.

## 2.6.17

IMPORTANT: Updating this style guide through composer is DEPRECATED! The next
  release will remove composer.json!

* STIJ-154: Changed preview layout of style guide to be more user friendly.
* STIJ-156: Added LICENSING, SECURITY, CONTRIBUTING and README changes.
* STIJ-156: Added license information for the gallery component that uses Light
  Gallery (jQuery plugin).
  **Important: Check the bit about the commercial license!**

## 2.6.16

* STIJ-155: Added small fixes to various form elements.

## 2.6.15

* STIJ-45: Added custom styling to the jQuery UI datepicker component.
* STIJ-148: Refactored hamburger-menu into a single component.

## 2.6.14

* STIJ-148: Made hamburger-menu WCAG compliant.
* STIJ-148: Created a global TabTrap object.

## 2.6.13

* STIJ-112: Added footer documentation.
* STIJ-149: The footer organism now has a different grid implementation. Through
  the use of a data-columns attribute we made the grid styling flexible between
  2, 3 or 4 columns.
* STIJ-150: Changed social media links block. This now displays the social media
  links of Stad Ghent correctly.

## 2.6.12

* STIJ-147: Added changes to Chosen for multiselect fields. Chosen will now be
  disabled on iPad.

## 2.6.11

* STIJ-146: Added at and code icons.
* Optimised following icons: caret, pinned, paper, idea, smartphone, data,
  data-new.

## 2.6.10

* STIJ-145: Added pinned icon.

## 2.6.9

* STIJ-63: Made Fractal variants of paragraphs.
* STIJ-63: Remove underlined text from paragraph examples,
  it is discouraged to use underlined text.
* STIJ-131: Remove placeholders from all input type fields except search fields.
* STIJ-25: Fixed status messages preview pages.
* STIJ-140: Fixed themify issue on select input fields.

## 2.6.8

* STIJ-25: Added themify to the status messages component.

## 2.6.7

* Fixed select box appearance in IE.
* STIJ-139: Added no-optional class to hide optional from field labels.
* STIJ-139: Changed the styling of checkbox and radio field labels.
* STIJ-139: Added fieldset styling.
* STIJ-139: Changed class of messages.

## 2.6.6

* Fixed a bug in the postinstall.sh script.

## 2.6.5

* STIJ-126: Removed CDN imports of external libraries and added them through
  yarn.

## 2.6.4

* STIJ-125: Fixed close button for items inside multiselect.
* STIJ-137: Changed preview template for Mijn Gent block.

## 2.6.3

* STIJ-40: Fixed ugly styling on buttons and input fields for iOS.

## 2.6.2

* STIJ-35: Added bindings and functions for the Gallery component.

## 2.6.1

* STIJ-2:
  * Added default no-style styling to lists in the hamburger menu.
  * Fixed preview hamburger menu.
* STIJ-34: Changed Gent info block title to h3.

## 2.6.0

* STIJ-32: Refactored heading.
* STIJ-95: Added more documentation.
* STIJ-122: Minor validation fixes.
* STIJ-123: Added form errors.

## 2.5.1

* STIJ-116: Minor change to the styling of the Form Steps molecule.

## 2.5.0

* STIJ-76:
  * Added bindings and functions layer to all Javascript files.
  * Added documentation for Javascript use and component Javascript.
  * Refactored some Javascript code.
* STIJ-116:
  * Changed markup for the Form Steps molecule.
  * Changed styling for the Form Steps molecule.
  * Added themify for the Form Steps molecule.

[3.0.0-beta8]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-beta7...3.0.0-beta8
[3.0.0-beta7]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-beta6...3.0.0-beta7
[3.0.0-beta6]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-beta5...3.0.0-beta6
[3.0.0-beta5]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-beta4...3.0.0-beta5
[3.0.0-beta4]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-beta3...3.0.0-beta4
[3.0.0-beta3]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-beta2...3.0.0-beta3
[3.0.0-beta2]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-beta1...3.0.0-beta2
[3.0.0-beta1]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-alpha11...3.0.0-beta1
[3.0.0-alpha11]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-alpha.10...3.0.0-alpha11
[3.0.0-alpha.10]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-alpha.9...3.0.0-alpha.10
[3.0.0-alpha.9]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-alpha.8...3.0.0-alpha.9
[3.0.0-alpha.8]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-alpha.7...3.0.0-alpha.8
[3.0.0-alpha.7]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-alpha.6...3.0.0-alpha.7
[3.0.0-alpha.6]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-alpha.5...3.0.0-alpha.6
[3.0.0-alpha.5]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-alpha.4...3.0.0-alpha.5
[3.0.0-alpha.4]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-alpha.3...3.0.0-alpha.4
[3.0.0-alpha.3]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-alpha.2...3.0.0-alpha.3
[3.0.0-alpha.2]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/3.0.0-alpha.1...3.0.0-alpha.2
[3.0.0-alpha.1]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/2.10.0...3.0.0-alpha.1
[Unreleased]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/master...develop
