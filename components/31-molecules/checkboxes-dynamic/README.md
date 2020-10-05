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

### From 6 to 20 checkboxes

This display uses the accordion JS. We refer you to the <a href="{{path './accordion.html'}}">accordion</a>
component for a detailed account on how to use this library.

Create new accordions for each element with className `.checkbox-accordion`.

```js
new Accordion(element);
```

### More than 20 checkboxes

**The three checkboxes shown as preview are copies!**  
You link them to their original checkbox by providing a `data-original` attribute
with the ID of the original checkbox.  
Do not give them a name if you don't want them to show up in your FormData!

This display uses the modal JS. We refer you to the <a href="{{path './modal.html'}}">modal</a>
component for a detailed account on how to use this library.

On top of that, create a new CheckboxFilterDynamic instances
for each element with className `checkbox-filter-dynamic` .  
Don't forget to add your translation for the hiddenTagText.

```js
new CheckboxFilterDynamic(element, {hiddenTagText: 'Remove tag'})
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `filterfield` | `String` | `.checkbox-filter__filter` | Queryselector for the filterfield. |
| `previewCheckboxes` | `String` | `div.checkbox.preview` | Queryselector for the preview checkboxes. |
| `checkboxes` | `String` | `.checkbox-filter__modal div.checkbox` | Queryselector for the checkboxes. |
| `selectedContainer` | `String` | `.checkbox-filter__selected` | Queryselector for the container holding the selected filter tags. |
| `checkboxContainers` | `String` | `.checkbox-filter__checkboxes` | Queryselector for the container holding the checkboxes. |
| `openBtn` | `String` | `.checkbox-filter__open` | Queryselector for the button used to open the modal. |
| `submitBtn` | `String` | `.checkbox-filter__submit` | Queryselector for the button used to confirm the selection and close the modal. |
| `closeBtns` | `String` | `.checkbox-filter__close` | Queryselector for a list of buttons used to close the modal. |
| `resultSpan` | `String` | `.checkbox-filter__result` | Queryselector for the container to display the number of search results. |
| `makeTags` | `Boolean` | `true` | Prevent creation of tags, in case you have your own implementation. |
| `hiddenTagText` | `String` | `Remove tag` | Text used behind the remove-tag button, insert your translation here. |
| `onRemoveTag` | `function` | `function(checkbox, tag){}` | A hook to append your own logic after a tag has been removed. |

