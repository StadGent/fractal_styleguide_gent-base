# Wizard

## When to use this component

Use the wizard component:

* To split up a complex problem or task into multiple steps or multiple subtasks, for example, a configuration wizard.
* To guide users through a process that consists of multiple steps or multiple subtasks, for example, a checkout process.

## When not to use this component

Do not use the wizard component when the main goal is collecting user input and when a single or short form can be used. In this case, use the <a href="{{path './form.html'}}">form</a> component instead.

Do not use the wizard component when the steps or subtasks can only be presented using form components and no other elements. In this case, use the <a href="{{path './multistep-form.html'}}">form</a> component instead.

## How it works

The wizard component is a collection of <a href="{{path './form.html'}}">form</a> components that each collect certain user input. It uses the <a href="{{path './form-actions.html'}}">form actions</a> component to let users navigate to the next or previous step in the wizard.

## Layout

The wizard component has the following layout:

* At the top, the steps of the wizard are shown.
* Below the steps of the wizard, the container where the form components are loaded is presented.

### Steps of the wizard

The steps are displayed so that it is clear for the user what is the current, active step, which steps are not active, which steps are enabled or disabled and which steps are clickable. See the example.

## Validation

The validation of user input in the form components in each step of a wizard works as it does for simple or short forms. See the documentation of the <a href="{{path './form.html'}}">form</a> component.