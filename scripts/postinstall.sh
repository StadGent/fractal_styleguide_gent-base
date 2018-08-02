#!/bin/bash

#===============================================================================
#
#          FILE:  postinstall.sh
#
#         USAGE:  ./postinstall.sh --type=patch
#
#   DESCRIPTION: Depending on when the postinstall.sh script is being run:
#                - After running "yarn install" when cloning the style guide repo to your local system.
#                   (used by people working on the style guide).
#                  It checks for the "components" directory and "main_cli.scss" file. If it can't find it it creates
#                  one and injects the necessary tags for gulp to inject the necessary SASS partials.
#
#                - After running "npm install" or "yarn install" WITHOUT cloning to your local system.
#                   (used by people implementing the style guide).
#                  If checks for the "public" directory and creates the "public/styleguide/vendor" directory.
#                  It then adds some node_module packages to this directory needed for implementing the style guide.
#
#
#       OPTIONS:  ---
#  REQUIREMENTS:  ---
#          BUGS:  ---
#         NOTES:  ---
#        AUTHOR:  Gert-Jan Meire, gertjan.meire@digipolis.gent
#       COMPANY:  Digipolis Gent
#       VERSION:  1.0
#       CREATED:  12/12/2017
#      REVISION:  ---
#===============================================================================

#
# Create the necessary directories and move files to them after npm install or yarn install is run.
#
if [ -d "../public" ]; then
  rm -rf ../public/styleguide/vendor;

  mkdir ../public/styleguide/vendor;

  cp -R ../node_modules/baguettebox.js ../public/styleguide/vendor/baguettebox;
  cp -R ../node_modules/macy ../public/styleguide/vendor/macy;
  cp -R ../node_modules/promise-polyfill ../public/styleguide/vendor/promise-polyfill;
fi

#
# This step is only used by Digipolis while building the style guide
# When downloading the NPM package and running npm install or yarn install the "components" directory
# does not exist, so we don't have to create this file here.
#
if [ -d "../components" ]; then
  if [ -f ../components/main_cli.scss ]; then
    rm -f ../components/main_cli.scss
  fi

  touch ../components/main_cli.scss

  echo "// inject:settings
// endinject

// inject:mixins
// endinject

// inject:base
// endinject

// inject:atoms
// endinject

// inject:molecules
// endinject

// inject:organisms
// endinject

// inject:layouts
// endinject

// inject:pages
// endinject">>  ../components/main_cli.scss
fi

