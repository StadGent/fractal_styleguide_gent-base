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
      root.Accordion = factory();
    }
  }
}(this || window, function () {

  return function (elem, options) {

    let expandedContent = [];

    /**
     * Override default options with options param.
     */
    options = (() => {
      const defaults = {
        expand: (button, content) => {
          content.style.maxHeight = `${content.scrollHeight}px`;
        },
        collapse: (button, content) => {
          content.style.maxHeight = 0;
        },
        transitionEnd: (e) => {
          if (e.propertyName !== 'max-height') {
            return;
          }
          if (!e.currentTarget.classList.contains('accordion--expanded')) {
            e.currentTarget.setAttribute('hidden', 'hidden');
          }
        },
        resizeEvent: (e, expandedContent) => {
          for (let i = expandedContent.length; i--;) {
            options.expand(null, expandedContent[i]);
          }
        },
        init: true,
        buttonSelector: 'button.accordion--button',
        accordionExpandedClass: 'accordion--expanded'
      };
      const keys = Object.keys(defaults);
      options = options || {};

      for (let i = keys.length; i--;) {
        options[keys[i]] = options[keys[i]] || defaults[keys[i]];
      }

      return options;
    })();

    const buttons = elem.querySelectorAll(options.buttonSelector);

    /**
     * Toggle aria-expanded attributes and trigger visibility Change function.
     *
     * @param {event} e The triggered event.
     */
    const toggle = (e) => {
      e.preventDefault();
      const button = e.currentTarget;
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
      setVisibility(button);
    };

    /**
     * Handle keyboard input: arrows, home & end.
     *
     * @param {event} e The triggered event.
     */
    const keyDown = (e) => {
      const keyCode = e.keyCode || e.which;
      let current = (() => {
        for (let i = buttons.length; i--;) {
          if (buttons[i] === e.currentTarget) {
            return i;
          }
        }
      })();
      switch (keyCode) {
        case 40: // arrow down
          e.preventDefault();
          if (current === buttons.length - 1) {
            current = -1;
          }
          buttons[current + 1].focus();
          break;
        case 38: // arrow up
          e.preventDefault();
          if (current === 0) {
            current = buttons.length;
          }
          buttons[current - 1].focus();
          break;
        case 36: // home
          e.preventDefault();
          buttons[0].focus();
          break;
        case 35: // end
          e.preventDefault();
          buttons[buttons.length - 1].focus();
          break;
      }
    };

    /**
     * Add events to buttons.
     * Listen for animationEnd on accordionContent.
     */
    const addEvents = () => {
      const onResize = (e) => {
        options.resizeEvent(e, expandedContent);
      };

      for (let i = buttons.length; i--;) {
        const button = buttons[i];
        button.addEventListener('click', toggle);
        button.addEventListener('keydown', keyDown);

        const accordionContent = elem.querySelector(`#${button.getAttribute('aria-controls')}`);
        accordionContent.addEventListener('transitionend', options.transitionEnd);

        if (options.resizeEvent) {
          window.addEventListener('resize', onResize);
        }
      }

      window.addEventListener('hashchange', hashEvent);
    };

    /**
     * Hide or show the accordion content.
     *
     * @param {Object} button  The accordion button.
     * @param {boolean|false} isInitial  True if this is the first run
     *   triggered by init().
     */
    const setVisibility = (button, isInitial) => {

      const accordionContent = elem.querySelector(`#${button.getAttribute('aria-controls')}`);
      if (!accordionContent) {
        return;
      }

      if (button.getAttribute('aria-expanded') === 'true') {
        accordionContent.classList.add(options.accordionExpandedClass);
        accordionContent.setAttribute('aria-hidden', 'false');
        accordionContent.removeAttribute('hidden');
        expandedContent.push(accordionContent);
        options.expand(button, accordionContent);
      }
      else {
        accordionContent.classList.remove(options.accordionExpandedClass);
        accordionContent.setAttribute('aria-hidden', 'true');
        if (isInitial) {
          accordionContent.setAttribute('hidden', 'hidden');
        }
        expandedContent.filter(content => content !== accordionContent);
        options.collapse(button, accordionContent);
      }
    };

    /**
     * Set all attributes and toggle visibility accordingly.
     */
    const setInitial = () => {
      for (let i = buttons.length; i--;) {
        setVisibility(buttons[i], true);
      }
    };

    const close = (button) => {
      button.setAttribute('aria-expanded', 'false');
      setVisibility(button);
    };

    /**
     * Closes all accordion items.
     */
    const closeAll = () => {
      for (let i = buttons.length; i--;) {
        close(buttons[i]);
      }
    };

    const open = (button) => {
      button.setAttribute('aria-expanded', 'true');
      setVisibility(button);
    };

    /**
     * Opens all accordion items.
     */
    const openAll = () => {
      for (let i = buttons.length; i--;) {
        open(buttons[i]);
      }
    };

    /**
     * Open the accordion-content related to the location hash.
     */
    const hashEvent = () => {
      let hash = window.location.hash.replace('#', '');
      const trigger = elem.querySelector(`[aria-controls=${hash}]`);
      if (hash && trigger) {
        open(trigger);
        trigger.focus();
      }
    };

    /**
     * Enable accordion functionality.
     */
    const init = () => {
      setInitial();
      addEvents();
      hashEvent();
    };

    if (options.init !== false) {
      init();
    }

    return {init, closeAll, openAll};
  };
}));
