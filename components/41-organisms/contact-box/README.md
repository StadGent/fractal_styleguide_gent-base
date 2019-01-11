# Contact box

## When to use this component

The contact box is used to show contact information on a page related to the content of that specific page.

## When not to use this component

## How to use this component

The contact box should be placed just after the page contents.

If there is also a <a href="{{path './document-box.html'}}">document box</a> and/or a <a href="{{path './related-box.html'}}">related box</a> on the page, the order of the boxes should be the following:

1. Contact box
2. Document box
3. Related box

If the page is a news article page with related articles, the <a href="{{path './extra-articles.html'}}">extra articles</a> component should be following right after.

## Composition and behavior of this component

The contact box consists of the following 3 components:

1. Related contacts (always shown)
2. Related location (only when applicable)
3. Authorized persons (only when applicable)

### Related contacts

The related contacts component is a list of contacts, which can be both contact categories or specific contacts. Contact categories are shown first.

When there are 1, 2 or 3 contacts, the details of the contacts are shown ("default" view).

When there are more than 3 contacts, the contacts are shown only using a list of links without details ("compact" view).

The links on the related contacts link to the corresponding contact detail page.

The related contacts are always shown in the contact box.

### Related location

The related location component shows a map with a location related to the info page where the contact box is shown.

The related location is only shown in the contaxt box when applicable (when there is a location linked to the info page).

### Authorized persons

The authorized persons component shows the persons that are authorized for the theme or subject the info page is about. The authorized persons are shown using a list of links without details.

The links on the authorized persons link to the corresponding conctact detail page.