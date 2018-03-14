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

The `$themes` map exists out of multiple keys that define the themes for the
style guide. Based on these maps you have to require some basic colors such 
as `color-primary` and `color-secondary`. See the `$themes` map inside
`_colors.scss` for more information.
These form the basic of the theming system. Through a syntax convention you 
can theme the colors of your components:

```scss
  @include theme('background', 'color-primary--lighten-4', 'field-background');
```

gets transformed by the system to:

```scss
  background: #some-hex-value;
```

It does this by searching for the key `color-primary` in the `$themes` map.
Everything just before the double dashes gets used as the key value.

It then checks the part after the double dashes `--` and strips out `lighten` 
or `darken` (everything before the dash `-`). Based on that result it applies
the `color()` mixin with the correct parameters.
