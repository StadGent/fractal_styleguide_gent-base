# Functionality

This repository contains an style guide based on the Fractal build tool. You can
 compile the style guide into static HTML/CSS and export the used defined
 components into an SASS library that can be used into other projects.

## Installation

Install the dependencies:

```shell
npm install
```

Compile all components, this might take a while:

```shell
npm run build
```

Start the fractal site at localhost:3000 and watch for changes:

```shell
npm run start
```

Open the browser and go to [localhost:3000](http://localhost:3000).

## Build static version of the styleguide

Run the installation and build script, the static version will be available in
the `./build` directory:

```shell
npm install && npm run build
```

## Publish NPM package

District09 only:

```bash
gulp publish --username=*** --password=*** --email=***
```

This command is used to publish an extract of the style guide to the NPM 
registry. It is then supposed to be used inside a Drupal 8+ theme.
