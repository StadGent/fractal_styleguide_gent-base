# Versioning and releases

We aim to provide citizens and visitors of the city of Ghent a uniform experience throughout our many
websites and applications. At the same time it is imperative that we continue evolving, and we expect the same
from projects depending on this style guide.

## Versioning

We use [semantic versioning](https://semver.org/) to help understand the potential impact of a new version.  
_major.minor.patch_

* **Major releases** may contain breaking changes, it will almost always be necessary to refactor some of your templates
  and check for usage of deprecated components and/or classNames.
* **Minor releases** can contain new components, or non breaking changes.
  These are changes where the HTML template remains the same, but the scss may have been updated.  
  If your project does not override our scss, there will be no impact.  
  If it does, you will have to update your scss accordingly.
* **Patch releases** are bug fix releases, developer assistance should not be required while updating.

For minor and major versions, please always check the [changelog]({{path '/docs/changelog'}}) for required actions.

## Release frequency

We strive for a **major release every six months**. This should enable us to keep up to date with the
style guide and expectations of the city. While also allowing developers and projects to plan their biannual updates.

Major releases are planned for the **beginning of October and the beginning of April**.

## Deprecation practices

Components and classNames marked as deprecated will be announced in the [changelog]({{path '/docs/changelog'}}).  
These will still be available for the next two major releases and removed in the third. 
This gives you 18 months to update your projects.

For instance: the component `checkbox with filter` has been marked deprecated in version 4.0.0 (October 2020)
and will be permanently removed in version 7.0.0 (April 2022).


