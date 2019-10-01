# File upload

## When to use this component

Use the file upload component to help users select and upload one or more files.

## How it works

There are two cases in which the file upload component can be used:
* To upload one file only (default)
* To upload one or more files

### Upload one file only (default)

When the user should only be able to select and upload one file, the file upload component can be used as is. See the "default" example.

### Upload one or more files

When the user should be able to select and upload one or more files, the file upload component is placed in a fieldset.

There are two ways of using and presenting the file upload component in a fieldset to upload one or more files:
* A fieldset with one single file upload component with the option to upload one or more files. See the "multiple" example.
* A fieldset with multiple file upload components that are stacked. The file upload components can be shown immediatelly or can be shown one by one where the user is in control and actively chooses to select and upload one file more using a button that adds a file upload component. See the "stacked" example.

## Usage, behavior, layout and validation

The file upload component is a form element that should always be used in a form. For a description of the usage, the behavior, the layout and validation of form elements, see the <a href="{{path './form.html'}}">form component documentation</a>.