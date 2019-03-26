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
* Textarea <!-- @TODO Add link to the file upload component -->
* File upload <!-- @TODO Add link to the file upload component -->

### Additional components

The following additional components can help the user to fill in the form component.

* Fieldsets
* Field messages
* <a href="{{path './status-message.html'}}">Status messages</a>

#### Fieldsets

A fieldset is used to group related form elements. Fieldsets have a visual indication of where the fieldset starts and where it ends. Fields can also be nested. See the examples.

#### Field messages

A field message to provide help or feedback on fields or fieldsets. See the examples.

There are three types of field messages:

1. Normal field message
2. Error field message
3. Success field message

A **normal field message** is used to provide **help** on a field or fieldset.

* The text in the field message helps the user to fill in the field or fieldset in the right way by providing extra information on how the field or fieldset should be filled in.
* It can also be used to tell to user *why* certain information is asked in the field or fieldset.
* A normal field message is always visible from the first page view of the form.

An **error field message** is used to provide **feedback** on a field or fieldset. It informs the user that there was an error in filling in the field or fieldset.

* The text in the error field message tells to the user what is wrong and how to fix it.
* As it provides feedback on user input, an error field message is **not** visible on the first page view of the form. It is only visible during or after filling in the field or fieldset or when triggered by form validation.

A **success field message** is used to inform the user that the field or fieldset is **correctly filled in**.

* The text in the error field message tells the user about the success.
* As it provides feedback on user input, a success field message is **not** visible on the first page view of the form. It is only visible during or after filling in the field or fieldset or when triggered by form validation.

### Form actions

Every form requires at least one form action.

### Layout and validation

Form elements get 50% of the width of the container. There are aligned to the left of the container. The right-hand side (the remaining 50% of the width of the container) is the space where validation error messages are shown. Validation error messages appear at the right of the form elements.

On mobile or when the container is too small, the right-hand side is not used. In this case, the form elements get 100% of the width of the container. Validation error messages appear directly below the input instead of at the right. The messages are aligned to the top of the form element.

Help texts are always shown inline at the left-hand side. They are shown between the label of the form element and the form element itself, in other words directly below the label of the form element and directly above the form element itself.

## Web accessibility

### Field messages

* A field must reference the field message by use of aria-describedby,
 this error and success messages have priority over the normal field message whose information
  has already been conveyed to the user on first page view.
* A field message must have the role=alert attribute so content updates
 are read automatically
 in case of ajax- or frontend validation.
* Error messages should be as specific as possible, the item that is in error is
 identified and the error is described to the user in text.
 [See WCAG 2.0 success criterion 3.3.1. error identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)
* The field that causes an error message has the aria-invalid=true attribute.