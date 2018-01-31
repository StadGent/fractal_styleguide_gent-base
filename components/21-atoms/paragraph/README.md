# Paragraphs

A paragraph has a certain behavior.

* It should always have a width of 7/12 (except for mobile) based on the
  container.
  This means the container needs to make sure that paragraphs can never be
  bigger then 7/12 of itself.
* For a mobile layout a paragraph is always full width.
* It always has a max-width of 40 rems on desktop.
* A paragraph can **never** be centered!
* A paragraph can **never** be justified!

Examples of paragraphs are defined in paragraph variants:

* <a href="{{path './paragraph--default'}}">Paragraph default</a>
* <a href="{{path './paragraph--caption-text'}}">Paragraph-caption text</a>
* <a href="{{path './paragraph--small-text'}}">Paragraph-small text</a>
* <a href="{{path './paragraph--left-text'}}">Paragraph-left aligned text</a>
* <a href="{{path './paragraph--right-text'}}">Paragraph-right aligned text</a>

