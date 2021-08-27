# Contact details

## When to use this component

Use the contact details component to show contact information of an entity, location or person on a detail page.

## When not to use this component

Do not use the contact details component to show other information than contact information. 

## How it works

The contact details component can include the following types of contact information, in the following order:

1. Address information (name of location, street, street number, box number, postal code, city, country)
2. Telephone number
3. Mobile phone number
4. Fax number
5. E-mail address
6. Website URL

The order is fixed. Each type of contact information is optional, however at least one of them should be included. For each type of contact information, there can be one or more items included when applicable. For instance: there can be multiple addresses or multiple telephone numbers. The order in which the types of contact information are included always stays the same.

The items are presented in a <a href="{{path './list'}}">list</a> with icons. Every item has its icon. The icon that is shown depends on the type of contact information that the item represents.

The contact details component can also optionally include an image of the entity, location or person. The image must be a square image.

## Styles

The contact details component has two different styles that can be used:

* The default version
* The inverted, light version

See the examples.