# Form actions

## When to use this component

Use the form actions component in the context of a form.

## When not to use this component

Do not use the form actions component outside the context of a form.

## How it works

Every form requires at least one form action. Form actions should be placed **inside** the form component.

The **primary form action** is the first action of the form and is typically the submit button of the form. A submit button is required for every form.

Make the label of the submit button clear so that the user is reminded what user input is collected, for what purpose and which action is taken when clicking the submit button. Examples are: "Send message", "Subscribe", "Next", "Continue", "Confirm". The button should have the *primary* button style.

A form can also have a **secondary form action**.

The secondary action is typically a way to temporarily pause filling in the current form. In <a href="{{path './multistep-form.html'}}">multistep forms</a>, this button is used to get the user to the previous step. An other use, could be a button that saves but not submits the input the user already gave so that the user can continue filling in the form at another time. Either way, make the label of the button clear so that the user understands what the button does. Examples are: "Previous", "Save for later". The button should have the *secondary* button style.
 
Sometimes, in more complex <a href="{{path './multistep-form.html'}}">multistep forms</a> or <a href="{{path './wizards.html'}}">wizards</a>, a **third form action**. The third action is typically a way for the user to reset user input, go back to the beginning of the form or wizard and start over. This not a button, but a link using the *standalone* link style.