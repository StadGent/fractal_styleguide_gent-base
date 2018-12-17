# Before you start

## Important

Before you start using this style guide in your project you should read this
section!

## Component variables and sections

Components use context to style themselves. If no context is applied by a
wrapping element it gets a base styling.

In the `components/00-settings/_vars.scss` file you will find a SASS map
`$themes` that defines all section types.
Atoms then base their styling on the section they are in.

## How to define a new component
So you're looking to use this style guide but find that one of the components in your design isn't defined yet?
 
1. Make sure you checked everything of the [Can-I-define-a-new-component checklist](#can-i-define-a-new-component-checklist)
2. Categorize your component following [atomic design](03-folder-structure.md) and determine whether you're dealing with a atom, molecule or organism.
3. Start writing your code.

#### Can-I-define-a-new-component checklist
Here's a checklist with things you need to consider before defining a new component. If you can check **ALL** boxes, then yaay: go ahead and create a new component.

- [ ] I've read the `CONTRIBUTING.md` file in the root of the GIT repo.
- [ ] The component will be used in other projects.
    - (if the answer is no: define a custom component in your project code base)
- [ ] I've looked for similar looking components and couldn't find one.
    - (if you did find one: define a technical variant using the method below: [Share code between components](#share-code-between-components))
- [ ] I've looked for a component that serves the same purpose and couldn't find one
    - (if you did find one: define a variant in `{component}.config.js`)
