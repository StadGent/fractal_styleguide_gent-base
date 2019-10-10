# Spinner

The spinner component helps users see that information on a part of a page is loading or refreshing.

## When to use this component

Use the spinner component when an action triggered by a user on a page triggers a background process, request of calculation that when completed loads new information on a part of the page. The load time is typically expected to be longer than a normal load time.

## When not to use this component

Do not use the spinner component:

* When a link is clicked.
* On any full page reload or refresh.
* When the user did not trigger any action.

In these cases, do not use any spinner component or similar. The load time is expected to be a normal load time.

## Usage

The spinner will center horizontally and vertically in the `.spinner` container. Make sure the `.spinner` container gets the appropriate width and height so that the spinner is also visually centered horizontally and vertically in the container where it appears.
