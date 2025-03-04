# Button

## When to use this component

A button is used to trigger an action.

## When not to use this component

Do not use a button to trigger navigation. In this case, use a <a href="{{path './link'}}">link</a>.

## How it works

### Styling

To style a button, add the `.button` class to a `<button>` element, and one of the following classes for specific styling.

There are five types of styling for buttons:

1. **Primary** button styling, for the primary and most common actions: `.button-primary`
2. **Secondary** button styling, for less common actions: `.button-secondary`
3. **Alert** button styling, for actions that need attention and that might be destructive and result in loss of data: `.button-alert`
4. **Secondary alert** button styling, for actions that need attention and that might be destructive and result in loss of data: `.button-secondary-alert`
5. **Success** button styling, for actions where you want to highlight success: `.button-success`

### Size

Buttons come in different sizes. A button can have the default size, there is also a large variant and a small variant. See the examples. Use the size of a button to indicate its importance relative to other user interface components.

By default, the width of a button is automatically resized depending on the length of the label. Buttons can also behave as a block. In this case they stretch to the available width in the surrounding element. See the exammples.

### Icons

Buttons can have an <a href="{{path './icon'}}">icon</a>, aligned at the right-hand side or at the left-hand side. The icon can help the user identify a certain action. However, the icon should not be *needed* to understand the action. In all cases, the label of the button itself should be clear by itself and should represent the corresponding action.

### HTML
- Buttons are ideally `<button>` elements with a class for their styling (see above)
- In the case of an `<input>` element, there are fallbacks for the `button` and `submit` type but with limited background-animation

## Web accessibility

* A button should always look like a button.
* State changes cannot be indicated by color alone.