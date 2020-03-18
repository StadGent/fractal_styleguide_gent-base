# Modal

## When to use this component

Use the modal component to show longer content or more complex functionality that would otherwise be included on a web page but:

* Needs more screen space to be readable and/or usable
* Is typically advanced or only necessary for a minority of users (progressive disclosure principle)

The modal component can also be used instead of a <a href="{{path './link.html'}}">link</a> that opens in a new window to show content or functionality that is necessary to users but cannot interrupt them in an ongoing process:
  * The user is filling out a form or a checkout process and needs to review, say, terms of service
  * The user is watching video or listening to audio

## When not to use this component

Do not use an modal component to hide a simple piece or section of content or a simple functionality that is essential to all users.

## How it works

The modal component shows a modal box that is over the web page content with a color overlay in between the modal box and the web page content. When opened, the focus is moved to the modal box and the components on the web page behind the color overlay are not accessible anymore. Clicking anywhere on the color overlay outside the modal box or the close button of the modal box closes the modal box.

The modal box consists of three parts:

* Modal header with close-button at the right (required)
* Modal content (required)
* Modal actions panel (optional, typically used for "Confirm" and/or "Cancel" buttons)

There are two types of modals:
* Default modal
* Fixed-height modal

### Default modal

The default modal has a modal box whose height automatically adapts to the length of the content or functionality that is shown inside the modal box. When the modal box becomes too high to be shown in the viewport, scrolling is enabled. In this case, the full modal box including the header, content and actions panel (if enabled) moves.

### Fixed-height modal

The fixed-height modal has a modal box whose height is fixed to a height relative to the height of the viewport. The position of the modal box is fixed. The modal box is always centered in the viewport.

When the content or functionality inside the modal box is too long to be shown all in the available height, scrolling of the content or functionality *inside* the modal box is enabled. In this case, only the modal content scrolls, the modal header and the model actions panel stay are pinned to the modal box and stay in place.  

**Make sure to add `tabindex=0` to the `.modal--fixed-height` element to enable the scrollable region with keyboard access.**

## Usage within the style guide

The modal component is used in the <a href="{{path './checkboxes-with-filter.html'}}">checkboxes with filter</a> component.
