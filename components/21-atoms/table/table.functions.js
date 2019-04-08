'use strict';

var ResponsiveTable = function (element, options) { // eslint-disable-line no-unused-vars
  /**
   * The table wrapper.
   */
  var table = null;

  /**
   * The table caption.
   */
  var caption = null;

  /**
   * The options for the table.
   */
  var opts = {};

  /**
   * Determine if the table should be focusable.
   */
  var determineFocusable = function () {
    var scrollableWidth = table.parentNode.querySelector('table').scrollWidth;
    var containerWidth = table.parentNode.clientWidth;

    // Check if element is scrollable.
    if (scrollableWidth <= containerWidth) {
      // If not remove the tab focus.
      table.removeAttribute('tabindex');
    }
    else {
      caption.innerText += ' ' + options.scrollableText;
    }
  };

  /**
   * Setup the responsive table.
   */
  var setupResponsiveTable = function () {
    addTableConotainerAttributes();
    addCaptionAttribute();
    determineFocusable();
  };

  /**
   * Add the ID attribute to the caption to reference is in
   * aria-labelledby on the table container wrapper.
   */
  var addCaptionAttribute = function () {
    if (!caption.hasAttribute('id')) {
      caption.setAttribute('id', 'caption');
    }
  };

  /**
   * Add attributes to the table container.
   */
  var addTableConotainerAttributes = function () {
    table.setAttribute('tabindex', '0');
    table.setAttribute('role', 'group');
    table.setAttribute('aria-labelledby', 'caption');
  };

  /**
   */
  /**
   * Entry point of the script.
   *
   * @param element
   *   The element.
   * @param options
   *   The options for the element.
   */
  var init = function () {
    if (!element) {
      return;
    }

    table = element;
    caption = table.querySelector('caption');
    opts = options;

    setupResponsiveTable();
  };

  init();
};
