This style guide offers some Javascript functionality to
be used in various situations or to implement part of
the behaviour of this style guide.

# Javascript conventions

Javascript files are organized per component. Each component consists of
the following files namely:

* COMPONENT.functions.js (optional if an external library is implemented)
* COMPONENT.binding.js

Depending on the implementation of the style guide either the functions.js
file or both are necessary.

Take into consideration that all Javascript included in this style guide is
dependent on:

* base.js

## Base JS

base.js contains all global variables and must be included before all other
javascript files.
Global variables are prefixed with **gent_styleguide** to avoid contamination.

### TabTrap

TabTrap enables looping over the focusable elements within the given
DOM-element.
**Use this only when the DOM-element blocks others from view, e.g.**

* a modal window
* mobile navigation

#### Properties

* hasfocusables (boolean): does the DOM-element contain focusable elements?
* next(): place focus on the next focusable element.
* back(): place focus on the previous focusable element.
* home(): place focus on the first focusable element.
* end(): place focus on the last focusable element.
* reset(): resets the TabTrap to it's original values.

#### Attention

Detecting and handling keyboard input remains the responsibility of the invoking
function!

### Usage

```javascript
var tabTrap = new gent_styleguide.TabTrap(container);

// handle keyboard input
// e.g. keyCode === 9
e.preventDefault();
tabTrap.next();
```

# Javascript enabled components

Inside this stylguide we have the following Javascript enabled components:

* Breadcrumbs
* Hamburger-menu
* Gallery
* Accordion (Faq, timeline, mijn_gent, feedback form...)

## Breadcrumbs

Style guide implementation of the
<a href="{{path '/components/detail/breadcrumbs'}}">breadcrumbs molecule</a>.

## Hamburger-menu

Style guide implementation of the
<a href="{{path '/components/detail/hamburger-menu'}}">hamburger menu</a>.

## Gallery

We omitted to create a functions.js file, since all functions are provided
by the lightbox plugin.

**Dependencies**
[baguetteBox](https://github.com/feimosi/baguetteBox.js)

## Accordion

Our own accessible accordion library used for all collapsible content.
For a detailed description of this library, see the notes on our
<a href="{{path '/components/detail/accordion'}}">accordion molecule</a>.