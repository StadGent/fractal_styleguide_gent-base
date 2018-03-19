'use strict';

const packageInfo = require('./package.json');
const packageVersion = packageInfo.version;

/*
 * Node core modules.
 */
const fs = require('fs');
const path = require('path');

/*
 * NPM based modules
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const sassLint = require('gulp-sass-lint');
const sassdoc = require('sassdoc');
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
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const fontName = 'gent-icons';
const runTimestamp = Math.round(Date.now() / 1000);

var _sassLint = (failOnError) => {
  var cmd = gulp.src('components/**/*.s+(a|c)ss')
    .pipe(sassGlob())
    .pipe(sassLint({
      configFile: './.sass-lint.yml'
    }))
    .pipe(sassLint.format());

  if (failOnError) {
    cmd.pipe(sassLint.failOnError());
  }

  return cmd;
};

/*
 * Require the Fractal module
 */
const fractal = require('@frctl/fractal').create();
const logger = fractal.cli.console; // keep a reference to the fractal CLI
// console utility

/**
 * Require additional fractal modules
 */
const twigAdapter = require('@frctl/twig');

/*
 * Give your project a title.
 */
fractal.set('project.title', 'City of Ghent Style Guide - Version ' + packageVersion);

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('default.preview', '@preview');
fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');

/*
 * Set custom statuses.
 */
fractal.components.set('statuses', {
  deprecated: {
    label: 'deprecated',
    description: 'Deprecated.',
    color: '#dd5e01'
  },
  alpha: {
    label: 'alpha',
    description: 'Alpha software can be unstable and could cause crashes or data loss.',
    color: '#551A8B'
  },
  beta: {
    label: 'beta',
    description: 'Work in progress. Implement with caution.',
    color: '#ff9233'
  },
  ready: {
    label: 'Ready',
    description: 'Ready to implement.',
    color: '#29cc29'
  }
});

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));
fractal.web.set('static.mount', '');
fractal.web.set('builder.dest', __dirname + '/build');

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

  var transformFilepath = (filepath) => `@import "${filepath}";`;

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
 *  SCSS linting
 *  Nested output style
 *  Sourcemaps (dev only!)
 *  Autoprefixer
 */
gulp.task('styles:dist', (callback) => {
  _sassLint(false)
    .pipe(sourcemaps.init())
    .pipe(sassdoc({
      dest: 'public/sassdocs',
      verbose: true,
      theme: 'flippant'
    }))
    .pipe(sass({
      outputStyle: 'nested',
      includePaths: [
        'node_modules/breakpoint-sass/stylesheets',
        'node_modules/susy/sass'
      ]
    })).on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css/'));
  callback();
});

/*
 *
 * Build settings for your styles.
 * Includes:
 *  Sass globbing
 *  SCSS linting
 *  Compresssed output style
 *  Autoprefixer
 *
 */
gulp.task('styles:build', ['styles:inject', 'fractal:build'], (callback) => {
  _sassLint(true)
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        'node_modules/breakpoint-sass/stylesheets',
        'node_modules/susy/sass'
      ]
    })).on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe(gulp.dest('./build/css/'))
    .pipe(cssnano())
    .pipe(gulp.dest('./build/css/'));
  callback();
});

/*
 *
 * Validate SCSS files.
 *
 */
gulp.task('styles:validate', (callback) => {
  _sassLint(true);
  callback();
});

/*
 *
 * Watch SCSS files For Changes.
 *
 */
gulp.task('styles:watch', (callback) => {
  gulp.watch('./components/**/*.scss', ['styles:dist']);
  callback();
});

/*
 *
 * Extract SCSS and their assets (like fonts) from the components folder.
 *
 */
gulp.task('styles:extract', [
  'fractal:build',
  'styles:build',
  'styles:dist'
], (callback) => {
  gulp.src('components/**/*.s+(a|c)ss')
    .pipe(gulp.dest('./build/styleguide/sass/'));
  callback();
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
gulp.task('js:validate', (callback) => {
  gulp.src('components/**/*.js')
    .pipe(eslint({
      configFile: './.eslintrc'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

  callback();
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
gulp.task('images:minify', [
  'fractal:build',
  'styles:build',
  'styles:dist'
], (cb) =>
  gulp.src([
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
    console.log('Error catched', err);
    done()
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
gulp.task('default', ['iconfont', 'fractal:start', 'styles:watch', 'js:watch']);
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
gulp.task('compile', [
  'iconfont',
  'fractal:build',
  'styles:build',
  'styles:dist',
  'styles:extract',
  'js:build',
  'js:dist',
  'images:minify'
], callback => callback());
gulp.task('compile:dev', [
  'iconfont',
  'fractal:build',
  'styles:dist',
  'js:dist',
  'images:minify'
]);

/**
 *
 * Create an iconfont based on SVG files.
 *
 * Usage:
 *  gulp iconfont
 *
 */
gulp.task('iconfont', () => {
  return gulp.src(['./public/styleguide/img/iconfont/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: './components/11-base/fonts/_icons_template.template',
      targetPath: '../../../components/11-base/fonts/_icons.scss',
      fontPath: '../styleguide/fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName, // required
      prependUnicode: true, // recommended option
      normalize: true,
      fontHeight: 1001,
      formats: ['ttf', 'eot', 'woff', 'svg', 'woff2'], // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp // recommended to get consistent builds when watching files
    }))
    .on('glyphs', function (glyphs, options) {
      // CSS templating, e.g.
      console.log(glyphs, options);
    })
    .pipe(gulp.dest('./public/styleguide/fonts/'));
});

gulp.task('sassdoc', () => {
  return gulp.src('./components/**/*.scss')
});

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
