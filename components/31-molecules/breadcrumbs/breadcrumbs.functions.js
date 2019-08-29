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
      root.Breadcrumbs = factory();
    }
  }
}(this || window, function () {

  return function (elem, options) {
    let list = elem.querySelector('ol, ul');
    let items = elem.querySelectorAll('li');
    let self = this;

    /**
     * Add an element to the DOM that makes it possible to expand the breadcrumb.
     *
     * @param {Int} position
     *   Index of the new element.
     */
    const insertExpandable = position => {
      let a = document.createElement('a');
      a.textContent = '...';
      a.href = '#';

      // attach event listener.
      a.addEventListener('click', expand);

      // Add it to the DOM
      self.expandable = document.createElement('li');
      self.expandable.classList.add('expandable');
      self.expandable.appendChild(a);
      list.insertBefore(self.expandable, list.children[position]);
    };

    /**
     *  Collapse the breadcrumb.
     *
     * @param {MediaQueryList} query
     *   The results of the matchMedia function.
     */
    const collapse = query => {
      // Remove any old expandables.
      removeExpandable();

      // Collapse when more than 5 items on tablet+,
      // or more than 2 items on mobile screens
      if ((query.matches && items.length > 5) ||
      (!query.matches && items.length > 2)) {
        elem.setAttribute('aria-expanded', false);
        insertExpandable(items.length - 2);
      }
    };

    /**
     * Remove the expandable for the current breadcrumb.
     */
    const removeExpandable = () => {
      if (self.expandable) {
        self.expandable.parentNode.removeChild(self.expandable);
      }
    };

    /**
     * Expand the entire breadcrumb.
     *
     * @param {Event} e
     *   Event object.
     */
    const expand = e => {
      removeExpandable();
      elem.setAttribute('aria-expanded', true);
    };

    /**
     * Initialize functionality.
     */
    const init = () => {
      let query = window.matchMedia('(min-width: 768px)');
      collapse(query); // Execute once on page load.
      query.addListener(collapse);
    };

    init();

    return {};
  };
}));
