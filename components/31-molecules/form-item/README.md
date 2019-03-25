# Input

## When to use this component

Use the input component to let users enter text or a value that is not longer than a single line.

## When not to use this component

Do not use the input component to let users enters longer text that might have multiple lines. In this case, use <a href="{{path './textarea.html'}}">textarea component</a> instead.

## How it works

### Types of input

* Default (simple text, free format)
* Date (date format)
* Number (number format)
* Password
* Email
* Telephone number

### Layout and validation

The input component gets 50% of the width of the container. It is aligned to the left of the container. The right-hand side (the remaining 50% of the width of the container) is the space where validation error messages are shown. Validation error messages appear at the right-hand side of the input.

On mobile or when the container is too small, the right-hand side is not used. In this case, the input component gets 100M of the width of the container. Validation error messages appear below the input instead of at the right-hand side.

Help texts are shown inline in at the left-hand side. They are shown between the label of the input and the input itself.