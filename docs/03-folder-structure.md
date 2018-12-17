# Folder structure

ⓘ All components defined within this styleguide are categorized following the [atomic design](http://atomicdesign.bradfrost.com/table-of-contents/) pattern by Brad Frost.   

## Component categorization
Components are always defined as one of these

- **Base**:  Contains global configuration (ex.: colors or fonts used in theme).
- **Atoms**: Smallest possible components; can’t be broken down any further without ceasing to be functional.
- **Molecules**: Relatively simple groups of UI elements functioning together as a unit
- **Organisms**: Relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms
- **Pages**: specific instances of templates that show what a UI looks like with real representative content in place.

## Component folder structure
Since the goal is to make a healthy mix between functional components and keeping our code DRY when defining components, some components will share code but still be defined as separate components.

### Share code between components
Sometimes a component has a similar technical logic, but an entirely different functional meaning. For example: an alert box and a CTA could look the same, but they're to separate components that can be used elsewhere on the page.

When you bump into a situation like that, do this:  

- Define **1** _base_ component that: 
    - contains all markup and styling. 
    - is configurable.
    - is hidden in the UI.
        
> **But hey! shouldn't variants be defined into the same comonent?**  
> Good point... We're making the distinction between _functional_ and _technical_ variants. _Functional_ variants should be defined as a real/visible variant for your component. _Technical_ variants just share code and can therefore be separate components. 

- Define **multiple** _variant_ components that:
    - doesn't have its own markup and/or styling
    - include the base component with configuration
    
#### An example
Two components - _alert_ and _CTA_ should both be displayed as a box with a background color, title, description and (optional) button. They look the same visually, but have other functional purposes.

**Folder structure**:
```nolang
31-molecules
├── 
│   └── CTA
│      └── cta.html.twig
│      └── cta.config.js
│   └── alert
│      └── alert.html.twig
│      └── alert.config.js
└── box.html.twig
└── box.config.js
└── _box.scss
```

- **Box** is a configurable component that can output either a _CTA_ or _alert_, depending on the configuration it receives.
- **Box** is hidden in the UI, because it can never be used as a standalone component.

**cta.html.twig**
```twig
{% include '@box' with _self.context %}
```

**cta.config.js**
```js
module.exports = {
  title: 'CTA',
  status: 'alpha',
  context: {
    title: "Call to action",
    description: "Click the button below and find out what happens.",
    href: "https://gph.to/2BpmIKC",
    link: "Click me",
    icon: "link"
  },
};
```
