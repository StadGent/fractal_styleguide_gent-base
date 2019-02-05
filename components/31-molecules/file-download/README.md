# File download 

## When to use this component

Use the file download component to link to a document as a *standalone* link, in other words *not* inside a text but separated from text (for instance in a call to action).

## When not to use this component

Do not use the file download component to link to a web page (internal or external link), to an e-mail address (mailto link) or to link to a document inside a text. In these case, use a normal <a href="{{path './link.html'}}">link</a>.

Do not use the file download component to trigger an action (other than downloading a file). In this case, use a <a href="{{path './button.html'}}">button</a>.

## How it works

The file download component consists of two elements:

* A link to a document using the *standalone* link style.
* A span text showing the file format and the file size of the document.

The file format and the file size of the document are shown so that the user knows what to expect, what kind of document it is and how large it is. For instance, the user could decide do not open the document now because of low bandwidth (in case of large file).