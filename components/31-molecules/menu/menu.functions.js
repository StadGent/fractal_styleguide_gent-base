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
  return function (elem, options) {
    if (typeof gent_styleguide === 'undefined') {
      console.error('You need to include base.js.'); // eslint-disable-line no-console
      return;
    }

    const openbtn = elem.querySelector('.toggle');
    const closebtn = elem.querySelector('.close');
    const drawer = elem.querySelector('.drawer');
    const overlay = elem.querySelector('.overlay');

    const tabTrap = new gent_styleguide.TabTrap(drawer); // eslint-disable-line no-undef

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
      e.preventDefault();

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
  };
}));
