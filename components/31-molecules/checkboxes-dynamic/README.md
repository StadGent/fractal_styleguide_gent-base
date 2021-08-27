# Checkboxes dynamic

## When to use this component

Use the checkboxes dynamic component when you need to help users select one or more options from a list of options.

## When not to use this component

Do not use the checkboxes dynamic component when you need to help users:

* Toggle a single option on or off.
* Select one or more options from a fixed, short list of options.

In these cases, use (non-dynamic) <a href="{{path './checkboxes'}}">checkboxes</a> instead.

## How it works

The checkboxes dynamic component is an adapted version of the <a href="{{path './checkboxes'}}">checkboxes</a> component that can handle various numbers of checkboxes, both short lists of checkboxes as well as average-length lists as long lists of checkboxes.

Depending on the number of checkboxes, the checkboxes dynamic component presents the checkboxes in a different way:

* **Up to 6 checkboxes**: A normal list of checkboxes where all checkboxes are visible. This is the default view.
* **From 6 to 20 checkboxes**: The first 3 checkboxes are shown. The following checkboxes are in an <a href="{{path './accordion'}}">accordion</a>  with a "Show more" button to show or to hide them.
* **More than 20 checkboxes**: The first 3 checkboxes are shown. The full list of checkboxes is placed in a <a href="{{path './modal'}}">modal</a> that can be opened using a "Show more" button.

### Behavior with more than 20 checkboxes

When there are more than 20 checkboxes, what would normally be a long list of checkboxes, is replaced by showing only the first 3 checkboxes with a "Show more" button that opens a <a href="{{path './modal'}}">modal</a> where the list of checkboxes is placed instead.

The behavior is as follows:

1. When the users clicks the "Show more" button, the modal is opened.
2. In the modal, the list of checkboxes is shown.
3. The user can select on or more checkboxes in the modal.
4. To make finding and selecting the right checkboxes easier, the user can filter the list of checkboxes to narrow it down.
5. When ready, the user can click the "Confirm selection" button, and the selected checkboxes will be the new state.
6. Closing the modal without confirmation restores the previous state.

When the user selects one or more of the first 3 checkboxes that are already visible outside the modal, the corresponding checkboxes inside the modal are also selected.

When one or more checkboxes are selected, inside or outside the modal, the user can see this both:

* In the default view, outside the modal: When one or more of the first 3 checkboxes are selected, this is shown. When one or more of the checkboxes that are inside the modal but not one of the first 3 checkboxes, those checkboxes are added to the first 3 checkboxes and it is shown that they are selected.
* Inside the modal: The corresponding checkboxes are selected. Below the filter field, the selected options are also shown using filter tags. The user can also deselect options here. <a href="{{path './tag'}}">Read more about how tags work.</a>

## Accessibility

* See our <a href="{{path './accordion'}}">accordion</a>
  and <a href="{{path './modal'}}">modal</a> components.
* The aria-label for the filter field inside the modal indicates that the
  filtering will happen on input.  
* The result count of the filtering is wrapped in an aria-live region.

## Javascript

This display uses the accordion JS and @digipolis-gent/modal.  
We refer you to the <a href="{{path './accordion'}}">accordion</a> and
<a href="{{path './modal'}}">modal</a> components for a detailed account on how to use these libraries.

Create new accordions for each element with className `.checkbox-accordion`.

```js
new Accordion(element);
```

Create new modals for each element with className `.modal:not(.has-custom-binding)`,
**if you haven't done so already**.

```js
new Modal(element);
```

On top of that, create a new CheckboxFilterDynamic instances
for each element with className `checkbox-filter-dynamic` .  
Don't forget to add your translation for the hiddenTagText.

```js
new CheckboxFilterDynamic(element, {hiddenTagText: 'Remove tag'})
```

### More than 20 checkboxes

**The checkboxes shown as preview are copies!**  
You link them to their original checkbox by providing a `data-original` attribute
with the ID of the original checkbox.  
Do not give them a name if you don't want them to show up in your FormData!

### CheckboxFilterDynamic options parameter

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `filterField` | `String` | `.checkbox-filter__filter` | QuerySelector for the filter input field. |
| `modalPreview` | `String` | `.modal-preview` | QuerySelector for the wrapper containing modal preview checkboxes. |
| `accordionPreview` | `String` | `.accordion-preview` | QuerySelector for the wrapper containing accordion preview checkboxes. |
| `accordionBtn` | `String` | `button.accordion--button` | QuerySelector for the button that toggles the accordion. |
| `previewCheckboxes` | `String` | `div.checkbox.preview` | QuerySelector for the preview checkboxes. |
| `checkboxes` | `String` | `div.checkbox:not(.preview)` | QuerySelector for the checkboxes. |
| `selectedContainer` | `String` | `.checkbox-filter__selected` | QuerySelector for the container holding the selected filter tags. |
| `checkboxContainers` | `String` | `.checkbox-filter__checkboxes` | QuerySelector for the container holding the checkboxes. |
| `openBtn` | `String` | `.checkbox-filter__open` | QuerySelector for the button used to open the modal. |
| `submitBtn` | `String` | `.checkbox-filter__submit` | QuerySelector for the button used to confirm the selection and close the modal. |
| `closeBtns` | `String` | `.checkbox-filter__close` | QuerySelector for a list of buttons used to close the modal. |
| `resultSpan` | `String` | `.checkbox-filter__result` | QuerySelector for the container to display the number of search results. |
| `makeTags` | `Boolean` | `true` | Prevent creation of tags, in case you have your own implementation. |
| `hiddenTagText` | `String` | `Remove tag` | Text used behind the remove-tag button, insert your translation here. |
| `onRemoveTag` | `function` | `function(checkbox, tag){}` | A hook to append your own logic after a tag has been removed. |

