# Tabs

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
