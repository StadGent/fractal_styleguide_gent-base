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

A **normal field message** is used to **help** users fill in a field or fieldset. 

* The text in the field message provides extra information to the user on how the field or fieldset should be filled in. It can also be used to tell to the user *why* certain information is asked.
* Try not to specify what is already implied by the input label. Only this kind of messages to provide extra information to the user.
* As it is intended to provide help, a normal field message is always visible from the first page view of the form.

An **error field message** is used to provide **feedback** on a field or fieldset. It informs the user that there was an error in filling in the field or fieldset.

* The text in the error field message tells to the user what is wrong and how to fix it.
* As it provides feedback on user input, an error field message is **not** visible on the first page view of the form. It is only visible during or after filling in the field or fieldset or when triggered by form validation.

A **success field message** is used to inform the user that the field or fieldset is **correctly filled in**.

* The text in the error field message tells the user about the success.
* As it provides feedback on user input, a success field message is **not** visible on the first page view of the form. It is only visible during or after filling in the field or fieldset or when triggered by form validation.

### Form actions

Every form requires at least one form action. Form actions should be placed **inside** the form component.

The **primary form action** is the first action of the form and is typically the submit button of the form. A submit button is required for every form.

Make the label of the submit button clear so that the user is reminder what user input is collected, for what purpose and which action is taken when clicking the submit button. Examples are: "Send message", "Subscribe", "Next", "Continue", "Confirm". The button should have the *primary* button style.

A form can also have a **secondary form action**.

The secundary action is typically a way to temporarily pause filling in the current form. In multi-step forms, this button is used to get the user to the previous step. An other use, could be a button that saves but not submits the input the user already gave so that the user can continue filling in the form at another time. Either way, make the label of the button clear so that the user understands what the button does. Examples are: "Previous", "Save for later". The button should have the *secondary* button style.
 
Sometimes, in more complex multi-step forms or wizards, a **third form action**. The third action is typically a way for the user to reset user input, go back to the beginning of the form or wizard and start over. This not a button, but a link using the *standalone* link style.

## Layout and validation

The container is divided in two virtual sides that each get 50% of the width of the container.

Form elements are shown at the left-hand side and are aligned to the left of the container. The width of form elements is 50% of the container.

The right-hand side is the space where error field messages (also see above) are shown on validation. Error field messages appear at the right of each form element and are aligned to the top of the form element.

On mobile or when the container is too small, the right-hand side is not used. In this case, there is only one virtual column. Form elements get 100% of the width of the container. Error field messages appear directly below each form element instead of at the right and are aligned to the top of the form element.

Help texts (normal field messages) are always shown inline with the form elements. They are aligned to the left of the container. The width of the messages is the same as the width of the form elements. They are shown between the label of the form element and the form element itself, in other words directly below the label of the form element and directly above the form element itself.

Fieldsets always get a width of 100% of the container.

## Web accessibility

### Field messages

* A field must reference the field message by use of aria-describedby, this error and success messages have priority over the normal field message whose information has already been conveyed to the user on first page view.
* A field message must have the role=alert attribute so content updates are read automatically in case of ajax- or frontend validation.
* Error messages should be as specific as possible, the item that is in error is identified and the error is described to the user in text. [See WCAG 2.0 success criterion 3.3.1. error identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)
* The field that causes an error message has the aria-invalid=true attribute.
