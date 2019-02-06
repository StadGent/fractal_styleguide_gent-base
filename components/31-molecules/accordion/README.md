# Accordion

## When to use this component

An accordion component is used to:

* Show an overview of sections of multiple, related sections of content, that can be read independently from each other and which users typically are not interested to see all, but rather one or a few specific sections.
* Make it possible for users to show or hide those section as needed.
* Hide a simple piece or section of content that is advanced or that is only necessary for a minority of users (progressive disclosure principle).

## When not to use this component

* Do not use an accordion component to hide content that is essential to all users.
* Do not use an accordion component when the amount of content in the items (when expanded) will make the page too long or too slow to load. Only use accordion components for simple content.

Alternatives to using an accordion component:

* Reduce and simplify the content so that it can be placed as is on the page, without hiding it or the need for an accordion component.
* Split the content accross multiple pages, especialy if the amount of content is large (more than one text paragraph or if also other components than text paragraphs are needed to convey the message).
* Keep the content as is on the page, separate the content by headings.
* Use a <a href="{{path './table-of-contents.html'}}">table of contents component</a> to let users navigate quickly to specific sections of content.

## How it works

There are two types of accordions:
* Single expandable item
* Multiple expandable items

### Single expandable item

Accordions with one single expandable item are displayed with a chevron on the right-hand side.

* When collapsed, the chevron points down, to indicate that it can be expanded.
* When expanded, the chevron points up, to indicate that it can be collapsed.

By default, the single expandable item is collapsed.

The single expandable items has a label that tells what content is in the item. Do not start the label with a verb that describes the collapsing or expanding. This is not necessary because the item is already in an accordion. For example, if the item is a list of opening hours deze week, don't use a label "Show opening hours this week" but use "Opening hours this week" instead.

### Multiple expandable items

Accordions with multiple expandable items are displayed in a list of items with labels with a plus or a minus icon on the left-hand side of each item.

* When an item is collapsed, the plus icon is shown, to indicate that it can be expanded.
* When an item is expanded, the minus icon is shown, to indicate that it can be collapsed.

By default, all the expandable items are collapsed. Multiple items can be expanded at the same time.

The expandable items each have a label that tells what content is in the item. Do not start the label with a verb that describes the collapsing or expanding. This is not necessary because the item is already in an accordion. For example, if an item is about transportation by train, don't use a label "Show transportation by train" but use "Transportation by train" instead.

## Markup

* Multiple expandable items must always be contained in an unordered- or description list.
* The toggle must be of type button and preferably wrapped in an element with (implicit) role header.
* The toggle button has both aria-expanded to indicate it's current state and aria-controls to indicate which element it controls.

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
