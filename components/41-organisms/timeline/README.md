# Timeline

## When to use this component

Use the timeline component on detail pages to present a series of milestones or events in a certain period of time in the past or in the future. The milestones or events typically lead to a certain end result or a specific end goal.

For instance:
* A process that took place or will take place
* A plan or a project in the past or in the future
* A history of events

## When not to use this component

Do not use the timeline component to present the programme of a current event. In this case use the <a href="{{path './programme'}}">programme component</a> instead.

Do not use the timeline component on overview pages or filter pages. Only use the timeline component on detail pages.

## How it works

A timeline is divided in phases using an HTML description list.

The terms of the description list represent the names of the phases in time. The descriptions (one or more) per term represent the milestones or events in the specific period of time of the phase.

The descriptions per term are shown using an <a href="{{path './accordion'}}">accordion component</a> with multiple expandable items, one for each milestone or event in the specific period of time of the phase.

Each description can consist of the following elements:

* Title (required, always visible)
* Date or subtitle (optional, always visible)
* Image gallery (optional, always visible)
* Text paragraph (optional, only visible when expanded)
* Video (optional, only visible when expanded)

When a description does *not* have a text paragraph nor a video, the description (title and/or date or subtitle and/or image gallery) is just shown without the use of accordion.

When a description *does* have at least a text paragraph or a video, an accordion is used. All accordions can be expanded or collapsed.

When a descrption has an image gallery, the image gallery shows one, two or three thumbnails depending on the device's screen resolution. When there are more images available in an image gallery than can be shown on a certain screen resolution, the last thumbnail shows that there are more images with an action to open all images.