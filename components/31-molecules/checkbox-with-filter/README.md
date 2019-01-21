# Checkboxes with filter

## Markup

* Root element is a fieldset with class 'checkbox-filter'.
* Required elements are: .checkbox-filter__selected, .checkbox-filter__modal,
  .overlay.checkbox-filter__close, button.checkbox-filter__open.
* The modal must contain: a header with title, a close button,
  a filter field with counter and a collection of
  checkbox components (.checkbox-filter__checkboxes).

## Functionality

* Checked items appear in an overview outside of the modal.
* Closing the modal without confirmation restores the previous state.

## Accessibility

* The modal uses a tabtrap.
* The label or description for the filterfield indicates that the
  filtering will happen on input.

## Javascript

### Usage

Create a new CheckboxFilter object by running:

```js
new CheckboxFilter(element, [options]);
```

The optional 'options' object contains all queryselectors, a string 'hiddenTagText'
to use as hidden text on the selected tags buttons and a boolean to prevent creating
selected tags in case you need your own implementation.
