# Colors

## Primary and secondary colors.
Colors are defined in the `$colors` SASS map inside the `_colors.scss` partial.

## Tints of colors.
We provide a number of tints you can apply to your components in the `$tints`
SASS map. 

## Using a color in your SASS files.
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

