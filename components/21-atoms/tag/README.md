# Tag

## When to use this component

A tag is used to indicate that certain content is related to a certain subject by using a specific keyword.

For instance, if a piece of content is related to recycling, a tag could be used with the keyword "recycling", to indicate that the piece of content is related to recycling.

A tag allows to quickly scan on overviews which pieces of content are or aren't related to a certain subject. It also allows to generate specific overviews with all content about a certain subject. On detail pages, a tag shows what subject the page is about.

## Types of tags and their usage within the style guide

There are three types of tags, each with a unique use and presentation:
* Default tag
* Filter tag
* Span tag

### Default tag

The default tag is used on detail pages to indicate that the content on that detail page is about the specific subject that is represented by the tag. One or more defaull tags can be used. 

On detail pages, the default tags are also shown as an indicator that there is other content on the website about the same subject(s). Each default tag therefore has a link to an overview page that collects all content about the specific subject that is represented by the tag.

### Filter tag

The filter tag is used on pages using the <a href="{{path './filter-layout.html'}}">filter layout</a> to indicate active filters. One or more filter tags can be shown if the page features one or more filters. Everytime the user selects a filter value the corresponding filter tag is shown to show the filter is active. Everytime the user deselects a filter value, the corresponding filter tag is hidden again to show that the filter is no longer active. This way, the user always has an easy way to see which filters are active at a specific point. Finally, the user can also click a filter tag to deselect the corresponding filter.

### Span tag

The span tag is used in <a href="{{path './teaser.html'}}">teasers</a>, typically in a teaser collection on overview pages, to show that the content that the teaser represents is about the specific subject that is represented by the tags. In a teaser, one or more span tags can be used. Span tags are **not clickable**, they just serve a visual mean on overview page to show that content is related to a specific subject.