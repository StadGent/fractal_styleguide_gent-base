# Contributing to this project

1. [Contributing](#contributing)
2. [Submitting an Issue](#issues)
3. [Submitting a Pull Request](#pull-requests)

## Contributing

Thank you for your interest in contributing to this project. There are several
ways to help out, even if you've never worked on an open source project before.
If you've found a bug or want to request a feature, you can report it by
[posting an issue](https://github.com/StadGent/fractal_styleguide_gent-base/issues/new).
Be sure to read the [guidelines](#issues) first! If you want to contribute
your own work (be it code or documentation), please read the [guidelines](#pull-requests)
for submitting a pull request.

> If you want to report a security issue, please read [the Security guidelines](SECURITY.md)
> first!

## Issues

Issues are intended for reporting bugs and weird behaviour or suggesting
improvements to this project. Before you submit an issue, please go through the
following checklist:

* **FILL IN ALL THE FIELDS ASKED FOR**
* Search through existing issues (*including closed issues!*) first: you might
  be able to get your answer there.
* Double check your issue manually, because it could be an external issue.
* What providers are you using?
* If you post logs, please use pastebin or github gist to store them!
* Give a short step by step of how to reproduce the error.
* What browser are you using and on which OS if it's a front-end issue.
* Which system is this project deployed on if it's an application error.

The more relevant information you provide, the more likely that your issue will
be resolved.

## Pull Requests

Pull requests are intended for contributing code or documentation to the
project. Before you submit a pull request, consider the following:

* Make sure your pull request is made for the *develop* branch (or relevant
  feature branch).
* Have you tested your PR? If not, why?
* Does your PR have any limitations we should know of?
* Is your PR up-to-date with the branch you're trying to push into?

## A note about versions

Something of note when contributing to the repository: When applying changes to
the style guide keep in mind that many projects may rely on a specific version
of the code.

We default to [semver.org](http://semver.org) (semantic versions) for most of
our projects, **but** we deviate from this here. If you want to be safe, make
sure you stay on the same minor version and only introduce new minor versions
when you have the time to review your changes. We do release minor versions
quite regularly, and most of the time they don't introduce backward incompatible
changes. But this project is still partly research for us and we're finding the
best approach along the way, so we can't guarantee flawless updates on minor
versions. For more explanation, see below.

To make sure you are backwards compatible you will need to follow some
guidelines:

### Patch changes

This introduces small changes and bug fixes and should be fully backwards
compatible.

When your changes don't affect the structure of the style guide you can publish
a patch:

```nolang
1.0.1 --> 1.0.2
```

### Minor changes

Backwards incompatible changes can be introduced in minor versions.

When your changes might affect the structure, like adding / refactoring /
removing an atom or molecule in the style guide:

```nolang
1.0.0 --> 1.1.0
```

### Major changes

Major versions are used when major changes are introduced in the actual
styling of components.

When your changes are sure to change the structure and critical parts of the
style guide and when these changes are not backwards compatible:

```nolang
1.0.1 --> 2.0.0
```

## Applying changes and publishing to NPM

To apply changes some steps need to be taken:

* Apply your changes in the code.
* When ready with coding / testing:
  * Bump the version number in the `package.json` file
  * Build your production code with
    `gulp build`
  * Add your changes to git:
    `git add *`
    `git commit -m 'Commit message here'`
    `git push`
  * Publish the package to NPM with
    `gulp publish --username=*** --password=*** --email=***`
