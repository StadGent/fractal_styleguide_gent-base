# Grid functionality

## Default classes

### Grid

There are three different breakpoints available (`desktop`, `tablet` and
`mobile`). Each breakpoint has 12 columns available. You can define your column
width per device via an default css class (`.col-device-width`). For example:
`.col-tablet-6`.

Example:

```html
<div class="row">
  <div class="col-mobile-12 col-tablet-8 col-desktop-4">.col-mobile-12
    .col-tablet-8 .col-desktop-</div>
  <div class="col-mobile-12 col-tablet-4">.col-mobile-12 .col-tablet-4</div>
</div>
```

Additionally there are also offset, pull and push classes available for specific
ordering purposes. (Examples: `.col-tablet-push-6`, `.col-tablet-pull-6` and
`.col-tablet-offset-6`)

### Responsive utilities

Use a single or combination of the available classes for toggling content across
viewport breakpoints.

- `.hidden-mobile`
- `.visible-mobile`
- `.hidden-tablet`
- `.visible-tablet`
- `.hidden-desktop`
- `.visible-desktop`
