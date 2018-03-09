# Colors

## Primary and secondary colors

Colors are defined in the `$colors` SASS map inside the `_colors.scss` partial.

## Tints of colors

We provide a number of tints you can apply to your components in the `$tints`
SASS map.

## Using a color in your SASS files

When implementing a color for a component always use the `colors()` function
defined in the `_colors.scss` partial.

### Examples

```scss
.my-selector {
  color: color('cyan', 1);
}
```

This example calculates the color for `.my-selector` based on the base color
cyan and makes it 1 tint darker.

```scss
.my-selector {
  color: color('red', -31);
}
```

This example calculates the color for `.my-selector` based on the base color
red and makes it 3 tints lighter.

## Defining colors based on themes

We provide a themify system that allows you to "themify" your components. This
means they will change colors based on predefined sub themes.

To make a property themable use the mixin `theme()` in your component.

### Example

```scss
.my-selector {
  @include theme('color', 'color-primary', 'my-component-color');
}
```

This example makes use of one of the predefined colors in the default `$themes`
map. If you provide the key `my-component-color` which you defined yourself
in your component SASS partial in one of the sub themes in the `$themes` map
inside `_colors.scss` you can override it for that specific theme.
