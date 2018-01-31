# Functionality

This repository contains an style guide based on the Fractal build tool. You can
 compile the style guide into static HTML/CSS and export the used defined
 components into an SASS library that can be used into other projects.

## Installation

Run `yarn install`.

## Development

Run `gulp` or `gulp watch` and go to [localhost:3000](http://localhost:3000).

## Publishing (Digipolis only)

```bash
gulp publish --username=*** --password=*** --email=***
```

This command is used to publish an extract of the style guide to
the NPM registry.
It is then supposed to be used inside a Drupal 8 theme.
