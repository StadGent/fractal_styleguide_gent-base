# In The Spotlight

## When to use this component

Use In The Spotlight component on a page:

* To highlight a certain image and text and make it pop out.

## When not to use this component

Do not use the In The Spotlight component for other uses than the uses listed above.

## How it works

The In The Spotlight component consists of the following parts:

* An image
* A title (optional if text if provided)
* A short text (optional if title is provided)
* A link (optional)

Links to web pages, e-mail addresses and telephone numbers are presented using a <a href="{{path './link'}}">link</a>.
Links to documents are presented using a <a href="{{path './file-download'}}">file download</a>.

When using a call to action, please note the following:

* The optional short text **cannot contain links**. Links can only be added below the text.

## Behavior of this component

A call to action has a certain behavior:

* On **desktop resolutions and tablet in landscape mode**, an In The Spotlight should always have a width of 10/12 based on the container. This means the container needs to make sure that call to actions can never be bigger then 10/12 of itself.
* On **tablet in portrait mode and mobile resolutions**, an In The Spotlight should always be the full width of the container.
* The **text** in an In The Spotlight:
   * Can **never** be centered.
   * Can **never** be justified.
