# Programme

## When to use this component

Use the programme component on detail pages to present the programme of a current event.

## When not to use this component

Do not use the programme component to present a series of milestones or events in a certain period of time in the past or in the future. Do not use the programme component when there are milestones or events that lead to a certain end result or a specific end goal. In these cases, use the <a href="{{path './timeline.html'}}">timeline component</a> instead.

Do not use the programme component on overview pages or filter pages. Only use the programme component on detail pages.

## How it works

A programme is divided in slots using an HTML description list. The terms of the description list represent the names of the slots in the programme.

A slot is typically:

* A day or a date
* A part of a day (for instance, morning, afternoon, evening)
* A time unit of a few days (for instance, a weekend)

For each slot, the correspondig term there is one description linked with the corresponding term. This description contains the events that take place in that particular slot.

The events that take place in a particular slot are shown using a <a href="{{path './collection.html'}}">collection</a> of <a href="{{path './teaser.html'}}">teasers</a>, shown in a grid of maximum 3 columns. For the teasers, the inverted styling is used.

Each teaser represents an event that takes place in a slot and can consist of the following elements:

* Title (required)
* Date and/or time of the event or subtitle (optional)
* Image (optional)
* Summary text (optional)
* Link (required)

When clicking the link of the teaser, a <a href="{{path './modal.html'}}">modal</a> opens containing all information regarding the event:

* Title (required)
* Date or subtitle (optional)
* Image gallery (optional)
* Text paragraph (optional)
* Video (optional)

When an image gallery is included, the image gallery shows one, two or three thumbnails depending on the device's screen resolution. When there are more images available in an image gallery than can be shown on a certain screen resolution, the last thumbnail shows that there are more images with an action to open all images.
