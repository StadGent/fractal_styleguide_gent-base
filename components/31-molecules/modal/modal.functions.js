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

  // IE 9+ polyfill for Element.closest()
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      if (!document.documentElement.contains(el)) {
        return null;
      }
      do {
        if (el.matches(s)) {
          return el;
        }
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

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

    if (typeof options.changeHash === 'undefined') {
      options.changeHash = true;
    }

    let triggers = [];
    let trigger;
    let hash;

    /**
     * A Gent styleguide class to create a tabTrap.
     * @type {TabTrap}
     */
    const tabTrap = new gent_styleguide.TabTrap(modal); // eslint-disable-line no-undef

    /**
     * Initialise the component.
     */
    const init = () => {
      triggers = document.querySelectorAll(`[aria-controls="${modal.id}"]`);

      if (!options.changeHash && triggers.length === 0) {
        return;
      }

      modal.setAttribute('tabindex', '-1');
      modal.setAttribute('aria-hidden', 'true');

      for (let i = triggers.length; i--;) {
        trigger = triggers[i];
        trigger.setAttribute('aria-expanded', 'false');
        trigger.addEventListener('click', ()=>{ open(); });
      }

      /**
       * A list of elements to trigger closing the modal.
       * At least one must have the button role.
       * @type {NodeList}
       */
      const closeBtns = modal.querySelectorAll(
        options.closeBtns || '.modal-close'
      );
      for (let i = closeBtns.length; i--;) {
        if (!closeBtns[i].dataset.target || closeBtns[i].dataset.target === modal.id) {
          closeBtns[i].addEventListener('click', handleClose);
        }
      }

      /*
      Custom event triggered on resize and on init.
      For instance for when the modal is not hidden on all screen sizes.
       */
      if (options.resizeEvent) {
        options.resizeEvent();
        addResizeEvent();
      }

      /*
        Possibility to alter the URL fragment when the modal opens/closes.
       */
      hash = window.location.hash;
      if (options.changeHash) {
        addHashEvents();
      }
    };

    /**
     * Toggle a scroll lock on a visible parent modal or on the body.
     *
     * @param {Boolean} release Place or remove the lock.
     */
    const scrollLockParent = (release) => {
      const parentModal = modal.parentNode.closest('.modal.visible');
      if (parentModal) {
        parentModal.style.overflow = release ? '' : 'hidden';
      }
      else {
        document.body.style.overflow = release ? '' : 'hidden';
      }
    };

    /**
     * Open the modal.
     *
     * @param {Boolean} changeHash  Whether or not to change the hash in the URI
     */
    const open = (changeHash = true) => {
      if (changeHash && options.changeHash !== false) { // change the url
        history.pushState(null, null, `#${modal.id}`);
        hash = `#${modal.id}`;
      }

      modal.classList.add('visible');
      modal.setAttribute('aria-hidden', 'false');
      scrollLockParent();
      document.addEventListener('keydown', handleKeyboardInput);
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'true');
      }
      modal.focus();
    };

    /**
     * Close the modal.
     */
    const close = () => {
      modal.classList.remove('visible');
      modal.setAttribute('aria-hidden', 'true');
      scrollLockParent(true);
      document.removeEventListener('keydown', handleKeyboardInput);
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
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
          handleClose();
          break;
      }
    };

    /**
     * Decision point on how the modal should be closed.
     * When the URL changes, the `popstate` event should be triggered manually,
     * otherwise we'll close the modal directly.
     */
    const handleClose = () => {
      if (options.changeHash) {
        history.back();

        return;
      }

      close();
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

    /**
     * Add events that handle hash changes
     */
    const addHashEvents = () => {
      window.addEventListener('hashchange', () => {
        if (hash === `#${modal.id}`) {
          close();
        }

        hash = window.location.hash;
        if (hash === `#${modal.id}`) {
          open(false);
        }
      });

      if (hash === `#${modal.id}`) { // show modal on page load when the hash corresponds
        history.replaceState(null, null, window.location.href.split('#')[0]);
        open();
      }
    };

    init();

    return {};
  };
});
