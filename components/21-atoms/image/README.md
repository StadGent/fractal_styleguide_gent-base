# Image

## When to use this component

Use the image component to present an image on a page.

## How it works

For images, the following requirements should be followed:

* An alt attribute is required. A short text alternative should be specified using the alt attribute. [See WCAG Technique page](https://www.w3.org/TR/WCAG20-TECHS/H37.html)
* For images that are purely decorative images, the alt attributes must be empty.
* An aspect ratio should always be provided. The default aspect ratio is 8:5.
* When the image cannot be loaded or is not found, a placeholder is used. See the "broken image placeholder" example.
* When there is no image to show, a placeholder is used. See the "no image placeholder" example.

The image components also adds the benefit of providing an optional caption tag.

## Usage within the style guide

The image component is used in the:

* <a href="{{path './teaser'}}">Teaser component</a>
* <a href="{{path './header'}}">Header component</a>
* <a href="{{path './image-gallery'}}">Image gallery component</a>
* <a href="{{path './image-wall'}}">Image wall component</a>