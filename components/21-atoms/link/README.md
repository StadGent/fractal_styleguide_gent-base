# Link

## When to use this component

A link is used to trigger navigation. A link is used to link a web page (internal or external link) or a document (document link). A link can also be used to link to an e-mail address (mailto link).

## When not to use this component

Do not use a link to trigger an action. In this case, use a <a href="{{path './button.html'}}">button</a>.

## How it works

All links must have the **default behavior**, in other words they should open in the **same window**. This is the case for all types of links, internal links, external links and also links to documents and print-friendly versions of web pages.

The only exception that could be made is when opening the link would otherwise interrupt an ongoing process:

* The user is filling out a form or a checkout process and needs to click on a link to review, say, terms of service
* The user is watching video or listening to audio

..., using a <a href="{{path './modal.html'}}">modal</a> could be a better solution.

## Web accessibility

* A link should always look like a link.
* If a link receives a button style, the distinction between a button is conveyed visually.