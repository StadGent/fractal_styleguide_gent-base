'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else if (typeof exports === 'object') {
    module.exports = factory();
  }
  else {
    root.Breadcrumbs = factory();
  }
}(this || window, function () {

  /**
   * Breadcrumb constructor.
   *
   * @param {HTMLElement} elem
   *   The root .breadcrumb element.
   * @param {Object} [options]
   *   Optional options object (currently unused).
   *
   * @return {Object}
   *   An object representing the Breadcrumbs instance. Currently empty, but
   *   reserved for future public API methods.
   */
  return function (elem, options) {
    let list = elem.querySelector('ol, ul');
    if (!list) {
      return {};
    }

    let expandable = null;

    /**
     * Get the current list items for this breadcrumb.
     *
     * @return {NodeListOf<HTMLLIElement>}
     *   List items.
     */
    const getItems = () => list.querySelectorAll('li');

    /**
     * Remove the expandable for the current breadcrumb.
     */
    const removeExpandable = () => {
      if (expandable && expandable.parentNode) {
        expandable.parentNode.removeChild(expandable);
      }
      expandable = null;
    };

    /**
     * Expand the entire breadcrumb.
     *
     * @param {Event} e
     *   Event object.
     */
    const expand = e => {
      if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
      }

      removeExpandable();
      elem.setAttribute('aria-expanded', 'true');
      list.focus();
    };

    /**
     * Add an element to the DOM that makes it possible to expand the breadcrumb.
     *
     * @param {number} position
     *   Index of the new element.
     */
    const insertExpandable = position => {
      const expandLink = document.createElement('a');
      expandLink.textContent = '...';
      expandLink.href = '#';

      // Attach event listener on this instance only.
      expandLink.addEventListener('click', expand);

      expandable = document.createElement('li');
      expandable.classList.add('expandable');
      expandable.appendChild(expandLink);

      // Insert before the requested position.
      list.insertBefore(expandable, list.children[position]);
      list.tabIndex = -1;
    };

    /**
     * Collapse the breadcrumb for the given media query result.
     *
     * @param {MediaQueryList|MediaQueryListEvent} query
     *   The matchMedia object or its event.
     */
    const collapse = query => {
      // In some browsers the callback receives a MediaQueryListEvent.
      const matches = query.matches;

      const items = getItems();

      // Remove any old expandable for this breadcrumb.
      removeExpandable();

      // Collapse when more than 5 items on tablet+,
      // or more than 2 items on mobile screens.
      if ((matches && items.length > 5) || (!matches && items.length > 2)) {
        elem.setAttribute('aria-expanded', 'false');
        insertExpandable(items.length - 2);
      }
      else {
        // When not collapsed, remove attribute for clarity.
        elem.removeAttribute('aria-expanded');
      }
    };

    /**
     * Initialize functionality for this breadcrumb instance.
     */
    const init = () => {
      const query = window.matchMedia('(min-width: 768px)');

      // Execute once on page load.
      collapse(query);

      // Listen to changes in viewport width.
      if (typeof query.addEventListener === 'function') {
        query.addEventListener('change', collapse);
      }
      else if (typeof query.addListener === 'function') {
        // Fallback for older browsers.
        query.addListener(collapse);
      }
    };

    init();

    return {};
  };
}));
