# Image gallery

## When to use this component

Use the image gallery component on detail pages to present a set of images in a modal image gallery format (lightbox).

## When not to use this component

Do not use the image gallery component to present a set of images that should be all visible at once without any interaction except scrolling.

Do not use the image gallery component on overview pages or filter pages. Only use the image gallery component on detail pages.

## How it works

An image gallery is a list of <a href="{{path './figure.html'}}">figures</a>.

## Functionality

* The images must have aspect ratio 8:5.
* The number of preview images shown depends on the screen size.
* Up to five images can be shown as preview.
* If there are hidden images: an overlay is placed on the last visible image
 indicating the total number of images.
* A click event on one of the preview images or on the overlay indicating hidden
 images shows all images in a lightbox.
* Using the class 'image-gallery' on the list element triggers lightbox
 initialisation on page load.

## Accessibility

* The images are placed in a unordered list.
* When a image caption is provided, this is also used as aria-label for the
 lightbox link.
* All lightbox links are described by a hidden span to identify it's
 purpose (e.a.: 'open gallery),
 add this to the bottom of your page template (above scripts).
* Hidden images are not only visually hidden.
* The lightbox can be closed by use of the escape key.
* Navigating through images in the lightbox can be done by using the
 arrow keys.
* The focus cannot be placed on elements which are hidden from view
 by the lightbox.