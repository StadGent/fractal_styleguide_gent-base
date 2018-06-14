# Accordion

## Style

* Single items receive a chevron on the right hand side.
* Multiple expandable items receive a 'plus' or 'minus' sign on the left hand side.

## Markup

* Multiple expandable items must always be contained in an unordered-
  or description list.
* The toggle must be of type button and preferably wrapped in an
  element with (implicit) role header.
* The toggle button has both aria-expanded to indicate it's current
  state and aria-controls to indicate which element it controls.

## Functionality

* Multiple items can be expanded at the same time

## Javascript

### Usage

Create a new accordion object by running:

```js
new Accordion(element);
```

Where element contains a button with:

* default class: accordion-\-button
* aria-expanded (true or false)
* aria-controls, the unique ID of the collapsible element

And a collapsible element with:

* default class: accordion-\-content

By default, the accordion will initiate automatically
and hide or show the content
according to the aria-expanded attribute.

For instance:

```html
<div class="accordion">
    <h3>
        <button aria-controls="accordion--content-ID"
                aria-expanded="false"
                class="accordion--button">
            single accordion
        </button>
    </h3>
    <div class="accordion--content" id="accordion--content-ID">
        ...
    </div>
</div>
```

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `expand` | `function` | `function(button, content)` | Function triggered after the expanded class is added, the 'hidden' attribute is removed from the content and aria-hidden is set to false. |
| `collapse` | `function` | `function(button, content)` | Function triggered after the expanded class is removed and aria-hidden is set to true. By default, the 'hidden' attribute is set in the transitionEnd function |
| `transitionEnd` | `function` | `function(event)` | Triggered for each transitionEnd event, use this to add the 'hidden' attribute after the content has been transitioned out of view. |
| `resizeEvent` | `function` | `function(event, expandedContent)` | ExpandedContent is an array containing all expanded elements. Use this to trigger the 'expand' function on window.resize |
| `init` | `Boolean` | `true` | Set to false if you want to manually initiate the accordion object (object.init()) |
| `buttonSelector` | `String` | `'button.accordion--button'` | QuerySelector to identify the accordion trigger button |
| `accordionExpandedClass` | `String` | `'accordion--expanded'` | Determine which class is added to the expanded content. |

### Functions

| Function | Description |
| --- | --- |
| `init()` | Manually initiate the accordion, this will expand or collapse all content according to the aria-expanded state |
| `closeAll()` | Close all collapsible content in this accordion |
| `openAll()` | Open all collapsible content in this accordion |
