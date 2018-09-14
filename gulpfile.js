/** eslint-disable no-console */
'use strict';

/**
 * Node core modules.
 */
const fs = require('fs');

/**
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
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const eslint = require('gulp-eslint');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const uglify = require('gulp-uglify');
const npm = require('npm');
const bump = require('gulp-bump');
const inject = require('gulp-inject');
const yargs = require('yargs');
const combiner = require('stream-combiner2');
const cache = require('gulp-cached');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const gulpif = require('gulp-if');
const babel = require('gulp-babel');
const Color = require('color');
const RecolorSvg = require('gulp-recolor-svg');
const realFavicon = require('gulp-real-favicon');
// require our configurated fractal module.
const fractal = require('./fractal');

let build = false;

/**
 * Get the sassFiles.
 */
const _sassFiles = () => {
  return gulp.src(['components/**/*.s+(a|c)ss', '!components/main_cli.scss'])
    .pipe(sassGlob());
};

/**
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
      browsers: ['last 5 versions'],
      grid: true
    })
  ]);
  combined.on('error', sass.logError);
  return combined;
};

/**
 * Get color map.
 */
const _getColors = () => {
  const colors = require('./components/11-base/colors/colors.config.js');
  if (!colors) {
    return [];
  }

  return colors.context.secondary;
};

/**
 * Get the spotimages map.
 */
const _spotimagesMap = () => {
  // require colors
  const colormap = _getColors();
  if (!colormap) {
    return [];
  }

  let map = [{
    suffix: '--cyan',
    colors: [Color('#009DE0')]
  }];

  for (const cs in colormap) {
    if (colormap.hasOwnProperty(cs)) {
      map.push({
        suffix: '--' + cs,
        colors: [Color(colormap[cs])]
      });
    }
  }

  return map;
};

/**
 * Inject SASS partial paths as imports in main_cli.scss.
 */
gulp.task('styles:inject', () => {
  const injectSettingsFiles = gulp.src('components/00-settings/**/*.s+(a|c)ss', {read: false});
  const injectMixinsFiles = gulp.src('components/00-mixins/**/*.s+(a|c)ss', {read: false});
  const injectBaseFiles = gulp.src('components/11-base/**/*.s+(a|c)ss', {read: false});
  const injectAtomsFiles = gulp.src('components/21-atoms/**/*.s+(a|c)ss', {read: false});
  const injectMoleculesFiles = gulp.src('components/31-molecules/**/*.s+(a|c)ss', {read: false});
  const injectOrganismsFiles = gulp.src('components/41-organisms/**/*.s+(a|c)ss', {read: false});
  const injectLayoutsFiles = gulp.src('components/61-layouts/**/*.s+(a|c)ss', {read: false});

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
  const injectLayoutsOptions = {
    transform: transformFilepath,
    starttag: '// inject:layouts',
    endtag: '// endinject',
    addRootSlash: false,
    relative: true
  };

  return gulp.src('components/main_cli.scss', {allowEmpty: true})
    .pipe(inject(injectSettingsFiles, injectSettingsOptions))
    .pipe(inject(injectMixinsFiles, injectMixinsOptions))
    .pipe(inject(injectBaseFiles, injectBaseOptions))
    .pipe(inject(injectAtomsFiles, injectAtomsOptions))
    .pipe(inject(injectMoleculesFiles, injectMoleculesOptions))
    .pipe(inject(injectOrganismsFiles, injectOrganismsOptions))
    .pipe(inject(injectLayoutsFiles, injectLayoutsOptions))
    .pipe(gulp.dest('build/styleguide/sass/'));
});

/**
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

/**
 * Build settings for your styles.
 * Includes:
 *  Sass globbing
 *  Sass
 *  Autoprefixer
 *  CSS nano
 */
gulp.task('styles:build', () => {
  return _sassFiles()
    .pipe(_sassCompile())
    .pipe(cssnano())
    .pipe(gulp.dest('build/css/'));
});

/**
 * Validate SCSS files.
 * Includes:
 *  Sass globbing
 *  SassLint
 */
gulp.task('styles:validate', () => {
  return _sassFiles()
    .pipe(cache('styles:validate'))
    .pipe(sassLint({
      configFile: './.sass-lint.yml'
    }))
    .pipe(gulpif(build, sassLint.failOnError()))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

/**
 * Watch SCSS files For Changes.
 * Includes:
 *  Styles:validate
 *  Styles:dist
 */
gulp.task('styles:watch', () => {
  return gulp.watch('./components/**/*.scss', gulp.series(gulp.parallel(
    'styles:validate',
    'styles:dist',
    'sassdoc'
  )));
});

/**
 * Extract SCSS from the components folder.
 */
gulp.task('styles:extract', () => {
  return gulp.src(['components/**/*.s+(a|c)ss', '!components/main_cli.scss', '!components/styleguide.scss'])
    .pipe(gulp.dest('./build/styleguide/sass/'));
});

/**
 * Copy JS files during development.
 */
gulp.task('js:dist', () => {
  return gulp.src(['components/**/*.js', '!components/**/*.config.js'])
    .pipe(rename({
      dirname: '',
      suffix: '-min'
    }))
    .pipe(babel({
      presets: ['env', 'es2015']
    }))
    .pipe(gulp.dest('./public/styleguide/js/'));
});

/**
 * Copy JS files during Fractal build.
 * Inlcudes:
 *  minify
 */
gulp.task('js:build', gulp.parallel(
  function jsExtractMinify() {
    return gulp.src(['components/**/*.js', '!components/**/*.config.js'])
      .pipe(rename({
        dirname: '',
        suffix: '-min'
      }))
      .pipe(babel({
        presets: ['env', 'es2015']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('./build/styleguide/js/'));
  },
  function jsExtract() {
    return gulp.src(['components/**/*.js', '!components/**/*.config.js'])
      .pipe(rename({
        dirname: ''
      }))
      .pipe(gulp.dest('./build/styleguide/js/'));
  }));

/**
 * Validate JS files.
 */
gulp.task('js:validate', () => {
  return gulp.src('components/**/*.js')
    .pipe(cache('js:validate'))
    .pipe(eslint({
      configFile: './.eslintrc'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

/**
 * Watch JS files For Changes.
 */
gulp.task('js:watch', () => {
  return gulp.watch('./components/**/*.js', gulp.parallel('js:validate', 'js:dist'));
});

// Todo where do we store images, what is their destination?
// this does not seem correct
/**
 * Minify images.
 */
gulp.task('images:minify', () => {
  return gulp.src([
    'components/**/*.png',
    'components/**/*.jpg',
    'components/**/*.gif',
    'components/**/*.jpeg',
    'components/**/*.svg'
  ])
    .pipe(imagemin([pngquant()], {verbose: true}))
    .pipe(gulp.dest('build/styleguide/sass'));
});

/**
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it
 * will use BrowserSync to watch for changes to the filesystem and refresh the
 * browser automatically. Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */
gulp.task('fractal:start', () => {
  const server = fractal.web.server({
    sync: true
  });
  const logger = fractal.cli.console;
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  }).catch(() => logger.error('Fractal server failed to start'));
});

/**
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
  const logger = fractal.cli.console;
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  }).catch(() => logger.error('Fractal server failed to start'));
});

/**
 * Publish to the NPM public registry.
 */
gulp.task('publish:npm', (callback) => {
  let metadata = require('./package.json');
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
          return callback(`Publish succesfull: ${JSON.stringify(resp, undefined, 2)}`); // eslint-disable-line no-undefined
        });
      });
    });
  });
});

/**
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
  return gulp.src('./package.json')
    .pipe(bump({
      type: argv.type
    }))
    .pipe(gulp.dest('./'));
});

/**
 * Test the style guide components for accessibility issues.
 *   - wcag2a
 *   - wcag2aa
 */
gulp.task('axe', function (done) {
  try {
    // gulp-axe-webdriver is an optional dependency
    // we need to catch a require failure
    const axe = require('gulp-axe-webdriver');
    const options = {
      saveOutputIn: 'allHtml.json',
      urls: ['build/components/preview/*.html'],
      showOnlyViolations: true,
      verbose: true,
      headless: true,
      a11yCheckOptions: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa']
        },
        // Todo: remove after axe-core issue #262 fix.
        rules: {
          'definition-list': {enabled: false},
          'dlitem': {enabled: false}
        },
        iframes: false
      }
    };
    // not input atoms and not pages
    const notInputNotPages = () => {
      return new Promise((resolve, reject) => {

        let components = Object.assign({}, options);
        components.saveOutputIn = 'components.json';
        components.urls = ['build/components/preview/!(input*|*page|teaser*|preview*).html'];
        components.a11yCheckOptions = Object.assign({}, options.a11yCheckOptions);
        components.a11yCheckOptions.rules.bypass = {enabled: false};

        axe(components).then(resolve).catch(reject);
      });
    };
    // input atoms
    const input = () => {
      return new Promise((resolve, reject) => {

        let input = Object.assign({}, options);
        input.saveOutputIn = 'inputAtoms.json';
        input.urls = ['build/components/preview/input*.html'];
        input.a11yCheckOptions = Object.assign({}, options.a11yCheckOptions);
        input.a11yCheckOptions.rules.label = {enabled: false};
        input.a11yCheckOptions.rules.bypass = {enabled: false};

        axe(input).then(resolve).catch(reject);
      });
    };
    // pages
    const pages = () => {
      return new Promise((resolve, reject) => {

        let pages = Object.assign({}, options);
        pages.saveOutputIn = 'pages.json';
        pages.urls = ['build/components/preview/*page*.html'];
        pages.a11yCheckOptions = Object.assign({}, options.a11yCheckOptions);

        axe(pages).then(resolve).catch(reject);
      });
    };

    Promise.all([input(), notInputNotPages(), pages()])
      .then(()=>done())
      .catch(err=>{
        console.log('Error catched', err); // eslint-disable-line no-console
        done();
      });
  }
  catch (err) {
    console.log('Error catched', err); // eslint-disable-line no-console
    done();
  }
});

/**
 * Create an iconfont based on SVG files.
 *
 * Usage:
 *  gulp iconfont
 */
gulp.task('iconfont', () => {
  const fontName = 'gent-icons';
  const runTimestamp = Math.round(Date.now() / 1000);

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
      formats: ['ttf', 'eot', 'woff', 'svg', 'woff2'], // default, 'woff2' and
      // 'svg' are available
      timestamp: runTimestamp // recommended to get consistent builds when
      // watching files
    }))
    .on('glyphs', function (glyphs, options) {
      // CSS templating, e.g.
      // console.log(glyphs, options);
    })
    .pipe(gulp.dest('./public/styleguide/fonts/'));
});

/**
 * Create spotiamges.
 *
 * Usage:
 *   gulp spotimages
 */
gulp.task('spotimages', () => {
  return gulp.src('./public/styleguide/img/svg/*.svg')
    .pipe(RecolorSvg.GenerateVariants(
      [RecolorSvg.ColorMatcher(Color('#009DE0'))],
      _spotimagesMap()
    ))
    .pipe(gulp.dest('./public/styleguide/img/svg/build'));
});

/**
 * Create base favicons.
 *
 * Usage:
 *   gulp favicon:prebuild
 */
gulp.task('favicon:prebuild', () => {
  return gulp.src('./public/styleguide/img/favicon/favicon.svg')
    .pipe(RecolorSvg.GenerateVariants(
      [RecolorSvg.ColorMatcher(Color('#009DE0'))],
      _spotimagesMap()
    ))
    .pipe(gulp.dest('./public/styleguide/img/favicon/build'));
});

/**
 * Build favicons viarants for multpile OS.
 *
 * Usage:
 *   gulp favicon:build
 */
gulp.task('favicon:build', (done) => {
  const colormap = _getColors();
  if (!colormap) {
    return;
  }

  let map = [{
    folder: 'cyan',
    color: '#009DE0'
  }];

  for (const cs in colormap) {
    if (colormap.hasOwnProperty(cs)) {
      map.push({
        folder: cs,
        color: colormap[cs]
      });
    }
  }

  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      realFavicon.generateFavicon({
        masterPicture: './public/styleguide/img/favicon/build/favicon--' + map[key].folder + '.svg',
        dest: './public/styleguide/img/favicon/build/' + map[key].folder + '/',
        iconsPath: '/',
        design: {
          ios: {
            pictureAspect: 'backgroundAndMargin',
            backgroundColor: map[key].color,
            margin: '14%',
            assets: {
              ios6AndPriorIcons: false,
              ios7AndLaterIcons: false,
              precomposedIcons: false,
              declareOnlyDefaultIcon: true
            }
          },
          desktopBrowser: {},
          windows: {
            masterPicture: './public/styleguide/img/favicon/favicon-blank.svg',
            pictureAspect: 'noChange',
            backgroundColor: map[key].color,
            onConflict: 'override',
            assets: {
              windows80Ie10Tile: false,
              windows10Ie11EdgeTiles: {
                small: true,
                medium: true,
                big: true,
                rectangle: false
              }
            }
          },
          androidChrome: {
            pictureAspect: 'backgroundAndMargin',
            margin: '8%',
            backgroundColor: map[key].color,
            themeColor: map[key].color,
            manifest: {
              display: 'standalone',
              orientation: 'notSet',
              onConflict: 'override',
              declared: true
            },
            assets: {
              legacyIcon: false,
              lowResolutionIcons: false
            }
          },
          safariPinnedTab: {
            masterPicture: './public/styleguide/img/favicon/favicon-blank.svg',
            pictureAspect: 'silhouette',
            themeColor: map[key].color
          }
        },
        settings: {
          scalingAlgorithm: 'Mitchell',
          errorOnImageTooSmall: false,
          readmeFile: false,
          htmlCodeFile: false,
          usePathAsIs: false
        },
        markupFile: './public/styleguide/img/favicon/build/buffer.json'
      }, () => {
        done();
      });
    }
  }
});

/**
 * Generate SassDoc.
 */
gulp.task('sassdoc', () => {
  return gulp.src('./components/**/*.scss')
    .pipe(sassdoc({
      dest: 'public/sassdocs',
      verbose: true,
      theme: 'flippant'
    }));
});

/**
 * Default tasks:
 * Usage:
 *  gulp
 *  gulp watch
 *
 * Used for local development to compile and validate after every change.
 */
gulp.task('default', gulp.series('fractal:start', gulp.parallel('styles:watch', 'js:watch')));
gulp.task('watch', gulp.parallel('default'));

/**
 * Helper task:
 * Usage:
 *   gulp favicon:prebuild
 *   gulp favicon:build
 *
 * Helper task to build the sub themes favicons.
 *
 * TODO: Add this task to the compile commands when our build server supports
 * the realfavicongenerator.net API.
 */
gulp.task('favicon', gulp.series('favicon:prebuild', 'favicon:build'));

/**
 * Validate task:
 * Usage:
 *  gulp validate
 *
 *  Used to only validate the SCSS and JS code.
 */
gulp.task('validate', gulp.parallel('styles:validate', 'js:validate'), callback => callback());

/**
 * Compile task:
 * Usage:
 *  gulp compile
 *  gulp compile:dev
 *  Add sourcemaps to the CSS files.
 *
 *  Used to compile production ready SCSS and JS code.
 */
gulp.task('compile', gulp.series(
  gulp.parallel(
    'iconfont',
    'spotimages'
  ),
  'fractal:build',
  gulp.parallel(
    'styles:build',
    'styles:dist',
    'sassdoc',
    'js:build',
    'js:dist',
    'images:minify'
  )
  , gulp.parallel(
    'styles:extract',
    'styles:inject')
), callback => callback());

gulp.task('compile:dev', gulp.series(
  gulp.parallel(
    'iconfont',
    'spotimages'
  ),
  'fractal:build',
  gulp.parallel(
    'styles:dist',
    'sassdoc',
    'js:dist',
    'images:minify'
  )
));

/**
 * Build task:
 * Usage:
 *  gulp build
 *
 *  Used to validate and build production ready code.
 */
gulp.task('build', gulp.series((callback) => {
  // set env variable to be used in gulp-if
  build = true;
  callback();
}, gulp.parallel('validate', 'compile'), (callback) => {
  build = false;
  callback();
}));

/**
 * Publish task:
 * Usage:
 *  gulp publish
 *
 *  Used to publish to the public NPM registry.
 */
gulp.task('publish', gulp.parallel('publish:npm'));
