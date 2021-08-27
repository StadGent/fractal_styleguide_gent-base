# Input

## When to use this component

Use the input component to let users enter text or a value that is not longer than a single line.

## When not to use this component

Do not use the input component to let users enter longer text that might have multiple lines. In this case, use <a href="{{path './textarea'}}">textarea component</a> instead.

## How it works

### Types of input

* Default (simple text or text value that is not longer than a single line, no format)
* Date (date format)
* Time
* Number (number format)
* Password (password, characters are masked)
* Email (automatically validated)
* Telephone number

#### Date input

To let users enter a date, use the input type date. This will trigger the built-in browser date picker functionality for a consistent user experience. It is also the best way to let the user enter a date on mobile and it is accessible (most custom date pickers aren't).

For browsers that do not support the input type date, make sure there is a fallback, for instance, by adding a <a href="{{path './field-message'}}">field message</a> explaining the date format that should be used combined with pattern validation.

## Usage, behaviour, layout and validation

The input component is a form element that should always be used in a form. For a description of the usage, the behavior, the layout and validation of form elements, see the <a href="{{path './form'}}">form component examples and documentation</a>.
