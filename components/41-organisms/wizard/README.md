# Wizard

## When to use this component

Use the wizard component:

* To split up a complex problem or task into multiple steps or multiple subtasks, for example, a configuration wizard.
* To guide users through a process that consists of multiple steps or multiple subtasks, for example, a checkout process.

## When not to use this component

Do not use the wizard component when the main goal is collecting user input and when a single or short form can be used. In this case, use the <a href="{{path './form.html'}}">form</a> component instead.

Do not use the wizard component when the steps or subtasks can only be presented using form components and no other elements. In this case, use the <a href="{{path './multistep-form.html'}}">form</a> component instead.<!-- @TODO maybe explain the difference between wizards and multistep forms, for instance, in a wizard also other components than  form components could be used, for example, a summary -->

## How it works

The wizard form component is a collection of <a href="{{path './form.html'}}">form</a> components that each collect certain user input.<!-- @TODO explain further --><!-- @TODO explain what elements can be used, especially form actions -->

## Layout

The wizard shows the steps of the wizard above the container where the form components are loaded and where the current step is presented.<!-- @TODO explain how steps are displayed --><!-- @TODO explain how wide the multistep form becomes -->

## Validation

The validation of user input in the form components in each step of a wizard works as it does for simple or short forms. See the documentation of the <a href="{{path './form.html'}}">form</a> component.