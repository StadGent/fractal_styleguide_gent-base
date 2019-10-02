# Form

## When to use this component

Use the form component to collect user input to help users perform a certain task.

For example:

* Get in touch
* Send a message or ask a question
* Give feedback
* Enter search or filter criteria
* Login to a website or web application
* Send a simple request
* Subscribe to a newsletter

The form component is used for simple or short forms. When the form becomes too complex or too long, or when splitting up the form into multiple, smaller steps makes it easier for user to fill in, the <a href="{{path './multisteo-form.html'}}">Multistep form</a> component can be used instead.<!-- @TODO maybe mention that a simple form is used for collecting user input in a fast way and that a multistep form can be used in cases where you rather want to slow down the user, for instance if the task or the input is critical -->

## How it works

A form component contains:

* Form elements
* Fieldsets
* Form actions

### Form elements

A form component contains form elements. Form elements are different types of input elements.
 
The following form elements can be used in the form component:

* <a href="{{path './formitem.html'}}">Input</a>
* <a href="{{path './checkboxes.html'}}">Checkboxes</a>
* <a href="{{path './radios.html'}}">Radios</a>
* <a href="{{path './select.html'}}">Select</a>
* Textarea <!-- @TODO Add link to the textarea component -->
* <a href="{{path './file-upload"'}}">File upload</a>

### Fieldsets

In a form component, form elements can be grouped into one or more fieldsets.

A fieldset is used to group related form elements. Fieldsets have a visual indication of where the fieldset starts and where it ends. Fieldsets can also be nested. See the examples.

### Form actions

Every form requires at least one form action. Form actions should be placed **inside** the form component.

The **primary form action** is the first action of the form and is typically the submit button of the form. A submit button is required for every form.

For more information, see the <a href="{{path './form-actions.html'}}">form actions component</a>.

## Layout

The container is divided in two virtual sides that each get 50% of the width of the container.

Form elements are shown at the left-hand side and are aligned to the left of the container. The width of form elements is 50% of the container.

The right-hand side is the space where error field messages (also see above) are shown on validation. Error field messages appear at the right of each form element and are aligned to the top of the form element.

On mobile or when the container is too small, the right-hand side is not used. In this case, there is only one virtual column. Form elements get 100% of the width of the container. Error field messages appear directly below each form element instead of at the right and are aligned to the top of the form element.

Help texts (normal field messages) are always shown inline with the form elements. They are aligned to the left of the container. The width of the messages is the same as the width of the form elements. They are shown between the label of the form element and the form element itself, in other words directly below the label of the form element and directly above the form element itself.

Fieldsets always get a width of 100% of the container.

## Validation

*The following principles and documentation about form validation is based on the book Inclusive Design Patterns by Heydon Pickering.*

**When the form is validated and one or more errors are found, there should appear 1 general error message and specific error message per field where an error was found.**

The intention is to convey 2 important messages to the user during validation of the form. These should be separate messages.

The first message is that **something is broken**. This is purely about the fact that errors were found in the form. This message is conveyed by using 1 **general error message**.

The second message is **what needs fixing**. This is about wat will make the form valid. This message is conveyed by using a **specific error message per field** where an error was found.

### General error message

When the user clicks the submit button of the form to try to submit the form, we need to check if there are any errors. If there are, we need to surpress form submission temporarily. At this point, all we want to communicate is the prsesence of errors and that they need attention.

* The text of the general error message is fixed and should say something like: "Errors were found. Correct them to continue.".
* The general error message should appear right after checking if there are errors in the form after the user tried to submit the form.
* The general error message should be placed as close as possible and just below the submit button.
* For the general error message, the <a href="{{path './status-message.html'}}">error status message</a> is used.

### Specific error message per field

Now that the user knows something is broken, we need to help the user with what needs fixing (what will make the form valid). We can savely move on to handling the invalid fields.

* The text of the specific error message is composed out of the two pieces of information that are necessary (also see below), for example: "This is not a valid email address. Please enter an email address that meets the format example@gmail.com.".
* The specific error messages should appear at the same moment as the general error message, right after checking if there are errors in the form after the user tried to submit the form.
* The specific error message should be placed as close as possible and directly at the right next to the fields.
 * In the responsive layout, when there is too little horizontal space, the specific error message move to directy below the fields.
* For the specific error messages, the <a href="{{path './field-message.html'}}">error field message</a> is used.

#### What text to use for the specific error message per field?

For each invalid field in the form the following two pieces of information should be present in the specific error message:

1. That the field is invalid.
2. What would make the field valid.

#### Tips to write the tekst of the specific error message

* **Be clear.** Error message are a conversation, with people. Use simple language, not ambiguous. Give the reason why something has gone wrong, say what has happened and why.
* **Be gentile and humble.** Don't blame the user. Remember that "the user is always right". Imagine a situation where you would talk to the user in person.
* **Be useful.** Help the user move forward. Tell the user what to do. Give the solution or a clue. Link the error message to the corresponding next action or step.
* **Avoid technical jargon.**
* **Avoid negative words.**