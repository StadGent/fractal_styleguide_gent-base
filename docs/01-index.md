# City of Ghent Style Guide

## Changelog

The CHANGELOG is available through our [GitHub repo](https://github.com/StadGent/fractal_styleguide_gent-base/)
or on our [changelog page]({{path '/docs/changelog'}})

## SASS documentation (for contributors)

You can find the SASS docs <a href="{{ path '/sassdocs/index.html' }}" target="_blank">here</a>

## Questions?

You can join us on Slack at <a href="https://uxuighent.slack.com/" target="_blank">UX/UI Ghent</a>

## Implementing this style guide in your own project

This style guide aims to be technology independent. This means you should be
able to use it inside your project with any technology you want. It utilizes
SASS to style its components, so you will have to use that in your project.

Example implementations in open source projects are:

* **Drupal**: [drupal_theme_gent-base](https://github.com/StadGent/drupal_theme_gent-base)
* **Vue**: [vue_site_lod-visualisation](https://github.com/StadGent/vue_site_lod-visualisation)
* **Nuxt**: [nuxt_site_verwerkingsregister](https://github.com/StadGent/nuxt_site_verwerkingsregister)

Have a look at other projects using this style guide on [github](https://github.com/StadGent/fractal_styleguide_gent-base/network/dependents?package_id=UGFja2FnZS0xODQ5OTYzOQ%3D%3D).

### TL;DR

1. Go to your project folder and run `npm init` or `yarn init` to create a
  package.json file.
  (if you already have a package.json file proceed to step 2).
2. Run `npm install gent_styleguide` or `yarn add gent_styleguide`.
3. Make sure you add the following lines to your sass compiler.

  ```javascript
  includePaths: [
    'node_modules/breakpoint-sass/stylesheets',
    'node_modules/susy/sass'
  ]
  ```

Now you can import the `main.scss` or `main_cli.scss` file,
set the `$styleguide-dir` variable and run your own gulp
command to compile the SASS into a working CSS file.

```scss
$styleguide-dir: '../../../node_modules/gent_styleguide/build/styleguide' !default;
@import "sass/main_cli";
```

## Running the style guide in development mode

```bash
# Install dependencies
yarn install

# Compile all components.
# This might take a while.
gulp compile

# Start the fractal site at localhost:3000
# and watch for changes.
gulp
```
