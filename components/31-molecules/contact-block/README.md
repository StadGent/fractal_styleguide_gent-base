# Contact block

The contact block component is a specific version of the <a href="{{path './cta-block.html'}}">call to action component</a> that focuses on contacting a specific entity, location or person. The primary action is a telephone number or an e-mail address. The optional secondary action is a link to a page with all contact information of the specific entity, location or person.

## When to use this component

Use the contact block component to show a telephone number or e-mail address of a specific entity, location or person on a detail page.

## When not to use this component

Do not use the contact block component for contact blocks where the primary action is not a telephone number or an e-mail address or where the optional secondary action is not a link to a page with all contact information of the specific entity, location or person. In these case, use the general <a href="{{path './cta-block.html'}}">call to action component</a>.

## How it works

The contact block component consists of the following parts:

* A title representing the contact block(required)
* A spot illustration (required and fixed, depending on the type of the primary action)
* A short text explaining the contact block (optional)
* A primary action (required)
* A secondary action (optional)

The primary action can be one of the following types:

* A link to an e-mail address (mailto-link)
* A link to a telephone number (tel-link)

The optional secondary action, when used, should always be a link to a web page (internal or external) with contact information of the specific entity, location or person the contact block is referring to.

When using a contact block, please note the following:

* The optional short text explaining the contact block **cannot contain links**. A link can only be added to a contact block using the secondary action of the contact block. **A contact block may never have more than two actions.**
* Use **clear and distinct labels** for the primary and secondary action of the contact block.

## Behavior of this component

A contact block has a certain behavior:

* On **desktop resolutions and tablet in landscape mode**, a contact block should always have a width of 10/12 based on the container. This means the container needs to make sure that contact blocks can never be bigger then 10/12 of itself.
* On **tablet in portrait mode and mobile resolutions**, a contact block should always be the full width of the container.
* The **text** in a contact block:
   * Should always have a max-width of 40 rems.
   * Can **never** be centered.
   * Can **never** be justified.
