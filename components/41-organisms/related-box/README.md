# Related box

## When to use this component

The related box is used to show links to related information on a page related to the content of that specific page.

## When not to use this component

* Do not use the related box to link to related contacts, to show a related location or authorized persons. In these cases, use the <a href="{{path './contact-box.html'}}">contact box</a> component.
* Do not use the related box to link to related documents. In this case, use the <a href="{{path './document-box.html'}}">document box</a> component.

## How to use this component

The related box should be placed just after the page contents.

If there is also a <a href="{{path './contact-box.html'}}">contact box</a> and/or a <a href="{{path './document-box.html'}}">document box</a> on the page, the order of the boxes should be the following:

1. Contact box
2. Document box
3. Related box

If the page is a news article page with related articles, the <a href="{{path './extra-articles.html'}}">extra articles</a> component should be following right after.

## Composition and behavior of this component

The related box consists of the following 3 components:

1. Related pages
2. Related tags
3. Related linked open data

At least one of these 3 components should be included in the related box.

### Related pages

The related pages component is a list of links to pages related to the page where the related box is shown.

### Related tags

The related tags component is a list of tags linked to the page where the related box is shown.

### Related linked open data

The related linked open data component is a one external link to linked open data related to the page where the related box is shown.