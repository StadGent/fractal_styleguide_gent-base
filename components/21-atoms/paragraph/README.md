# Paragraph

## When to use this component

A paragraph is used to present a portion of text (a paragraph). A paragraph consists of one or more sentences.

## When not to use this component

To present text that is not a complete sentence.

## Composition and behavior of this component

Next to normal text, a paragraph can also contain:

* Links (internal, external, download, mailto).
* Words or parts of sentences emphasized by *italic* or **bold** text.

A paragraph has a certain behavior:

* On **desktop resolutions and tablets in landscape mode**, a paragraph should always have a width of 7/12 based on the container. This means the container needs to make sure that paragraphs can never be bigger then 7/12 of itself.
* On **tablets in portrait mode and mobile resolutions**, a paragraph should always be the full width of the container.
* The **text** in a paragraph:
   * Should always have a max-width of 40 rems.
   * Can **never** be centered.
   * Can **never** be justified.