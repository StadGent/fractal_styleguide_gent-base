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
      root.Modal = factory();
    }
  }
})(this || window, function () {
  return function (modal, options) {
    if (typeof gent_styleguide === 'undefined') {
      console.error('You need to include base.js.'); // eslint-disable-line no-console
      return;
    }

    if (!modal || !modal.id) {
      return;
    }

    if (!options) {
      options = {};
    }

    let triggers = [];
    let trigger;

    /**
     * A Gent styleguide class to create a tabTrap.
     * @type {TabTrap}
     */
    const tabTrap = new gent_styleguide.TabTrap(modal); // eslint-disable-line no-undef

    /**
     * Initialise the component.
     */
    const init = () => {
      triggers = document.querySelectorAll(`[aria-controls=${modal.id}]`);

      if (triggers.length === 0) {
        return;
      }

      modal.setAttribute('tabindex', '-1');
      modal.setAttribute('aria-hidden', 'true');

      for (let i = triggers.length; i--;) {
        trigger = triggers[i];
        trigger.setAttribute('aria-expanded', 'false');
        trigger.addEventListener('click', open);
      }

      /**
       * A list of elements to trigger closing the modal.
       * At least one must have the button role.
       * @type {NodeList}
       */
      const closeBtns = modal.querySelectorAll(
        options.closeBtns || '.modal__close'
      );
      for (let i = closeBtns.length; i--;) {
        closeBtns[i].addEventListener('click', close);
      }

      /*
      Custom event triggered on resize and on init.
      For instance for when the modal is not hidden on all screen sizes.
       */
      if (options.resizeEvent) {
        options.resizeEvent();
        addResizeEvent();
      }
    };

    /**
     * Open the modal.
     */
    const open = () => {
      modal.classList.add('visible');
      modal.setAttribute('aria-hidden', 'false');
      trigger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyboardInput);
      modal.focus();
    };

    /**
     * Close the modal.
     */
    const close = () => {
      modal.classList.remove('visible');
      modal.setAttribute('aria-hidden', 'true');
      trigger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyboardInput);
      trigger.focus();
    };

    /**
     * Handle keyboard input
     * @param {object} e event
     */
    const handleKeyboardInput = e => {
      if (!tabTrap || !tabTrap.hasFocusables || !e) {
        return;
      }

      let keyCode = e.keyCode || e.which;

      switch (keyCode) {
        case 9: // tab
          if (e.shiftKey) {
            tabTrap.back(e);
          }
          else {
            tabTrap.next(e);
          }
          break;
        case 27: // esc
          e.preventDefault();
          close();
          break;
      }
    };

    /**
     * Add a user defined throttled resizeEvent.
     */
    const addResizeEvent = () => {
      let resizeTimer;

      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(options.resizeEvent, 250);
      });
    };

    init();

    return {};
  };
});
