# Before you start

## Important

Before you start using this style guide in your project you should read this
section!

## Component variables and sections

Components use context to style themselves. If no context is applied by a
wrapping element it gets a base styling.

In the `components/00-settings/_vars.scss` file you will find a SASS map
`$themes` that defines all section types.
Atoms then base their styling on the section they are in.
