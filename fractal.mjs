'use strict';

import fractalSource from '@frctl/fractal';
import path from 'path';
import mandelbrot from '@frctl/mandelbrot';
import twigAdapter from '@frctl/twig';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageInfo = JSON.parse(
  await readFile(
    new URL('./package.json', import.meta.url)
  )
);

const fractal = fractalSource.create();

/**
 * Require additional fractal modules
 */

/*
* Give your project a title.
*/
fractal.set('project.title', 'City of Ghent Style Guide');
fractal.set('plugins.web.build.root', 'v3');
fractal.set('project.version', packageInfo.version);

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
    color: 'rgb(182, 11, 41)'
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
* Define collation defaults
*/
fractal.components.set('default.collated', true);
fractal.components.set('default.collator', function (markup, item) {
  return `<!-- Start: @${item.handle} -->\n<dt>${item.label || item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
});

const ghentTheme = mandelbrot({
  nav: ['search', 'docs', 'components'],
  scripts: [
    'default',
    '/js/version-switch.js'
  ],
  panels: [
    'view', 'info', 'html', 'context', 'resources'
  ],
  styles: [
    'default',
    '/css/fractal.css'
  ]
});

ghentTheme.addLoadPath(__dirname + '/fractal/theme-overrides');

fractal.web.theme(ghentTheme);

export default fractal;
