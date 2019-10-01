# Wizard

## When to use this component

Use the wizard component:

* To split up a complex problem or task that requires user input into multiple steps or multiple subtasks, for instance, a configuration wizard.
* To guide users through a process that consists of multiple steps or multiple subtask, for instance a checkout process.

## When not to use this component

Do not use the wizard component for a process or a task that requires user input that is simple. In this case, use the <a href="{{path './form.html'}}">form</a> component instead.<!-- @TODO also refer to the multistep form component -->

## How it works

The wizard form component is a collection of <a href="{{path './form.html'}}">form</a> components that each collect certain user input.<!-- @TODO explain further --><!-- @TODO explain what elements can be used, especially form actions -->

## Layout

The wizard shows the steps of the wizard above the container where the form components are loaded and where the form of current step is presented.<!-- @TODO explain how steps are displayed --><!-- @TODO explain how wide the multistep form becomes -->

## Validation

<!-- @TODO explain, refer to form component where/when necessary -->