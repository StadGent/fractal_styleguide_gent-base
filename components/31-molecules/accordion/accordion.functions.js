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

  return (elem, options) => {

    options = Object.assign({
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
        if (!e.target.classList.contains('accordion--expanded')) {
          e.target.setAttribute('hidden', 'true');
        }
      },
      init: true
    }, options);

    const buttons = elem.querySelectorAll('button.accordion-button');
    const toggle = (e) => {
      e.preventDefault();
      const button = e.target;
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
      setVisibility(button);
    };
    const keyDown = (e) => {
      const keyCode = e.keyCode || e.which;
      let current = (() => {
        for (let i = buttons.length; i--;) {
          if (buttons[i] === e.target) {
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
    const addEvents = () => {
      for (let i = buttons.length; i--;) {
        const button = buttons[i];
        button.addEventListener('click', toggle);
        button.addEventListener('keydown', keyDown);

        const accordionContent = elem.querySelector(`#${button.getAttribute('aria-controls')}`);
        accordionContent.addEventListener('transitionend', options.transitionEnd);
      }
    };
    const setVisibility = (button) => {

      const accordionContent = elem.querySelector(`#${button.getAttribute('aria-controls')}`);
      if (!accordionContent) {
        return;
      }

      if (button.getAttribute('aria-expanded') === 'true') {
        accordionContent.classList.add('accordion--expanded');
        accordionContent.setAttribute('aria-hidden', 'false');
        accordionContent.removeAttribute('hidden');
        options.expand(button, accordionContent);
      }
      else {
        accordionContent.classList.remove('accordion--expanded');
        accordionContent.setAttribute('aria-hidden', 'true');
        options.collapse(button, accordionContent);
      }
    };
    const setInitial = () => {
      for (let i = buttons.length; i--;) {
        setVisibility(buttons[i]);
      }
    };

    const init = () => {
      setInitial();
      addEvents();
    };

    if (options.init !== false) {
      init();
    }

    return {init};
  };
}));
