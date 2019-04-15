# Form

## When to use this component

Use the form component to collect user input.

## How it works

### Form elements

A form component contains form elements. Form elements are different types of input elements.
 
The following form elements can be used in the form component:

* <a href="{{path './formitem.html'}}">Input</a>
* <a href="{{path './checkboxes.html'}}">Checkboxes</a>
* <a href="{{path './radios.html'}}">Radios</a>
* <a href="{{path './select.html'}}">Select</a>
* Textarea <!-- @TODO Add link to the textarea component -->
* File upload <!-- @TODO Add link to the file upload component -->

### Additional components

The following additional components can help the user to fill in the form component.

* Fieldsets. A fieldset is used to group related form elements. Fieldsets have a visual indication of where the fieldset starts and where it ends. Fieldsets can also be nested. See the examples.
* <a href="{{path './field-message.html'}}">Field messages</a>
* <a href="{{path './status-message.html'}}">Status messages</a>

### Form actions

Every form requires at least one form action. Form actions should be placed **inside** the form component. For more information, see the <a href="{{path './form-actions.html'}}">form actions component</a>.

## Layout and validation

The container is divided in two virtual sides that each get 50% of the width of the container.

Form elements are shown at the left-hand side and are aligned to the left of the container. The width of form elements is 50% of the container.

The right-hand side is the space where error field messages (also see above) are shown on validation. Error field messages appear at the right of each form element and are aligned to the top of the form element.

On mobile or when the container is too small, the right-hand side is not used. In this case, there is only one virtual column. Form elements get 100% of the width of the container. Error field messages appear directly below each form element instead of at the right and are aligned to the top of the form element.

Help texts (normal field messages) are always shown inline with the form elements. They are aligned to the left of the container. The width of the messages is the same as the width of the form elements. They are shown between the label of the form element and the form element itself, in other words directly below the label of the form element and directly above the form element itself.

Fieldsets always get a width of 100% of the container.
