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
      root.Menu = factory();
    }
  }
}(this || window, function () {

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
   * @param {string} [parentSelector] Queryselectorstring.
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

  return function (elem, options) {
    const openbtn = elem.querySelector('.toggle');
    const closebtn = elem.querySelector('.close');
    const drawer = elem.querySelector('.drawer');
    const overlay = elem.querySelector('.overlay');

    const tabTrap = new TabTrap(drawer); // eslint-disable-line no-undef

    /**
     * Closes the hamburger menu
     *
     * @param {event} e onclick or keydown:escape
     */
    const close = (e) => {
      if (e) {
        e.preventDefault();
      }

      drawer.classList.remove('js-opened');
      overlay.classList.remove('js-opened');
      document.removeEventListener('keydown', handleKeyboardInput);

      // return focus to the trigger
      if (openbtn) {
        openbtn.focus();
        openbtn.setAttribute('aria-expanded', false);
      }

      toggleScrollLockParent(true, drawer);

      // remove the menu from the tabindex
      setTimeout(function () {
        drawer.style.display = 'none';
      }, 500);
    };

    /**
     * Opens the hamburger menu
     *
     * @param {event} e onclick
     */
    const open = (e) => {
      if (e) {
        e.preventDefault();
      }

      // add the menu to the tabindex
      drawer.style.display = 'block';

      setTimeout(function () {
        drawer.classList.add('js-opened');
        overlay.classList.add('js-opened');
      });

      // remember the trigger
      // trigger = e.target;
      openbtn.setAttribute('aria-expanded', true);

      // set focus to the menu
      drawer.focus();

      // handle keyboard input
      document.addEventListener('keydown', handleKeyboardInput);

      toggleScrollLockParent(false, drawer);
    };

    /**
     * Handle keyboard input
     *
     * @param {object} e event
     */
    const handleKeyboardInput = (e) => {

      if (!tabTrap || !tabTrap.hasFocusables || !e) {
        return;
      }

      var keyCode = e.keyCode || e.which;

      switch (keyCode) {
        case 9: // tab
          if (e.shiftKey) {
            tabTrap.back(e);
          }
          else {
            tabTrap.next(e);
          }
          break;
        case 40: // arrow down
        case 39: // arrow right
          tabTrap.next(e);
          break;
        case 38: // arrow up
        case 37: // arrow left
          tabTrap.back(e);
          break;
        case 36: // home
          e.preventDefault();
          tabTrap.home();
          break;
        case 35: // end
          e.preventDefault();
          tabTrap.end();
          break;
        case 27: // esc
          close(e);
          break;
      }
    };

    /**
     * Add event listeners.
     */
    openbtn.addEventListener('click', open);
    closebtn.addEventListener('click', close);
    overlay.addEventListener('click', close);

    return {
      open, close
    };
  };
}));
