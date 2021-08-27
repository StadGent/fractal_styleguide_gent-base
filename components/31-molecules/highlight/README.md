# Highlight

The highlight component is a general, generic box with a spot illustration.

## When to use this component

Use the highlight component on a page to highlight a short text, certain specific information or to show a notification.

The highlight component works best with a text with no more than one or a few sentences. The ideal total length of the text is the length of a tweet, meaning between 140 characters and 280 characters.

## When not to use this component

Do not use the highlight component to present the main content. Only use the highlight component to highlight specific information.

Do not use the highlight component to show long text or complex content.

Do not use the highlight component when another, more specific style guide component is more applicable:

* To highlight a quote or a part of a quote, use the <a href="{{path './quote'}}">quote component</a> instead.
* To show contact information of an entity, location or person on a detail page, use the <a href="{{path './contact-details'}}">contact details component</a> instead.
* Use the <a href="{{path './cta-block'}}">call to action component</a> instead:
  * To guide users to the next step to reach a certain goal related to the page.
  * To present specific contact information to get help or to get more information from a specitic service to reach a certain goal.
  * To promote a certain action for the user to take.
* Use the <a href="{{path './summary'}}">summary component</a> instead:
  * To highlight a key takeaway or a short conclusion.
  * To present metadata.
  * When a call-to-action button is required.
  * To highlight any important data that you want users to remember after they've seen the page.

## How it works

The highlight component consists of two parts:

* A spot illustration, add one of these classNames:
  'camera', 'form', 'letter', 'loupe', 'mail', 'newsletter', 'upload', 'whistle' or 'checklist'.  
  For 'link', 'phone', 'email' or 'download' always use the
  <a href="{{path './cta-block'}}">call to action component</a> instead.
* A short text, specific information or notification text

## Layout

The highlight component has two different layouts that can be used:

* Spot illustration on the left
* Spot illustration at the top right corner

On **tablets in portrait mode and mobile resolutions**, the spot illustration is always shown in the center at the top.

See the examples.
