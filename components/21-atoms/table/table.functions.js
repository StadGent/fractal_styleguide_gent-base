'use strict';

/* global define, module */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else {
    if (typeof exports === 'object') {
      module.exports = factory();
    }
    else {
      root.ResponsiveTable = factory();
    }
  }
}(this || window, function () {
  return function (element, options) {

    /**
     * The table caption.
     */
    let caption = null;

    /**
     * Determine if the table should be focusable.
     */
    const determineFocusable = () => {
      var scrollableWidth = element.parentNode.querySelector('table').scrollWidth;
      var containerWidth = element.parentNode.clientWidth;

      // Check if element is scrollable.
      if (scrollableWidth <= containerWidth) {
        // If not remove the tab focus.
        element.removeAttribute('tabindex');
      }
      else {
        caption.innerText += ' ' + options.scrollableText;
      }
    };

    /**
     * Setup the responsive table.
     */
    const setupResponsiveTable = () => {
      // Set table container attributes.
      element.setAttribute('tabindex', '0');
      element.setAttribute('role', 'group');
      element.setAttribute('aria-labelledby', 'caption');

      // Set caption id.
      if (!caption.hasAttribute('id')) {
        caption.setAttribute('id', 'caption');
      }

      // Set th scope attributes.
      let firstRow = element.querySelector('tr');
      let tableHeadingsNodeList = firstRow.querySelectorAll('th');

      if (firstRow.getElementsByTagName('th').length === firstRow.querySelectorAll('*').length) {
        for (let i = 0; i < tableHeadingsNodeList.length; i++) {
          // If no scope attribute, set it.
          if (!tableHeadingsNodeList[i].hasAttribute('scope')) {
            tableHeadingsNodeList[i].setAttribute('scope', 'col');
          }
        }
      }

      // Set tr scope attributes if first child is a th.
      let tableRowsNodeList = element.querySelectorAll('tr');
      for (let i = 0; i < tableRowsNodeList.length; i++) {
        let firstChild = tableRowsNodeList[i].firstElementChild;

        // If no scope attribute, set it.
        if (!firstChild.hasAttribute('scope')) {
          firstChild.setAttribute('scope', 'row');
        }
      }

      determineFocusable();
    };

    /**
     * Entry point of the script.
     *
     */
    const init = () => {
      if (!element) {
        return;
      }

      caption = element.querySelector('caption');

      setupResponsiveTable();
    };

    init();

    return {init};
  };
}));
