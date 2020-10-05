# JavaScript

This style guide offers some JavaScript functionality to
be used in various situations or to implement part of
the behaviour of this style guide.

All JavaScript libraries and code in this style guide have been **thoroughly
tested for accessibility**.  
As this style guide aims to be platform and framework independent,
you are free to use your own favorite libraries or write your own code
**as long as you provide the same functionality** and
meet the same **accessibility requirements**.

All external libraries can be found in the /vendor directory.

## Using JavaScript

Javascript files are organized per component. Each component consists of
the following files namely:

* COMPONENT.functions.js (optional if an external library is implemented)
* COMPONENT.binding.js

Depending on the implementation of the style guide either the functions.js
file or both are necessary.

## Javascript enabled components

Inside this stylguide we have the following Javascript enabled components:

* Modal (Main Menu, Filter...)  
  **Dependencies**
  [@digipolis-gent/modal](https://www.npmjs.com/package/@digipolis-gent/modal)
* Gallery (Image Gallery, Image Wall)  
  **Dependencies**
  [baguetteBox](https://www.npmjs.com/package/baguettebox.js)
* Tabs  
  **Dependencies**
  [AllieTabs](https://www.npmjs.com/package/allietabs)
* Accordion (FAQ, Timeline, Language Switcher, Authentication, Opening Hours...)  
  Our own accessible accordion library used for all collapsible content.
  For a detailed description of this library, see the notes on our
  <a href="{{path '/components/detail/accordion'}}">accordion molecule</a>.
* Breadcrumbs  
  Style guide implementation of the
  <a href="{{path '/components/detail/breadcrumbs'}}">breadcrumbs molecule</a>.
* Table  
  Provides accessibility features for a responsive <a href="{{path '/components/detail/table'}}">table molecule</a>.
* Checkboxes dynamic    
  On top of using the accordion and modal, this component has it's own JS to link the preview checkboxes to their
  modal counterpart, the modal checkboxes to the filter tags and so on.
