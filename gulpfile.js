/* eslint-disable no-console */
'use strict';

/*
* Node core modules.
*/
const fs = require('fs');

/*
* NPM based modules
*/
const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const sassLint = require('gulp-sass-lint');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const eslint = require('gulp-eslint');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const minify = require('gulp-minify');
const npm = require('npm');
const bump = require('gulp-bump');
const inject = require('gulp-inject');
const yargs = require('yargs');
const combiner = require('stream-combiner2');
const cache = require('gulp-cached');
// require our configurated fractal module
const fractal = require('./fractal');
// keep a reference to the fractal CLI console utility
const logger = fractal.cli.console;

/*
* Get the sassFiles.
*/
const _sassFiles = () => {
  return gulp.src('components/**/*.s+(a|c)ss')
    .pipe(sassGlob());
};

/*
* Return a sass Compile stream
*/
const _sassCompile = () => {
  const combined = combiner.obj([
    sass({
      outputStyle: 'nested',
      includePaths: [
        'node_modules/breakpoint-sass/stylesheets',
        'node_modules/susy/sass'
      ]
    }),
    autoprefixer({
      browsers: ['last 5 versions']
    })
  ]);
  combined.on('error', sass.logError);
  return combined;
};

/*
 *
 * Inject SASS partial paths as imports in main_cli.scss.
 *
 */
gulp.task('styles:inject', () => {
  const injectSettingsFiles = gulp.src('components/00-settings/**/*.s+(a|c)ss', {read: false});
  const injectMixinsFiles = gulp.src('components/01-mixins/**/*.s+(a|c)ss', {read: false});
  const injectBaseFiles = gulp.src('components/11-base/**/*.s+(a|c)ss', {read: false});
  const injectAtomsFiles = gulp.src('components/21-atoms/**/*.s+(a|c)ss', {read: false});
  const injectMoleculesFiles = gulp.src('components/31-molecules/**/*.s+(a|c)ss', {read: false});
  const injectOrganismsFiles = gulp.src('components/41-organisms/**/*.s+(a|c)ss', {read: false});

  const transformFilepath = (filepath) => `@import "${filepath}";`;

  const injectSettingsOptions = {
    transform: transformFilepath,
    starttag: '// inject:settings',
    endtag: '// endinject',
    addRootSlash: false,
    relative: true
  };
  const injectMixinsOptions = {
    transform: transformFilepath,
    starttag: '// inject:mixins',
    endtag: '// endinject',
    addRootSlash: false,
    relative: true
  };
  const injectBaseOptions = {
    transform: transformFilepath,
    starttag: '// inject:base',
    endtag: '// endinject',
    addRootSlash: false,
    relative: true
  };
  const injectAtomsOptions = {
    transform: transformFilepath,
    starttag: '// inject:atoms',
    endtag: '// endinject',
    addRootSlash: false,
    relative: true
  };
  const injectMoleculesOptions = {
    transform: transformFilepath,
    starttag: '// inject:molecules',
    endtag: '// endinject',
    addRootSlash: false,
    relative: true
  };
  const injectOrganismsOptions = {
    transform: transformFilepath,
    starttag: '// inject:organisms',
    endtag: '// endinject',
    addRootSlash: false,
    relative: true
  };

  return gulp.src('components/main_cli.scss')
    .pipe(inject(injectSettingsFiles, injectSettingsOptions))
    .pipe(inject(injectMixinsFiles, injectMixinsOptions))
    .pipe(inject(injectBaseFiles, injectBaseOptions))
    .pipe(inject(injectAtomsFiles, injectAtomsOptions))
    .pipe(inject(injectMoleculesFiles, injectMoleculesOptions))
    .pipe(inject(injectOrganismsFiles, injectOrganismsOptions))
    .pipe(gulp.dest('components/'));
});

/*
 *
 * Development settings of your styles.
 * Includes:
 *  Sass globbing
 *  Nested output style
 *  Sourcemaps (dev only!)
 *  Autoprefixer
 */
gulp.task('styles:dist', () => {
  return _sassFiles()
    .pipe(sourcemaps.init())
    .pipe(_sassCompile())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css/'));
});

/*
 *
 * Build settings for your styles.
 * Includes:
 *  Sass globbing
 *  Sass
 *  Autoprefixer
 *  CSS nano
 *
 */
gulp.task('styles:build', () => {
  return _sassFiles()
    .pipe(_sassCompile())
    .pipe(cssnano())
    .pipe(gulp.dest('./build/css/'));
});

/*
 *
 * Validate SCSS files.
 * Includes:
 *  Sass globbing
 *  SassLint
 *
 */
gulp.task('styles:validate', () => {
  return _sassFiles()
    .pipe(cache('validate'))
    .pipe(sassLint({
      configFile: './.sass-lint.yml'
    }))
    .pipe(sassLint.format());
});

/*
 *
 * Watch SCSS files For Changes.
 * Includes:
 *  Styles:validate
 *  Styles:dist
 *
 */
gulp.task('styles:watch', () => {
  return gulp.watch('./components/**/*.scss', [
    'styles:validate',
    'styles:dist'
  ]);
});

/*
 *
 * Extract SCSS from the components folder.
 *
 */
gulp.task('styles:extract', () => {
  return _sassFiles()
    .pipe(gulp.dest('./build/styleguide/sass/'));
});

/*
 *
 * Copy JS files during development.
 *
 */
gulp.task('js:dist', ['styles:dist'], (callback) => {
  gulp.src('components/**/*.js')
    .pipe(rename({
      dirname: '',
      suffix: '-min'
    }))
    .pipe(gulp.dest('./public/styleguide/js/'));
  callback();
});

/*
 *
 * Copy JS files during Fractal build.
 *
 */
gulp.task('js:build', ['fractal:build'], (callback) => {
  gulp.src('components/**/*.js')
    .pipe(rename({dirname: ''}))
    .pipe(minify({
      noSource: true
    }))
    .pipe(gulp.dest('./build/styleguide/js/'));
  callback();
});

/*
 *
 * Validate JS files.
 *
 */
gulp.task('js:validate', () => {
  return gulp.src('components/**/*.js')
    .pipe(eslint({
      configFile: './.eslintrc'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

/*
 *
 * Watch JS files For Changes.
 *
 */
gulp.task('js:watch', (callback) => {
  gulp.watch('./components/**/*.js', ['js:validate', 'js:dist']);
  callback();
});

/*
 *
 * Minify images.
 *
 */
gulp.task('images:minify',
  [
    'fractal:build',
    'styles:build',
    'styles:dist'
  ], (cb) => gulp.src([
    'components/**/*.png',
    'components/**/*.jpg',
    'components/**/*.gif',
    'components/**/*.jpeg',
    'components/**/*.svg'
  ])
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    })).pipe(gulp.dest('build/styleguide/sass'))
);

/*
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it will
 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
 * Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */
gulp.task('fractal:start', () => {
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  }).catch(() => logger.error('Fractal server failed to start'));
});

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */
gulp.task('fractal:build', () => {
  const builder = fractal.web.builder();
  // builder.on('progress', (completed, total) => logger.update(`Exported
  // ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  }).catch(() => logger.error('Fractal server failed to start'));
});

/*
 * Publish to the NPM public registry.
 */
gulp.task('publish:npm', (callback) => {

  const argv = yargs
    .options({
      username: {
        demand: true,
        alias: 'u',
        describe: 'NPM user name',
        string: true
      }
    })
    .options({
      password: {
        demand: true,
        alias: 'p',
        describe: 'NPM password',
        string: true
      }
    })
    .options({
      email: {
        demand: true,
        alias: 'e',
        describe: 'E-mail',
        string: true
      }
    })
    .help()
    .alias('help', 'h')
    .argv;

  const username = argv.username;
  const password = argv.password;
  const email = argv.email;

  const uri = 'http://registry.npmjs.org/';

  npm.load(null, (loadError) => {
    if (loadError) {
      return callback(loadError);
    }
    const auth = {
      username: username,
      password: password,
      email: email,
      alwaysAuth: true
    };
    const addUserParams = {
      auth: auth
    };

    npm.registry.adduser(uri, addUserParams, (addUserError, data, raw, res) => {
      if (addUserError) {
        return callback(addUserError);
      }
      let metadata = require('./package.json');
      metadata = JSON.parse(JSON.stringify(metadata));
      npm.commands.pack([], (packError) => { // eslint-disable-line max-nested-callbacks
        if (packError) {
          return callback(packError);
        }
        const fileName = metadata.name + '-' + metadata.version + '.tgz';
        const bodyPath = require.resolve('./' + fileName);
        const body = fs.createReadStream(bodyPath);
        const publishParams = {
          metadata: metadata,
          access: 'public',
          body: body,
          auth: auth
        };
        npm.registry.publish(uri, publishParams, (publishError, resp) => { // eslint-disable-line max-nested-callbacks
          if (publishError) {
            return callback(publishError);
          }
          callback(`Publish succesfull: ${JSON.stringify(resp, undefined, 2)}`); // eslint-disable-line no-undefined
          return callback();
        });
      });
    });
  });
});

/*
 * Bump the version number of the package.
 */
gulp.task('bump', () => {
  const argv = yargs
    .options({
      type: {
        demand: true,
        alias: 't',
        describe: 'NPM user name',
        string: true,
        choices: ['prerelease', 'patch', 'minor', 'major']
      }
    })
    .help()
    .alias('help', 'h')
    .argv;

  // Change version number of package.json file.
  gulp.src('./package.json')
    .pipe(bump({
      type: argv.type
    }))
    .pipe(gulp.dest('./'));
});

/*
 * Test the style guide components for accessibility issues.
 *   - wcag2a
 *   - wcag2aa
 */
gulp.task('axe', function (done) {
  try {
    // gulp-axe-webdriver is an optional dependency
    // we need to catch a require failure
    const axe = require('gulp-axe-webdriveer');
    const options = {
      saveOutputIn: 'allHtml.json',
      browser: 'phantomjs',
      urls: ['build/components/preview/*.html'],
      showOnlyViolations: true,
      a11yCheckOptions: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa']
        }
      }
    };
    // not input atoms and not pages
    const notInputNotPages = () => {
      return new Promise((resolve, reject) => {

        let components = Object.assign({}, options);
        components.saveOutputIn = 'components.json';
        components.urls = ['build/components/preview/!(input*|*page).html'];
        components.a11yCheckOptions.rules = {bypass: {enabled: false}};

        axe(components, () => {resolve();});
      });
    };
    // input atoms
    const input = () => {
      return new Promise((resolve, reject) => {

        let input = Object.assign({}, options);
        input.saveOutputIn = 'inputAtoms.json';
        input.urls = ['build/components/preview/input*.html'];
        input.a11yCheckOptions.rules = {
          label: {enabled: false},
          bypass: {enabled: false}
        };

        axe(input, () => {resolve();});
      });
    };
    // pages
    const pages = () => {
      return new Promise((resolve, reject) => {

        let pages = Object.assign({}, options);
        pages.saveOutputIn = 'pages.json';
        pages.urls = ['build/components/preview/*page.html'];

        axe(pages, () => {resolve();});
      });
    };

    return Promise.all([input(), notInputNotPages(), pages()]);
  }
  catch (err) {
    console.log('Error catched', err); // eslint-disable-line no-console
    done();
  }
});

/*
 *
 * Default tasks:
 * Usage:
 *  gulp
 *  gulp watch
 *
 * Used for local development to compile and validate after every change.
 *
 */
gulp.task('default', ['fractal:start', 'styles:watch', 'js:watch']);
gulp.task('watch', ['default']);

/*
 *
 * Validate task:
 * Usage:
 *  gulp validate
 *
 *  Used to only validate the SCSS and JS code.
 *
 */
gulp.task('validate', [
  'styles:validate',
  'js:validate'
], callback => callback());

/*
 *
 * Compile task:
 * Usage:
 *  gulp compile
 *  gulp compile:dev
 *  Add sourcemaps to the CSS files.
 *
 *  Used to compile production ready SCSS and JS code.
 *
 */
// todo make sure fractal:build is executed first
// or it overrides the build dir
gulp.task('compile', [
  'fractal:build',
  'styles:build',
  'styles:dist',
  'styles:extract',
  'js:build',
  'js:dist',
  'images:minify'
], callback => callback());

gulp.task('compile:dev', [
  'fractal:build',
  'styles:dist',
  'js:dist',
  'images:minify'
]);

/*
 *
 * Build task:
 * Usage:
 *  gulp build
 *
 *  Used to validate and build production ready code.
 *
 */
gulp.task('build', ['validate', 'compile'], () => {
  return gulp.src('components/**/*.s+(a|c)ss')
    .pipe(gulp.dest('./build/styleguide/sass/'));
});

/*
 *
 * Publish task:
 * Usage:
 *  gulp publish
 *
 *  Used to publish to the public NPM registry.
 *
 */
gulp.task('publish', ['publish:npm']);
