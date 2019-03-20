# Radios

## When to use this component

Use the radios component when users should only be able to select one option and no more.

## When not to use this component

Do not use the radios component when you need to help users:

* Select one or more options from a short list of options.
* Toggle a single option on or off.

In these cases, use the <a href="{{path './checkboxes.html'}}">checkboxes component</a> instead.

## How it works

* Radios are grouped in a fieldset.
* The fieldset uses a legend to present a description for the radios. This is typically a question.
* Users should be able to select only one option and no more. Once they selected an option, they can only select another one, and the one that was selected should become deselected. Furthermore, users cannot go back to having no option selected, except when refreshing their browser window.
* Do not select radios by default as users might not notice this, resulting in not realising they missed a question and/or sending a wrong answer.
* The options should have short but clearly different labels. There's no need to name the action "Select this radio to..." because it is already a radio. Avoid repeating words at the start of the labels for the options so that the options are easiliy scannable.