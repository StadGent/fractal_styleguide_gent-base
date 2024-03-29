# Image wall

## When to use this component

Use the image wall component on detail pages to present a set of images as a whole, showing the complete set of images using thumbnails.

## When not to use this component

Do not use the image wall component:

* To present only one image or only a few images. Only use the image wall component when the set of images contains at least 5 images.
* To present images on a detail page that also already contains a lot of other content. The image wall component works best if it's the only component on the detail page or if not much other content is placed before or after the image wall component.

Do not use the image wall component on overview pages or filter pages. Only use the image wall component on detail pages.

## How it works

* An image wall is a list of images presented by using <a href="{{path './figure'}}">figures</a>.
* Thumbnails are used to present the set of images.
* The number of thumbnails is equal to the number of images in the set of images.
* All thumbnails are shown.
* Clicking a thumbail shows all images in a modal image gallery (lightbox).

## Implementation

* Using the class 'image-gallery' on the list element triggers lightbox
 initialisation on page load.

## Accessibility

* The images are placed in a unordered list.
* When a image caption is provided, this is also used as aria-label for the
 lightbox link.
* All lightbox links are described by a hidden span to identify it's
 purpose (e.a.: 'open gallery),
 add this to the bottom of your page template (above scripts).
* The lightbox can be closed by use of the escape key.
* Navigating through images in the lightbox can be done by using the
 arrow keys.