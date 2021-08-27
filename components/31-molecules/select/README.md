# Select

## When to use this component

Use the select component to let users select one option and no more from a long list of options.

## When not to use this component

Do not use the select component when there are better alternatives than using a select component.

* When possible, reduce and simplify the list of options to present fewer options to the user.
* When users should only be able to select one option and no more, try to use the <a href="{{path './radios'}}">radios component</a> instead.

Do not use the select component when you need to help users:

* Select one or more options.
* Toggle a single option on or off.

In these cases, use the <a href="{{path './checkboxes'}}">checkboxes component</a> (for a single option or a short list of options) or the <a href="{{path './checkboxes-with-filter'}}">checkboxes with filter component</a> (for a long list of options) instead.

## How it works

* The select component allows users to select one option and no more from a long list of options.
* The options can be grouped in option groups.
* The first option can be a placeholder option that indicates to the user what to do, for instance, "Select a value". The placeholder option is not actually an option. When the user does not select another, real option, no option is selected. When use the placeholder option is selected by default and disabled. The user can only select another, real option.

## Usage, behavior, layout and validation

The select component is a form element that should always be used in a form. For a description of the usage, the behavior, the layout and validation of form elements, see the <a href="{{path './form'}}">form component examples and documentation</a>.