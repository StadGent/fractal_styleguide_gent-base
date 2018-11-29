'use strict';

/* global define, module, gent_styleguide */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else {
    if (typeof exports === 'object') {
      module.exports = factory();
    }
    else {
      root.OpeningHoursMonthWidget = factory();
    }
  }
})(this || window, function () {
  return function (elem, options) {
    if (typeof gent_styleguide === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('You need to include base.js.');
      return;
    }

    /**
     * Override default options with options param.
     */
    options = (() => {
      const defaults = {
        observer: {
          childList: true
        }
      };
      const keys = Object.keys(defaults);
      let options = options || {};

      for (let i = keys.length; i--;) {
        options[keys[i]] = options[keys[i]] || defaults[keys[i]];
      }

      return options;
    })();

    /**
     * Handle keyboard input to move to other dates.
     *
     * @param {Event} e
     *   The keydown event.
     */
    const handleKeyboardInput = function (e) {
      let keyCode = e.keyCode || e.which;
      let current = e.target;
      let currentPosition = +current.getAttribute('aria-posinset');

      let changeFocus = function (e, nextElem) {
        e.preventDefault();
        nextElem.click();
      };

      let next = function () {
        let nextElem = elem.querySelector('[aria-posinset="' + ++currentPosition + '"]')
          || elem.querySelector('[aria-posinset="' + 1 + '"]');
        changeFocus(e, nextElem);
      };

      let previous = function () {
        let nextElem = elem.querySelector('[aria-posinset="' + --currentPosition + '"]')
          || elem.querySelector('[aria-posinset="' + 31 + '"]')
          || elem.querySelector('[aria-posinset="' + 30 + '"]');
        changeFocus(e, nextElem);
      };

      let up = function () {
        let nextElem = elem.querySelector('[aria-posinset="' + (currentPosition - 7) + '"]')
          || elem.querySelector('[aria-posinset="' + (currentPosition + 4 * 7) + '"]')
          || elem.querySelector('[aria-posinset="' + (currentPosition + 3 * 7) + '"]');
        changeFocus(e, nextElem);
      };

      let down = function () {
        let nextElem = elem.querySelector('[aria-posinset="' + (currentPosition + 7) + '"]')
          || elem.querySelector('[aria-posinset="' + (currentPosition - 4 * 7) + '"]')
          || elem.querySelector('[aria-posinset="' + (currentPosition - 3 * 7) + '"]');
        changeFocus(e, nextElem);
      };

      let home = function () {
        let nextElem = elem.querySelector('[aria-posinset="1"]');
        changeFocus(e, nextElem);
      };

      let end = function () {
        let nextElem = elem.querySelector('[aria-posinset="31"]')
          || elem.querySelector('[aria-posinset="30"]')
          || elem.querySelector('[aria-posinset="29"]')
          || elem.querySelector('[aria-posinset="28"]');
        changeFocus(e, nextElem);
      };

      switch (keyCode) {
        case 37:
          previous();
          break;
        case 38:
          up();
          break;
        case 40:
          down();
          break;
        case 39:
          next();
          break;
        case 36:
          home();
          break;
        case 35:
          end();
          break;
      }
    };

    /**
     * Bind DOM events
     */
    const addEvents = () => {
      let days = elem.querySelectorAll('.openinghours--day:not([aria-hidden])');
      for (let i = 0; i < days.length; i++) {
        days[i].addEventListener('keydown', handleKeyboardInput);
        days[i].addEventListener('click', function (e) {
          for (let x = 0; x < days.length; x++) {
            days[x].setAttribute('tabindex', -1);
            // IE fix: trigger repaint
            days[x].classList.add('inactive');
          }
          this.setAttribute('tabindex', 0);
          // IE fix: trigger repaint
          this.classList.remove('inactive');
          this.focus();
        });
      }
    };

    /**
     * Observes the content of the widget and re-attaches events when the content changes
     */
    const observe = () => {
      let observer = new MutationObserver((mutationsList, observer) => {
        addEvents();
      });

      observer.observe(elem, options.observer);
    };

    /**
     * Initialize the component.
     */
    const init = () => {
      addEvents();
      observe();
    };

    init();

    return {init};
  };
});
