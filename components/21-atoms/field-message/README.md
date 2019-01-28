# Field message

## When to use this component

A field message is used in the context of a form to provide help or feedback on fields or fieldsets.

## When not to use this component

A field message should not be used outside the context of a form.

## How it works

There are three types of field messages:

1. Normal field message
2. Error field message
3. Success field message

### Normal field message

A normal field message is used to provide help on a field or fieldset. The text in the field message helps the user to fill in the field or fieldset in the right way by providing extra information on how the field or fieldset should be filled in. It can also be used to tell to user *why* certain information is asked in the field or fieldset.

A normal field message is always visible from the first page view of the form.

### Error field message

An error field message is used to provide feedback on a field or fieldset. It informs the user that there was an error in filling in the field or fieldset. The text in the error field message tells to the user what is wrong and how to fix it.

As it provides feedback on user input, an error field message is **not** visible on the first page view of the form. It is only visible during or after filling in the field or fieldset or when triggered by form validation.

### Success field message

A success field message is used to provide feedback on a field or fieldset. If informs the user that the field or fieldset is correctly filled in.

As it provides feedback on user input, a success field message is **not** visible on the first page view of the form. It is only visible during or after filling in the field or fieldset or when triggered by form validation.

## Web accessibility

* A field must reference the field message by use of aria-describedby,
 this reference has priority over the field description whose information
  has already been conveyed to the user.
* A field message must have the role=alert attribute so content updates
 are read automatically
 in case of ajax- or frontend validation.
* Error messages should be as specific as possible, the item that is in error is
 identified and the error is described to the user in text.
 [See WCAG 2.0 success criterion 3.3.1. error identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)
* The field that causes an error message has the aria-invalid=true attribute.
