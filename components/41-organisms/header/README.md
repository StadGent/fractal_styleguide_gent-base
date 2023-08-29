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

The **top header with Ghent logo** has the following components:

* Ghent logo (always required)
* Site title (optional, only for separate websites)
* Search (optional, only if applicable)
* Language switch (optional, only for **multilingual websites with synchronous translations**)

To get an idea of different combinations for the desktop header, how they look and how they work, see the examples.

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
* Menu button (optional, only if applicable)
* Language switch (optional, only if applicable and for **multilingual websites with synchronous translations**)

For the **top header** of the mobile header, the following conditions apply:

1. When the website has a **search function**, the search function is **always shown** in the header.

2. When the website has **main navigation**, the **menu button is always shown** in the header. The menu button opens the mobile menu with the main navigation.

3. When the website has **main navigation** and also a language switch, **the language switch is integrated in the menu**. In these cases, the menu button is always shown in the header. The menu button opens the mobile menu with the main navigation and the language switch. In other words: whenever the website has main navigation, the menu button is used and the language switch (if applicable) is integrated in the mobile menu.

4. When the website has **no main navigation**, but has a **search function *and* a language switch**, the **menu button** is used and the language switch is integrated in the menu. The search button is always shown in the header.

Taking the above conditions into account, only the **following combinations of elements are possible** in the top part of the mobile header:

* Ghent logo + Search button + Menu button
* Ghent logo + Search button + Language switch
* Ghent logo + Search button
* Ghent logo + Language switch
* Ghent logo + Menu button
* Ghent logo only

To get an idea of different combinations for the mobile header, how they look and how they work, see the examples.

**Further specific requirements for the City of Ghent website and for separate websites are listed below.**

## Requirements

### City of Ghent website

* The desktop header includes the following elements:
    * Top header with Ghent logo, Search and authentication component
    * Breadcrumbs
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

### Language switch

For multilingual websites with synchronous translations, the language switch is included in the header. The language switch shows the current language and is a drop-down menu to let the user switch to another language. In the drop-down menu, the current language is shown first (as a label, not a link). After that, the other language in which the current page is available are shown. These other languages are shown as links that each link to the current page in those specific languages. See the examples.
