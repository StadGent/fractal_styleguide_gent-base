# Compiling

There are a few different operations available for this style guide.

## Gulp commands

```bash
gulp
gulp watch
```

These commands allow you to work on the styleguide by enabling the Fractal
server and watching for changes in SCSS and JS files. Validation of these files
is also done when editing and saving them.

```bash
gulp validate
```

This command validates all SCSS and JS files and reports back when syntax errors
have been found.

```bash
gulp compile
gulp compile:dev
```

These commands depending on the one you use execute a certain amount of tasks:

- It builds the Fractal theme with all CSS and JS code.
- It minifies the images used in the styleguide.
- (`compile only!`) Minification of the compiled CSS code.
- (`compile only!`) Minification of the JS code
- A plugin called CSSComb check for syntax order inside your SCSS files.

```bash
gulp build
```

This command combines the gulp validate and gulp compile commands. It is used to
build a final version of the styleguide, ready to be published to NPM.
