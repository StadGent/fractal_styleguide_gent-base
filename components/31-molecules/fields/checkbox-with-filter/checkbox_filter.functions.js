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
      root.CheckboxFilter = factory();
    }
  }
}(this || window, function () {

  return (elem, options) => {

    if (typeof gent_styleguide === 'undefined') {
      console.error('You need to include base.js.'); // eslint-disable-line no-console
      return;
    }

    if (!options) {
      options = {};
    }

    /**
     * Filter input field.
     * @type {Element}
     */
    const filterfield = elem.querySelector(options.filterfield || '.checkbox-filter__filter');

    /**
     * List of checkboxwrappers, each containing a checkbox and a label.
     * @type {NodeList|Array}
     */
    const checkboxes = elem.querySelectorAll(options.checkboxes || 'div.checkbox') || [];

    /**
     * Container to display the selected items.
     * @type {Element}
     */
    const selectedContainer = elem.querySelector(options.selectedContainer || '.checkbox-filter__selected');

    /**
     * Button to trigger opening the modal.
     * @type {Element}
     */
    const openBtn = elem.querySelector(options.openBtn || '.checkbox-filter__open');

    /**
     * Button to confirm the selection and close the modal.
     * @type {Element}
     */
    const submitBtn = elem.querySelector(options.submitBtn || '.checkbox-filter__submit');

    /**
     * The modal containing checkboxes and filter.
     * @type {Element}
     */
    const modal = elem.querySelector(options.modal || '.checkbox-filter__modal');

    /**
     * A list of elements to trigger closing the modal.
     * At least one must have the button role.
     * @type {NodeList}
     */
    const closeBtns = elem.querySelectorAll(options.closeBtns || '.checkbox-filter__close');

    /**
     * Container to display the number of search results.
     * @type {Element}
     */
    const resultSpan = elem.querySelector(options.resultSpan || '.checkbox-filter__result');

    /**
     * Store the button that triggered the modal.
     * @type {null|Element}
     */
    let trigger = null;

    /**
     * Store the checked checkboxes prior to making changes.
     * @type {Array}
     */
    let selectedFilters = [];

    /**
     * A Gent styleguide class to create a tabTrap.
     * @type {TabTrap}
     */
    const tabTrap = new gent_styleguide.TabTrap(modal); // eslint-disable-line no-undef

    /**
     * Filter the displayed checkboxes.
     * @param {boolean} clear Clear the filtervalue if true.
     */
    const filter = (clear) => {

      if (!filterfield) {
        return;
      }

      if (clear) {
        filterfield.value = '';
      }

      let count = 0;

      checkboxLoop(({checkboxContainer, checkbox, label}) => {
        if (!label ||
          label.innerText.toUpperCase()
            .indexOf(filterfield.value.toUpperCase()) === -1) {
          checkboxContainer.setAttribute('hidden', 'true');
          checkbox.setAttribute('hidden', 'true');
        }
        else {
          checkboxContainer.removeAttribute('hidden');
          checkbox.removeAttribute('hidden');
          count++;
        }
      });

      resultSpan.innerText = count;
      tabTrap.setFocusables();
    };

    /**
     * Make a tag.
     * @param checkbox
     * @param label
     * @returns {Element}
     */
    const makeTag = (checkbox, label) => {
      let tag = document.createElement('span');
      tag.className = 'tag filter';
      tag.innerText = label.innerText;
      tag.setAttribute('data-value', checkbox.value);

      let button = document.createElement('button');
      button.innerHTML = '<span class="visually-hidden">Remove tag</span>';

      button.addEventListener('click', () => {
        checkbox.checked = false;
        selectedContainer.removeChild(tag);
      });

      tag.appendChild(button);

      return tag;
    };

    /**
     * Remove a tag from the selectedContainer.
     * @param checkbox
     */
    const removeTag = (checkbox) => {
      let test = selectedContainer.querySelectorAll('.filter');
      for (let i = test.length; i--;) {
        if (test[i].getAttribute('data-value') === checkbox.value) {
          selectedContainer.removeChild(test[i]);
        }
      }
    };

    /**
     * Open or close the modal
     */
    const toggleModal = () => {

      // hide
      if (modal.classList.contains('visible')) {
        openBtn.setAttribute('aria-expanded', 'false');
        modal.setAttribute('aria-hidden', 'true');
        document.querySelector('body').style.overflow = null;
        modal.classList.remove('visible');
        if (trigger) {
          trigger.focus();
        }

        filter(true);
        document.removeEventListener('keydown', handleKeyboardInput);
        tabTrap.reset();
      }
      // show
      else {
        openBtn.setAttribute('aria-expanded', 'true');
        modal.removeAttribute('aria-hidden');
        document.querySelector('body').style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyboardInput);
        modal.classList.add('visible');
        modal.focus();
      }
    };

    /**
     * Loop over all checkboxes and execute a callback for each iteration.
     * @param next
     */
    const checkboxLoop = (next) => {
      for (let i = checkboxes.length; i--;) {
        let checkboxContainer = checkboxes[i];
        let checkbox = checkboxContainer.querySelector('input[type=checkbox]');
        let label = checkboxContainer.querySelector('label');
        next({checkboxContainer, checkbox, label});
      }
    };

    /**
     * Reset the component to it's stored value.
     */
    const reset = () => {
      selectedContainer.innerHTML = '';

      checkboxLoop(({checkbox, label}) => {
        if (selectedFilters.indexOf(checkbox) !== -1) {
          checkbox.checked = true;
        }
        else {
          checkbox.checked = false;
        }
        if (checkbox.checked) {
          selectedContainer.appendChild(makeTag(checkbox, label));
        }
      });
    };

    /**
     * Initialise the component.
     */
    const init = () => {
      selectedFilters = [];
      modal.setAttribute('tabindex', '-1');
      modal.setAttribute('aria-hidden', 'true');
      openBtn.setAttribute('aria-expanded', 'false');

      checkboxLoop(({checkbox, label}) => {
        if (checkbox.checked) {
          selectedContainer.appendChild(makeTag(checkbox, label));
        }
      });

      filter(true);
    };

    /**
     * Add all events.
     */
    const addEvents = () => {

      // Make sure the filter method is not repeated while typing.
      if (filterfield) {
        let filterTimeOut = null;

        filterfield.addEventListener('input', (e) => {
          if (filterTimeOut) {
            clearTimeout(filterTimeOut);
          }
          filterTimeOut = setTimeout(filter, 200);
        });
      }

      // Add events for all checkboxes.
      checkboxLoop(({checkbox, label}) => {
        checkbox.addEventListener('change', (e) => {

          if (checkbox.checked) {
            selectedContainer.appendChild(makeTag(checkbox, label));
          }
          else {
            removeTag(checkbox);
          }
        });
      });

      // Enable opening the modal.
      if (openBtn) {
        openBtn.addEventListener('click', () => {
          trigger = openBtn;
          selectedFilters = [];

          checkboxLoop(({checkbox}) => {
            if (checkbox.checked) {
              selectedFilters.push(checkbox);
            }
          });

          toggleModal();
        });
      }

      // Add close events to all closeBtns.
      if (closeBtns) {
        for (let i = closeBtns.length; i--;) {
          closeBtns[i].addEventListener('click', () => {
            reset();
            toggleModal();
          });
        }
      }

      // Update selectedFilters and close.
      if (submitBtn) {
        submitBtn.addEventListener('click', toggleModal);
      }

    };

    /**
     * Handle keyboard input
     * @param {object} e event
     */
    const handleKeyboardInput = (e) => {



      if (!tabTrap || !tabTrap.hasFocusables || !e) {
        return;
      }

      var keyCode = e.keyCode || e.which;

      switch (keyCode) {
        case 9: // tab
          e.preventDefault();
          if (e.shiftKey) {
            tabTrap.back();
          }
          else {
            tabTrap.next();
          }
          break;
        case 27: // esc
          close(e);
          break;
      }
    };

    init();
    addEvents();

    return {};
  };
}));
