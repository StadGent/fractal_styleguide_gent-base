# Changelog

All notable changes to this style guide are documented here.


## [6.x-dev unreleased]

* New Stad Gent style.

## New mixins

### Accolade element
`@include accolade;`

Add an outside accolade to an element and add a color to it.
For example the 

### Abstract shadow
`@include abstract-shadow;`

Add an underlying container of the same size under the chosen element.
For example the highlight molecule.

## HTML markup changes

### Image gallery multiple organism
```
<span>Show all photos <i class="icon-arrow-right" aria-hidden="true"></i></span>
```
Becomes
```
<span>Show all photos <i class="icon-size" aria-hidden="true"></i></span>
```

### Highlight molecule
No more spot images via classes. The icon can be changed in HTML markup via
the proper icon name in the `<i>` element.
An H3 title has been added.

### Call to action molecule
The Call to action molecule is not based on Highlight molecule anymore.
Instead there is new markup, including the option for an image (1:1).

### Table of contents molecule
The H2 heading changed to H4 and is visible. The heading text changed as well.
A class is added to the `<ul>` element to define 2 or 3 columns.


## [5.x and older]

* See full changelog at
  https://github.com/StadGent/fractal_styleguide_gent-base/blob/5.x/CHANGELOG.md


[6.x-dev unreleased]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/6.x...6.x-dev
[5.x and older]: https://github.com/StadGent/fractal_styleguide_gent-base/compare/5.x...6.x
