'use strict';

const fs = require('fs-extra');
const path = require('path');

const nodeModulesRootPath = path.resolve(
  require.resolve('fs-extra'),
  '../../../'
); // get the node_modules folder location
const publicRootPath = path.resolve(__dirname, '../public');

/*
 * Create the necessary directories and move files to them after npm install or yarn install is run.
 */
fs.removeSync(`${publicRootPath}/styleguide/vendor`);
fs.ensureDirSync(`${publicRootPath}/styleguide/vendor`);

fs.copySync(
  `${nodeModulesRootPath}/baguettebox.js`,
  `${publicRootPath}/styleguide/vendor/baguettebox`,
  {recursive: true}
);
fs.copySync(
  `${nodeModulesRootPath}/masonry-layout`,
  `${publicRootPath}/styleguide/vendor/masonry-layout`,
  {recursive: true}
);
fs.copySync(
  `${nodeModulesRootPath}/imagesloaded`,
  `${publicRootPath}/styleguide/vendor/imagesloaded`,
  {recursive: true}
);
fs.copySync(
  `${nodeModulesRootPath}/allietabs/dist`,
  `${publicRootPath}/styleguide/vendor/allietabs`,
  {recursive: true}
);
fs.copySync(
  `${nodeModulesRootPath}/@digipolis-gent/modal/dist`,
  `${publicRootPath}/styleguide/vendor/modal`,
  {recursive: true}
);
