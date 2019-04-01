# Radios

## When to use this component

Use the radios component when users should only be able to select one option and no more.

## When not to use this component

Do not use the radios component when you need to help users:

* Select one or more options.
* Toggle a single option on or off.

In these cases, use the <a href="{{path './checkboxes.html'}}">checkboxes component</a> (for a single option or a short list of options) or the <a href="{{path './checkboxes-with-filter.html'}}">checkboxes with filter component</a> (for a long list of options) instead.

When users should be able to select one option and no more from a long list of options:

* Try to reduce and simplify the list of options to present fewer options to the user.
* When there are no better alternatives, use the <a href="{{path './select.html'}}">select component</a>.

## How it works

* Radios are grouped in a fieldset.
* The fieldset uses a legend to present a description for the radios. This is typically a question.
* Users should be able to select only one option and no more. Once they selected an option, they can only select another one, and the one that was selected should become deselected. Furthermore, users cannot go back to having no option selected, except when refreshing their browser window.
* Do not select radios by default as users might not notice this, resulting in not realising they missed a question and/or sending a wrong answer.
* The options should have short but clearly different labels. There's no need to name the action "Select this radio to..." because it is already a radio. Avoid repeating words at the start of the labels for the options so that the options are easiliy scannable.

## Usage, behavior, layout and validation

The radios component is a form element that should always be used in a form. For a description of the usage, the behavior, the layout and validation of form elements, see the <a href="{{path './form.html'}}">form component examples and documentation</a>.