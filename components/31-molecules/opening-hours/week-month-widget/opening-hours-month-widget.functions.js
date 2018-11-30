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

      const changeFocus = function () {
        let nextElem;
        let i = 0;

        while (!nextElem && i < arguments.length) {
          nextElem = elem.querySelector('[aria-posinset="' + arguments[i] + '"]');
          i++;
        }

        if (nextElem) {
          e.preventDefault();
          nextElem.click();
        }
      };

      switch (keyCode) {
        case 37: // previous (left arrow)
          changeFocus(--currentPosition, 31, 30, 29, 28);
          break;
        case 38: // up (up arrow)
          changeFocus(currentPosition - 7, currentPosition + 4 * 7, currentPosition + 3 * 7);
          break;
        case 40: // down (down arrow)
          changeFocus(currentPosition + 7, currentPosition - 4 * 7, currentPosition - 3 * 7);
          break;
        case 39: // next (right arrow)
          changeFocus(++currentPosition, 1);
          break;
        case 36: // home
          changeFocus(1);
          break;
        case 35: // end
          changeFocus(31, 30, 29, 28);
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
