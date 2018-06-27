# Styleguide Gent Base

This style guide contains the SASS library and needed assets to be able to style
a web application in the corporate identity for the city of Ghent..

[![NPM version](https://img.shields.io/npm/v/gent_styleguide.svg)](https://www.npmjs.com/package/gent_styleguide)
[![Downloads](https://img.shields.io/npm/dt/gent_styleguide.svg)](https://www.npmjs.com/package/gent_styleguide)
[![License](https://img.shields.io/github/license/StadGent/fractal_styleguide_gent-base.svg)](https://www.npmjs.com/package/gent_styleguide)

[![Build Status](https://travis-ci.org/StadGent/fractal_styleguide_gent-base.svg?branch=develop)](https://travis-ci.org/StadGent/fractal_styleguide_gent-base)
[![Maintainability](https://api.codeclimate.com/v1/badges/1aeba4d73f307d4583b9/maintainability)](https://codeclimate.com/github/StadGent/fractal_styleguide_gent-base/maintainability)

## Contributing to the style guide

### Pull requests

This repository is a read only version of the style guide part of our own
Drupal 8 base theme.

If you want to develop for this style guide you need to do it in
[this repository](https://github.com/StadGent/drupal_theme_gent-base)

> Please do not create any pull requests directly here.
> Instead use [this repo](https://github.com/StadGent/drupal_theme_gent-base)
> to create your pull requests.

To contribute to the style guide please refer to the
[contributing document](CONTRIBUTING.md)

## Roadmap

### Style guide version 3.x

* A major overhaul with an entirely new style for all components.
* Probably a full CSS grid implementation throughout all the style guide
  components.
* We will probably drop jQuery in favor for native Javascript or another.

## Licenses

If you are building something for the City of Ghent (Stad Gent) or Digipolis,
you can contact the web team at Digipolis or open an issue here to get the
necessary licenses thar are required for your project.
For more info on what licenses you need see below.

### License: Expressway font

The Expressway font is a paying font used by the style guide of the City of
Ghent. It needs to be included through Typekit.

### License: Light Gallery plugin for jQuery

It is important to note that anyone that wants to use this style guide or fork
this repository for commercial purposes, should [pay for a license](http://sachinchoolur.github.io/lightGallery/docs/license.html)!

## Folder structure

When installing this package, you will get a directory structure like this.

```nolang
.
├── CHANGELOG.md
├── LICENSE
├── README.md
├── build
│   └── styleguide
│       └── sass
└── package.json
```

The build directory contains all SASS source files and all asset files needed to
be able to style a web application in the corporate identity for the city of
Ghent..

## Implementing this style guide in your own project

This style guide aims to be technology independent. This means you should be
able to use it inside your project with any technology you want.
It utilizes SASS to style its components, so you will have to use that in your
project.

### Setup

After installing the style guide through `npm install gent_styleguide` you''ll
get a folder structure like this:

```nolang
.
├── node_modules
│   └── gent_styleguide
│   └── breakpoint-sass
├── package-lock.json
└── package.json
```

Now, to use the style guide SASS partials you just need to import them into your
main SASS file at the top so they get loaded before your own code.

```scss
@import 'node_modules/gent_styleguide/build/sass/00-settings/reset';
@import 'node_modules/gent_styleguide/build/sass/00-settings/vars';
@import 'node_modules/gent_styleguide/build/sass/01-mixins/**/*';
@import 'node_modules/gent_styleguide/build/sass/11-base/**/*';
@import 'node_modules/gent_styleguide/build/sass/21-atoms/**/*';
@import 'node_modules/gent_styleguide/build/sass/31-molecules/**/*';
@import 'node_modules/gent_styleguide/build/sass/41-organisms/**/*';
```

Note: we use this structure to allow you to override anything you wish in your
own custom project.
The way to do this, is to add the imports above to your main SASS file and add
imports of your own overriding files in between.

If you don't need to be able to change the molecules for your project and
instead just want to import the style guide
and use it as it is, you can use the `main.scss` file instead of using the
following approach.

Example:

```scss
@import 'node_modules/gent_styleguide/build/sass/00-settings/reset';
@import 'node_modules/gent_styleguide/build/sass/00-settings/vars';
@import '/sass/00-vars-overrides/**/*';
@import 'node_modules/gent_styleguide/build/sass/01-mixins/**/*';
@import '/sass/01-mixins-overrides/**/*';
@import 'node_modules/gent_styleguide/build/sass/11-base/**/*';
@import '/sass/11-base-overrides/**/*';
@import 'node_modules/gent_styleguide/build/sass/21-atoms/**/*';
@import '/sass/21-atom-overrides/**/*';
@import 'node_modules/gent_styleguide/build/sass/31-molecules/**/*';
@import '/sass/31-molecule-overrides/**/*';
@import 'node_modules/gent_styleguide/build/sass/41-organisms/**/*';
@import '/sass/41-organism-overrides/**/*';
```

Note: When using the style guide you will need to add a few dependencies as an
includePath inside your gulpfile.js

Example:

```javascript
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        'node_modules/breakpoint-sass/stylesheets',
        'node_modules/susy/sass'
      ]
    })).on('error', sass.logError)
```

This includePaths path may vary depending on your setup!

### Fonts

You need to make sure the Expressway font is included in your project somehow.
This would be done by including the Typescript script in your project and
requesting a license / Typekit kit from the web team at Digipolis.

Example:

```javascript
<script>
  (function(d) {
    var config = {
          kitId: 'kgt4wbp',
          scriptTimeout: 3000,
          async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+"wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+="wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
</script>
```

So in this example you would need to change the `kitId` to the ID you got from
the web team of Digipolis.

## Third party support

### AngularJS CLI support (no SASS globbing)

We provide a `main_cli.scss` file that is essentially the same as `main.scss`,
but includes all SASS partials the style guide needs without SASS globbing.

#### IMPORTANT

We recommend using the `main_cli.scss` file only when you need to support
Angular CLI.
