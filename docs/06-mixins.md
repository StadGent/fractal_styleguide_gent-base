This styleguide uses a lot of mixins throughout its code.
We encourage you to use these where necessary.

# Overview of mixins

- **[Breakpoint mixins](#breakpoint-mixins)**:
  - tablet();
  - tablet-only();
  - desktop();

- **[General mixins](#general-mixins)**:
  - clearfix();
  - color-element-states($color, $color-hover, $property);
  - triangle($direction, $size-h, $size-v, $color);

- **[Themify mixins](#themify-mixins)**:
  - themify($themes);

- **[Grid mixins](#grid-mixins)**:
  - make-row($gutter);
  - make-mobile-column($columns, $gutter);
  - make-tablet-column($columns, $gutter: $gutter-width);
  - make-desktop-column($columns, $gutter: $gutter-width);

# Breakpoint mixins

## tablet()

### Description

Tablet breakpoint (see $bp-tablet defined in _vars.scss).
This asumes a min-width as defined by the variable.

### Implementation

```scss
@mixin tablet {
  @include breakpoint($bp-tablet) {
    @content;
  }
}
```

### Usage

```scss
@include tablet { ... }
```

***

## tablet-only()

### Description

Tablet-only breakpoint (see $bp-tablet defined in _vars.scss).
This asumes a min-width as defined by the $bp-tablet variable and a max-width as
defined by the $bp-desktop variable.

### Implementation

```scss
@mixin tablet-only {
  @include breakpoint($bp-tablet $bp-desktop) {
    @content;
  }
}
```

### Usage

```scss
@include tablet-only { ... }
```

***

## tablet-only()

### Description

Desktop breakpoint (see $bp-tablet defined in _vars.scss).
This asumes a min-width as defined by the variable.

### Implementation

```scss
@mixin desktop {
  @include breakpoint($bp-desktop) {
    @content;
  }
}
```

### Usage

```scss
@include desktop { ... }
```

# General mixins

## clearfix()

### Description

For modern browsers

1. The space content is one way to avoid an Opera bug when the
   contenteditable attribute is included anywhere else in the document.
   Otherwise it causes space to appear at the top and bottom of elements
   that are clearfixed.
2. The use of `table` rather than `block` is only necessary if using
   `:before` to contain the top-margins of child elements.

Source: <http://nicolasgallagher.com/micro-clearfix-hack/>

### Implementation

```scss
@mixin clearfix() {
  &::before,
  &::after {
    display: table; // 2
    content: ' '; // 1
  }

  &::after {
    clear: both;
  }
}
```

### Usage

```scss
@include clearfix();
```

***

## color-element-states($color, $color-hover, $property)

### Description

Adds active, visited, hover and focus states to elements like links or buttons etc...

### Implementation

```scss
@mixin color-element-states($color, $color-hover, $property: "color") {
  #{$property}: $color;

  &:active,
  &:visited {
    @content;
  }

  &:hover,
  &:focus {
    #{$property}: $color-hover;
  }
}
```

### Usage

```scss
  @include color-element-states($link-color, $link-color-hover);
```

***

## triangle($direction, $size-h, $size-v, $color)

### Description

Sass CSS triangle mixin, create any kind of triangles with ease
Forked from <https://github.com/juanbrujo/triangle-mixin.less>

### Implementation

```scss
@mixin triangle($direction, $size-h, $size-v, $color) {
  display: block;
  width: 0;
  height: 0;
  transform: scale(.9999);
  border-style: solid;
  content: '';

  @if $direction == top {
    border-width: 0 $size-v $size-h;
    border-color: transparent transparent $color;
  }
  @if $direction == bottom {
    border-width: $size-v $size-h 0 $size-v;
    border-color: $color transparent transparent;
  }
  @if $direction == left {
    border-width: $size-v $size-h $size-v 0;
    border-color: transparent $color transparent transparent;
  }
  @if $direction == right {
    border-width: $size-v 0 $size-v $size-h;
    border-color: transparent transparent transparent $color;
  }
  @if $direction == topright {
    border-width: 0 $size-h $size-v 0;
    border-color: transparent $color transparent transparent;
  }
  @if $direction == bottomright {
    border-width: 0 0 $size-h $size-v;
    border-color: transparent transparent $color;
  }
  @if $direction == bottomleft {
    border-width: $size-h 0 0 $size-v;
    border-color: transparent transparent transparent $color;
  }
  @if $direction == topleft {
    border-width: $size-h $size-v 0 0;
    border-color: $color transparent transparent;
  }
}
```

### Usage

```scss
@include triangle(bottomright,$square,$square,$color);
```

***

# Themify mixins

## themify($themes: $themes)

### Description

This mixin is used throughout components in the style guide to "themify" them.
This means that when we use the themify mixin on a color, this color can be
different based on the section the component is in.

It uses a SASS map `$themes` to loop over the different sections defined in `_vars.scss`.

### Implementation

```scss
@mixin themify($themes: $themes) {
  @each $theme, $colors in $themes {
    @include themify-map($colors);

    // Apply the default section as default color scheme if there is no section
    // defined in the DOM.
    @if $theme == "default" {
      @content;
    }

    .section--#{$theme} &,
    *[class*="section--"] .section--#{$theme} & {
      @content;
    }
  }
}
```

### Usage

```scss
@include themify(
  color: $color-blue;
);
```

***

# Grid mixins

## make-row($gutter)

### Description

This mixins is used to create a Bootstrap style row which adds
negative margins to the div.

### Implementation

```scss
@mixin make-row($gutter: $gutter-width) {
  @include clearfix();
  margin-right: -($gutter / 2);
  margin-left: -($gutter / 2);
}
```

### Usage

```scss
@include make-row;
```

***

## make-mobile-column($columns, $gutter)

### Description

Create a column applied to mobile layouts.

### Implementation

```scss
@mixin make-mobile-column($columns, $gutter: $gutter-width) {
  position: relative;
  width: percentage(($columns / $grid-columns));
  min-height: 1px;
  padding-right: ($gutter / 2);
  padding-left:  ($gutter / 2);
  float: left;
}
```

### Usage

```scss
@include make-mobile-column(6);
```

## make-tablet-column($columns, $gutter)

### Description

Create a column applied to tablet layouts.

### Implementation

```scss
@mixin make-tablet-column($columns, $gutter: $gutter-width) {
  position: relative;
  min-height: 1px;
  padding-right: ($gutter / 2);
  padding-left:  ($gutter / 2);

  @media (min-width: $bp-tablet) {
    width: percentage(($columns / $grid-columns));
    float: left;
  }
}
```

### Usage

```scss
@include make-tablet-column(6);
```

## make-desktop-column($columns, $gutter)

### Description

Create a column applied to desktop layouts.

### Implementation

```scss
@mixin make-desktop-column($columns, $gutter: $gutter-width) {
  position: relative;
  min-height: 1px;
  padding-right: ($gutter / 2);
  padding-left:  ($gutter / 2);

  @media (min-width: $bp-desktop) {
    width: percentage(($columns / $grid-columns));
    float: left;
  }
}
```

### Usage

```scss
@include make-desktop-column(6);
```
