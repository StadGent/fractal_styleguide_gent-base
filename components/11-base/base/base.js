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

  /**
   * Toggle a scroll lock on a visible parent modal or on the body.
   *
   * @param {boolean} release or lock parent.
   * @param {object} elem DOM element.
   * @param {string} parentSelector Queryselectorstring.
   */
  const toggleScrollLockParent = (release, elem, parentSelector) => {
    parentSelector = parentSelector || '.modal.visible';

    const parentModal = elem.parentNode.closest(parentSelector);
    if (parentModal) {
      parentModal.style.overflow = release ? '' : 'hidden';
    }
    else {
      document.body.style.overflow = release ? '' : 'hidden';
    }
  };

  return {
    TabTrap: TabTrap,
    toggleScrollLockParent: toggleScrollLockParent
  };
})();
