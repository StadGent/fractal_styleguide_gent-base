# Call to action

## When to use this component

Use the call to action component on a page:

* To guide users to the next step to reach a certain goal related to the page.
* To present specific contact information to get help or to get more information from a specific service to reach a certain goal.
* To promote a certain action for the user to take.

## When not to use this component

Do not use the call to action component for other uses than the uses listed above.

When the focus is on contacting a specific entity, location or person using a telephone number or e-mail address, the <a href="{{path './contact-block.html'}}">contact block component</a> can also be used instead. 

## How it works

The call to action component consists of the following parts:

* A title representing the call to action (required)
* A spot illustration (required and fixed, depending on the type of the primary action)
* A short text explaining the call to action (optional)
* A primary action (required)
* A secondary action (optional)

The primary action and the optional secondary action can both be one of the following types:

* A link to a web page (internal or external)
* A link to a document
* A link to an e-mail address (mailto-link)
* A link to a telephone number (tel-link)

Links to web pages, e-mail addresses and telephone numbers are presented using a <a href="{{path './link.html'}}">link</a>.
Links to documents are presented using a <a href="{{path './file-download.html'}}">file download</a>.

When using a call to action, please note the following:

* The optional short text explaining the call to action **cannot contain links**. Links can only be added to a call to action using the primary and secondary action of the call to action. **A call to action may never have more than two actions.**
* Use **clear and distinct labels** for the primary and secondary action of the call to action.
* Avoid having a primary action and secondary action of the same type. This can be confusing for users.

## Behavior of this component

A call to action has a certain behavior:

* On **desktop resolutions and tablet in landscape mode**, a call to action should always have a width of 10/12 based on the container. This means the container needs to make sure that call to actions can never be bigger then 10/12 of itself.
* On **tablet in portrait mode and mobile resolutions**, a call to action should always be the full width of the container.
* The **text** in a call to action:
   * Should always have a max-width of 40 rems.
   * Can **never** be centered.
   * Can **never** be justified.