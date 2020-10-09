# Checkboxes dynamic

## When to use this component

## When not to use this component

## How it works

## Accessibility

* See our <a href="{{path './accordion.html'}}">accordion</a>
  and <a href="{{path './modal.html'}}">modal</a> components.
* The aria-label for the filter field inside the modal indicates that the
  filtering will happen on input.  
  The result count of the filtering is wrapped in an aria-live region.

## Javascript

This display uses the accordion JS and @digipolis-gent/modal.  
We refer you to the <a href="{{path './accordion.html'}}">accordion</a> and
<a href="{{path './modal.html'}}">modal</a> components for a detailed account on how to use these libraries.

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

