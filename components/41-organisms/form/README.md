# Form

## When to use this component

Use the form component to let users provide input and submit information.

## How it works

### Form elements

The following form elements can be used in the form component:

* <a href="{{path './formitem.html'}}">Input</a>
* <a href="{{path './checkboxes.html'}}">Checkboxes</a>
* <a href="{{path './radios.html'}}">Radios</a>
* <a href="{{path './select.html'}}">Select</a>
* Textarea <!-- @TODO Add link to the file upload component -->
* File upload <!-- @TODO Add link to the file upload component -->

### Additional components

* Fieldset
* Help text / infobox
* <a href="{{path './status-message.html'}}">Status message</a>
* Field message
* <a href="{{path './form-actions.html'}}">Form actions</a> (required)

### Layout and validation

Form elements get 50% of the width of the container. There are aligned to the left of the container. The right-hand side (the remaining 50% of the width of the container) is the space where validation error messages are shown. Validation error messages appear at the right of the form elements.

On mobile or when the container is too small, the right-hand side is not used. In this case, the form elements get 100% of the width of the container. Validation error messages appear directly below the input instead of at the right. The messages are aligned to the top of the form element.

Help texts are always shown inline at the left-hand side. They are shown between the label of the form element and the form element itself, in other words directly below the label of the form element and directly above the form element itself.