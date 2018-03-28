'use strict';

const fractal = require('@frctl/fractal').create();
const path = require('path');
const packageInfo = require('./package.json');

/**
 * Require additional fractal modules
 */
const twigAdapter = require('@frctl/twig');

/*
* Give your project a title.
*/
fractal.set('project.title', 'City of Ghent Style Guide - Version ' + packageInfo.version);

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

module.exports = fractal;
