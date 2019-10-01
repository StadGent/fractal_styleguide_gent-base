# City of Ghent Style Guide

## Changelog

[The CHANGELOG is available through our GitHub repo.](https://github.com/StadGent/fractal_styleguide_gent-base/blob/develop/CHANGELOG.md)

## Roadmap

Refer to upcoming changes in our [README](https://github.com/StadGent/fractal_styleguide_gent-base/blob/develop/README.md)
under "Roadmap".

## SASS documentation (for contributors)

You can find the SASS docs <a href="{{ path '/sassdocs/index.html' }}" target="_blank">here</a>

## Questions?

You can join us on Slack at <a href="https://uxuighent.slack.com/" target="_blank">UX/UI Ghent</a>

## Implementing this style guide in your own project

This style guide aims to be technology independent. This means you should be
able to use it inside your project with any technology you want. It utilizes
SASS to style its components, so you will have to use that in your project.

Refer to the [README](https://github.com/StadGent/fractal_styleguide_gent-base/blob/develop/README.md)
to see how to integrate it in your custom project.

### TL;DR

1. Go to your project folder and run `npm init` or `yarn init` to create a
  package.json file.
  (if you already have a package.json file proceed to step 2).
2. Run `npm install gent_styleguide` or `yarn add gent_styleguide`.
  This will add the package to your package.json file.
  You will get a directory structure like this.

```nolang
.
├── node_modules
│   └── gent_styleguide
│   └── breakpoint-sass
└── package-lock.json
```

3. Make sure you add the following lines to your sass compiler (in your
  gulpfile.js)

```javascript
includePaths: [
  'node_modules/breakpoint-sass/stylesheets',
  'node_modules/susy/sass'
]
```

Example:

```javascript
gulp.task('styles:build', function() {
  gulp.src('components/**/*.s+(a|c)ss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        'node_modules/breakpoint-sass/stylesheets',
        'node_modules/susy/sass'
      ]
    })).on('error', sass.logError)
    .pipe(gulp.dest('./build/css/'))
});
```

Now you can add the `main.scss` or `main_cli.scss` file and run your own gulp
command to compile the SASS into a working CSS file.
