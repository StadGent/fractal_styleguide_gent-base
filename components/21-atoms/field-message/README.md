# Field message

## General

* A field message is used in the context of a form.
* A field message can only be used to provide feedback on fields or fieldsets.
* A field message is not visible on the first page view as it provides feedback on the user input.

## Web accessibility

* A field must reference the field message by use of aria-describedby, this reference has priority over the field description whose information has already been conveyed to the user.
* A field message must have the aria-role=alert attribute so content updates are read automatically in case of ajax- or frontend validation.
