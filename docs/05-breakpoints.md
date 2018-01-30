# Using breakpoints

We manage breakpoints with [breakpoint-sass](http://breakpoint-sass.com/). We
also develop mobile first, so in order to use a breakpoint we urge you to use
one of the built-in mixins. You can find these under `01-mixins/breakpoints/`.

## How to use a breakpoint mixin?

For example, if you want to hide the element `p` starting from the tablet
breakpoint `$bp-tablet-min` defined in the `_vars.scss` settings file you just
have to do the following.

```scss
p {
 @include tablet {
  display: none;
 }
}
```
