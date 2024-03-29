# Banner

## When to use this component

Use the image component to present a full-width image banner on a page. The banner is a simple image shown in the aspect ratio of the image itself (so not 8:5 by default) with a max-width of the maximum grid container size, set in the `$bp-container` variable, or the viewport width (for smaller screens).

## How it works

For images, the following requirements should be followed:

* An alt attribute is required. A short text alternative should be specified using the alt attribute. [See WCAG Technique page](https://www.w3.org/TR/WCAG20-TECHS/H37.html)
* For images that are purely decorative images, the alt attributes must be empty.
* The aspect ratio is determined by the image inside
* When the image cannot be loaded or is not found, a placeholder is used. See the "broken image placeholder" example.
* When there is no image to show, a placeholder is used. See the "no image placeholder" example.

The image components also adds the benefit of providing an optional caption tag.
