# Checkboxes

## When to use this component

Use the checkboxes component to help users:

* Toggle a single option on or off.
* Select one or more options from a fixed, short list of options.

## When not to use this component

Do not use the checkboxes component when you need to help users select one or more options from a long list of options. In this case, use <a href="{{path './checkboxes-dynamic'}}">checkboxes dynamic</a> component instead.

Do not use the checkboxes component when users should only be able to select one option and no more. In this case, use the <a href="{{path './radios'}}">radios</a> component instead.

## How it works

* Checkboxes are grouped in a fieldset.
* The fieldset uses a legend to present a description for the checkboxes. This is typically a question.
* Users should be able to select one or more options.
* Do not select checkboxes by default as users might not notice this, resulting in not realising they missed a question and/or sending a wrong answer.
* The options should have short but clearly different labels. There's no need to name the action "Select this checkbox to..." because it is already a checkbox. Avoid repeating words at the start of the labels for the options so that the options are easiliy scannable.

## Usage, behavior, layout and validation

The checkboxes component is a form element that should always be used in a form. For a description of the usage, the behavior, the layout and validation of form elements, see the <a href="{{path './form'}}">form component examples and documentation</a>.
