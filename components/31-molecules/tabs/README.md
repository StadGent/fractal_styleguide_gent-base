# Tabs

The tabs component allows users to switch between two or more related sections of content on the same web page, displaying one section at a time.

## When to use this component

Use the tabs component when:

* Two or more related sections of content exist on a web page that can be clearly labelled.
* Users typically are not interested to see all sections.
* Users typically will not need to see all sections at once.
* The first section is more relevant than the other sections for most users.

## When not to use this component

Do not use a tabs component:

* To hide content that is essential to all users.
* When users will need to see all sections at once, for instance to compare information in the different sections.
* When the sections are equally relevant for most users or when users typically are interested in a few specific sections. In this case, use an <a href="{{path './accordion.html'}}">accordion</a> instead.
* When users have to read through all the related sections of content in order, for example, to understand a process.
* To show progress or a linear flow. In these cases, use a multi-step form or a wizard instead.
* When the amount of content in the tabs will make the page too long or too slow to load.

Alternatives to using a tabs component:

* Reduce and simplify the content so that it can be placed as is on the page, without hiding it or the need for an tabs component.
* Split the content accross multiple pages.
* Keep the content as is on the page, separate the content by headings.
* Use a <a href="{{path './table-of-contents.html'}}">table of contents component</a> to let users navigate quickly to specific sections of content.

## Accessibility

* The tabbed interface component contains tabs and their associated content panels.
* The content panel uses the role tabpanel.
* An element with role tab is used as a grouping label, providing a link for selecting the tabpanel to be rendered to the user.
* Assign the aria-controls relationship of a tab to the ID of its tabpanel.
* Authors manage the selected state of each tab by maintaining its aria-selected state.
* A tablist is the container role for a set of elements with the role attribute set to tab.

## Functionality

* Tab - only the active tab is in the tab order. The user reaches the tabbed panel component by pressing the tab key until the active tab title receives focus.
* Left Arrow - with focus on a tab, pressing the left arrow will move focus to the previous tab in the tab list and activate that tab. Pressing the left arrow when the focus is on the first tab in the tab list will move focus and activate the last tab in the list.
* Right Arrow - with focus on a tab, pressing the right arrow will move focus to the next tab in the tab list and activate that tab. Pressing the right arrow when the focus is on the last tab in the tab list will move focus to and activate the first tab in the list.
* Up arrow - behaves the same as left arrow in order to support vertical tabs
* Down arrow - behaves the same as right arrow in order to support vertical tabs
* Home - with focus on a tab, moves the focus to the first tab.
* End - with focus on a tab, moves the focus to the last tab.

## Javascript

For full documentation of the used javaScript library, see [allieTabs](https://github.com/BartDelrue/allieTabs)
