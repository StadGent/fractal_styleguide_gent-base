'use strict';

window.gent_styleguide = (function () {

  /**
   * Generates a tabTrap object
   *
   * @param {object} container DOM-element
   * @constructor
   */
  function TabTrap(container) {
    let focusables = getFocusables(container);

    /**
     * Returns all focusable elements within a given container.
     *
     * @param {object} container hamburger DOM-element
     * @return {array} focusable elements
     */
    function getFocusables(container) {
      let focusables = container.querySelectorAll(
        'a[href], ' +
        'area[href], ' +
        'input:not([disabled]):not([hidden]), ' +
        'select:not([disabled]), ' +
        'textarea:not([disabled]), ' +
        'button:not([disabled]), ' +
        '[tabindex="0"]'
      );
      return Array.prototype.slice.call(focusables);
    }

    this.setFocusables = function () {
      focusables = getFocusables(container);
    };

    this.next = function (e) {
      let active = document.activeElement;
      if (active && active === focusables[focusables.length - 1]) {
        focusables[0].focus();
        e.preventDefault();
      }
    };

    this.back = function (e) {
      let active = document.activeElement;
      if (active && active === focusables[0]) {
        focusables[focusables.length - 1].focus();
        e.preventDefault();
      }
    };

    this.home = function () {
      focusables[0].focus();
    };

    this.end = function () {
      focusables[focusables.length - 1].focus();
    };

    this.hasFocusables = focusables && focusables.length > 0;
  }

  const request = (url, callback, {
    headers = {},
    options = {
      language: 'en'
    }
  } = {}) => {
    let defaultHeaders = {
      'Accept': 'text/html',
      'Accept-Language': options.language
    };

    headers = Object.assign(defaultHeaders, headers);

    let xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.options = options;
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        callback(xmlhttp, xmlhttp.responseText);
      }
      else if (typeof xmlhttp.options.error === 'function' && xmlhttp.readyState === 4 && xmlhttp.status !== 200) {
        xmlhttp.options.error(xmlhttp);
      }
    };
    xmlhttp.open('GET', url, true);
    Object.keys(headers).forEach(key => { xmlhttp.setRequestHeader(key, headers[key]); });
    xmlhttp.send();
  };

  return {
    request,
    TabTrap
  };
})();
