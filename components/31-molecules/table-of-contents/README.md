# Table of contents

The table of contents component helps users understand the content and the structure of a web page and lets users looking for something specific navigate quickly to a specific section of the web page.

## When to use this component

Use the table of contents component on a web page when:

* The web page contains a lot of text (web page mainly consists of <a href="{{path './paragraph.html'}}">paragraphs</a>)
* The content of the page has a specific structure
* The content of the page is clearly separated by headings (typically h2 <a href="{{path './heading.html'}}">headings</a>)

## When not to use this component

Do not use the table of contents component on a web page when:

* The web page does not contain that many text. In this case, the table of contents component is unecessary.
* The amount of content on the web page will make the page too long or too slow to load. In this case, split the content accross multiple pages.
* The content of the page is not clearly separated by headings. In this case, the table of contents component should not be used.

## How it works

### General

The table of contents component is a list of anchor links. Each anchor link points to a section withing the web page. The sections typically have a clear title (typically h2 headings). The titles of the sections are used as the link text for the anchor links.

### Responsive behavior

On desktop and tablet resolutions, the anchor links are shown in a horizontal way with a separator between them. When necessary, the anchor links are wrapped to new lines.

On mobile resolutions, the anchor links are shown in a vertical way.