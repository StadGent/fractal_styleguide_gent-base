# Link

## When to use this component

A link is used to trigger navigation. A link is used to link a web page (internal or external link) or a document (document link). A link can also be used to link to an e-mail address (mailto link).

## When not to use this component

Do not use a link to trigger an action. In this case, use a <a href="{{path './button.html'}}">button</a>.

## How it works

### Behavior

All links must have the **default behavior**, in other words they should open in the **same window**. This is the case for all types of links, internal links, external links and also links to documents and print-friendly versions of web pages.

The only exception that could be made is when opening the link would otherwise interrupt an ongoing process:

* The user is filling out a form or a checkout process and needs to click on a link to review, say, terms of service
* The user is watching video or listening to audio

..., using a <a href="{{path './modal.html'}}">modal</a> could be a better solution.

### Styling

By default, a link is shown as a link. Links can also by styled as a button. This can be particulary useful in <a href="{{path './cta-block.html'}}">call-to-actions</a>. Note that while a link can be styled as a button, it is important that it remains a link and not a button.

### Icons

With the exception of the default (inline) internal link, links show an icon to give an extra hint that it is a link and what type of link it is. The icon is always shown at the right of the label of the link. See the examples.

## Web accessibility

* A link should always look like a link.
* If a link receives a button style, the distinction between a button is conveyed visually.