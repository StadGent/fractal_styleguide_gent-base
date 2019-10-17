# Theme footer

The theme footer shows specific contact information, newsletter subscription and/or social media links.

## When to use this component

Use the theme footer when the following conditions apply:

* The web page is about a **specific City of Ghent theme** or the web page is part of a **separate website**.
* The City of Ghent theme or separate website has specfic contact information, newsletter subscription and/or social media links specific for that City of Ghent theme or that separate website.

When these conditions apply, the theme footer can be used on all types of pages about the specific City of Ghent theme or on all types of pages on the separate website.

If used, the theme footer should always be placed just above the <a href="{{path './footer.html'}}">general footer</a>.

## When not to use this component

Do not use the theme footer when the above conditions don't apply.

Do not use the theme footer to present general contact information or general social media links for the City of Ghent. This information is already included in the general <a href="{{path './footer.html'}}">footer</a>.

## Components

The theme footer is a combination of one or more of the following 3 components:

1. Contact information
2. Newsletter subscription
3. Social media

Each of these 3 components in the theme footer must contain content that applies specifically on the City of Ghent theme or separate website where it is used, in other words:

1. Contact information specific for the City of Ghent theme or separate website
2. Newsletter subscription for specific newsletters for the City of Ghent theme or separate website
3. Social media links to specific social media channels of the City of Ghent theme or separate website

Each of these components can only *once* be present in the theme footer.

The following - and no more - 7 combinations can be used:

* Contact information only
* Newsletter subscription only
* Social media only
* Contact information + Newsletter subscription
* Contact information + Social media
* Newsletter subscription + Social media
* Contact information + Newsletter subscription + Social media

The theme footer should be used in one of those 7 combinations. The order of the components in the combinations should be respected.

### Contact information

Contact information in the theme footer can include the following types of contact information, in the following order:

1. Address information (name of location, street, street number, box number, postal code, city, country)
2. Telephone number
3. E-mail address
4. Link to a contact form, website URL or web page

The order is fixed. Each type of contact information is optional, however at least one of them should be included. For each type of contact information, there can be only be one item included, except for links, where multiple items can be included. In other words: there can be zero or one addresses, zero or one telephone numbers, zero or one e-mail addresses and one or more links. The order in which the types of contact information are included always stays the same.

The items are presented in a <a href="{{path './list.html'}}">list</a> with icons. Every item has its icon. The icon that is shown depends on the type of contact information that the item represents.

## Technical usage

* This organism must be included in a top-level footer landmark.
* It must always be succeeded by the general footer organism.
