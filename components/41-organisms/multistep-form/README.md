# Multistep form

## When to use this component

Use the multistep form component to split up a form into multiple, smaller steps when:

* The form otherwise would become too complex or too long.
* Splitting up the form into multiple, smaller steps makes it easier for user to fill in.

For example:

* Send a more complex request.
* Enter multiple sets of data.
 
## When not to use this component

Do not use the multistep form component for simple or short forms. In this case, use the <a href="{{path './form.html'}}">form</a> component instead.

Do not use the multistep form component when helping users collect user input is not the main goal, but rather splitting up a complex problem or task that requires user input into multiple steps or multiple subtasks or guiding users through a process. In this case, use the <a href="{{path './wizard.html'}}">wizard</a> component instead.

## How it works

The multistep form component is a collection of <a href="{{path './form.html'}}">form</a> components that each collect certain user input. It uses the <a href="{{path './form-actions.html'}}">form actions</a> component to let users navigate to the next or previous step in the form.

## Layout

On **desktop resolutions and tablets in landscape mode**, the multistep form has the following layout:

* At the left-hand side, the steps of the multistep form are shown.
* At the right-hand side, the container where the form components are loaded is presented.

On **tablets in portrait mode and mobile resolutions**, the steps of the multistep form are shown above the container where the form components are loaded.

### Steps of the multistep form

 The steps of the multistep form are displayed so that it is clear for the user what is the current, active step, which steps are not active, which steps are enabled or disabled and which steps are clickable. See the example.

## Validation

The validation of user input in the form components in each step of a multistep form works as it does for simple or short forms. See the documentation of the <a href="{{path './form.html'}}">form</a> component.
