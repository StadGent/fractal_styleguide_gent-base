'use strict';

const fs = require('fs-extra');
const path = require('path');

const nodeModulesRootPath = path.resolve(require.resolve('fs-extra'), '../../../'); // get the node_modules folder location
const publicRootPath = path.resolve(__dirname, '../public');
const componentsRootPath = path.resolve(__dirname, '../components');

/*
* Create the necessary directories and move files to them after npm install or yarn install is run.
*/
if (fs.existsSync(publicRootPath)) {
  fs.removeSync(`${publicRootPath}/styleguide/vendor`);

  fs.ensureDirSync(`${publicRootPath}/styleguide/vendor`);

  fs.copySync(`${nodeModulesRootPath}/baguettebox.js`, `${publicRootPath}/styleguide/vendor/baguettebox`, {recursive: true});
  fs.copySync(`${nodeModulesRootPath}/masonry-layout`, `${publicRootPath}/styleguide/vendor/masonry-layout`, {recursive: true});
  fs.copySync(`${nodeModulesRootPath}/imagesloaded`, `${publicRootPath}/styleguide/vendor/imagesloaded`, {recursive: true});
  fs.copySync(`${nodeModulesRootPath}/allietabs/dist`, `${publicRootPath}/styleguide/vendor/allietabs`, {recursive: true});
}

/*
* This step is only used by Digipolis while building the style guide
* When downloading the NPM package and running npm install or yarn install the "components" directory
* does not exist, so we don't have to create this file here.
*/
if (fs.existsSync(componentsRootPath)) {
  fs.copyFileSync(path.resolve(__dirname, 'main_cli.scss'), `${componentsRootPath}/main_cli.scss`);
}
