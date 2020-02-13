# Header

## When to use this component

All websites and all pages must include the header.

## How it works

The header component is the first visible component on every page. The position of the header is fixed on the page.

Depending on the device's screen resolution, the header switches to one of the two following modes:

* **Desktop header**: Desktop resolutions and tablet in landscape mode
* **Mobile header**: Tablet in portrait mode and mobile resolutions

### Desktop header

The **desktop header** is used on **desktop resolutions and tablets in landscape mode**.

The desktop header can consist of four parts:

1. **Top header with Ghent logo** (always required)
2. **Menu with main navigation** (optional)
3. **Breadcrumbs** (required for most websites)
4. **Header image** (optional)

The **top header with Ghent logo** has the following components:

* Ghent logo (always required)
* Site title (optional, only for separate websites)
* Search (optional, only if applicable)
* Authentication component (optional, only if applicable)
* Language switch (optional, only for **multilingual websites with synchronous translations**)

When there is no header image, the Ghent-style seperator is shown. When there is a header image, the Ghent-style separator is not shown.

**Further specific requirements for the City of Ghent website and for separate websites are listed below.**

### Mobile header

The **mobile header** is used on **tablet in portrait mode and below (mobile resolutions)**.

The mobile header can consist of three parts, from top to bottom:

1. **Top header** with Ghent logo (always required)
2. **Site title** (optional, only for separate websites)
3. **Breadcrumbs** (required for most websites)

The **top header** has the following components:

* Ghent logo (always required)
* Search button with link (optional, only if applicable)
* Authentication component (optional, only if applicable)
* Menu button (optional, only if applicable)
* Language switch (optional, only if applicable and for **multilingual websites with synchronous translations**)

For the **top header** of the mobile header, the following conditions apply:

1. Where there is a **header image**, the header image in the mobile header is **hidden**. The Ghent-style separator is always shown.

2. When the website has a **search function**, the search function is **always shown** in the header.

3. When the website has **main navigation**, the **menu button is always shown** in the header. The menu button opens the mobile menu with the main navigation.

4. When the website has **main navigation** and also the authentication component and/or a language switch, **the authentication component and/or the language switch are integrated in the menu**. In these cases, the menu button is always shown in the header. The menu button opens the mobile menu with the main navigation and the authentication component and/or the language switch. In other words: whenever the website has main navigation, the menu button is used and the authentication component and/or the language switch (if applicable) are integrated in the mobile menu.

5. When the website has **no main navigation**, but has a **search function *and* the authentication component *and* a language switch**, the **menu button** is used and the authentication component and the language switch are integrated in the menu. The search button is always shown in the header.

Taking the above conditions into account, only the **following combinations of elements are possible** in the top part of the mobile header:

* Ghent logo + Search button + Menu button
* Ghent logo + Search button + Language switch
* Ghent logo + Search button + Authentication component
* Ghent logo + Search button
* Ghent logo + Authentication component
* Ghent logo + Language switch
* Ghent logo + Menu button
* Ghent logo + Authentication component + Language switch
* Ghent logo only

**Further specific requirements for the City of Ghent website and for separate websites are listed below.**

## Requirements

### City of Ghent website

* The desktop header includes the following elements:
    * Top header with Ghent logo, Search and authentication component
    * Breadcrumbs
    * Header image (optional)
    * The Ghent logo links to the homepage of the City of Ghent general website.
* The mobile header includes the following elements:
    * Top header with Ghent loco, Search button and authentication component
    * Breadcrumbs
* The first item of the breadcrumbs is "Home" and links to the homepage of the City of Ghent general website.
* The search function searches the content of the whole City of Ghent general website.

### Separate websites

* The **combination of the City of Ghent logo with the title of the separate website** links to the **homepage of the separate website**.
* The first item of the breadcrumbs is "Home" and links to the **homepage of the separate website**.
* The search function - if included - only searches the content of the separate website.

## Further documentation

### Authentication component

For websites that where users can authenticate themselves, the authentication component is included in the header.

* When the user *is not authenticated*, the authentication component presents a login link. See the examples.
* When the user *is authenticated*, the authentication component shows the user name of the user to indicate that the user is authenticated. In this case, the authentication component acts as a drop-down user-menu that includes links to the profile of the user (if applicable) and a logout link. See the examples.

The authentication component does not provide authentication itself but it is a way to make accessible authentication for the user and show the authentication status of the user.

The authentication mechanism can be anything from a magic link, to authentication using a user name and password, to strong authentication. The authentication mechanism that is used depends on the functional needs and requirements of the website itself.

### Language switch

For multilingual websites with synchronous translations, the language switch is included in the header. The language switch shows the current language and is a drop-down menu to let the user switch to another language. In the drop-down menu, the current language is shown first (as a label, not a link). After that, the other language in which the current page is available are shown. These other languages are shown as links that each link to the current page in those specific languages. See the examples.

### Header image

The header can include a header image. When included, the header image is only shown on desktop and tablet resolutions. The header image can have an optional caption tag. See the examples.

