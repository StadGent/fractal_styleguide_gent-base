# Image gallery

## Functionality

* A click event on one of the preview images shows all images in a lightbox.
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