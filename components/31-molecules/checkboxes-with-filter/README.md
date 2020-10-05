# Checkboxes with filter

**DEPRECATED: do no longer use this component. It has been replaced by <a href="{{path './checkboxes-dynamic.html'}}">checkboxes dynamic</a>**

## When to use this component

Use the checkboxes with filter component when you need to help users select one or more options from a long list of options.

## When not to use this component

Do not use the checkboxes with filter component when you need to help users:

* Select one or more options from a short list of options.
* Toggle a single option on or off.

In these cases, use <a href="{{path './checkboxes.html'}}">checkboxes</a> without filter instead.

## How it works

In a checkboxes with filter component, what would normally be a long list of checkboxes, is replaced by a button that opens a <a href="{{path './modal.html'}}">modal</a> where the list of checkboxes is placed instead. 

The behavior is as follows:

1. When the users clicks the button, the modal is opened.
2. In the modal, the list of checkboxes is shown.
3. The user can select on or more checkboxes in the modal.
4. To make finding and selecting the right checkboxes easier, the user can filter the list of checkboxes to narrow it down.
5. When ready, the user can click the "Confirm selection" button, and the selected checkboxes will be the new state.
6. Closing the modal without confirmation restores the previous state.

When one or more checkboxes are selected, the user can see this both:

* In the default view: Above the select button, a label with the number of selected options is shown. The label is only shown *if* at least one option is selected. If no options are selected, the label is not shown.
* In the modal: Above the filter field, the selected options are shown using filter tags. The user can also deselect options here. <a href="{{path './tag.html'}}">Read more about how tags work.</a>

## Markup

* Root element is a fieldset with class 'checkbox-filter'.
* Required elements are: .checkbox-filter__selected, .checkbox-filter__modal,
  .overlay.checkbox-filter__close, button.checkbox-filter__open.
* The modal must contain: a header with title, a close button,
  a filter field with counter and a collection of
  checkbox components (.checkbox-filter__checkboxes).

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
