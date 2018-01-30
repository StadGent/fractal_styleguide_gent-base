# Icons

You can add icons to the HTML markup with the following class:
`.icon-caret`

It is also possible to add icons through the SASS code instead of changing the
markup. This should be done like this:

You alwyas have some base css `%icon-base-css` you need to extend from.
Followed by the icon specific extend `%icon-caret`.

Example:

```scss
@extend %icon-base-css;
@extend %icon-caret;
```
