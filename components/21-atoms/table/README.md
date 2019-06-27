# Table

## When to use this component

Use the table component to let users compare information in rows and columns.

A table is a great way to present things such as:
* Financial data and numbers
* Pricing
* Features (for comparison)
* Calendars
* And many other tabular data

## When to not use this component

**Do not use the table component for layout.**

Furthermore, do not use a table component:
* To present simple, non-tabular data.
* To present information that users typically do not have to compare.

For presenting simple, non-tabular data, consider using a <a href="{{path './list.html'}}">list</a> instead. For presenting teasers of content, use the <a href="{{path './collection.html'}}">collection</a> of <a href="{{path './teaser.html'}}">teasers</a> instead.

## How it works

A table organizes information in rows and columns:

* The columns can have column headings to tell users what the columns represent.
* The rows can have row headings to tell users what the rows represent.
* The table component adds the possibility to add an optional caption tag that describes the table.

The table styling features alternating row colors.

On desktop resolutions, when it is desired, individual rows, columns or even individual cells can be highlighted by overriding the background color. The colors that can be used are `color-success`, `color-warning` en `color-error`.

On tablets in portrait mode and mobile resolutions, the table component is rendered as an HTML description list. Highlighting cannot be used here.