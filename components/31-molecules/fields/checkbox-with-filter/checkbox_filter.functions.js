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
})(this || window, function () {
  return function (elem, options) {
    if (typeof gent_styleguide === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('You need to include base.js.');
      return;
    }

    if (!options) {
      options = {};
    }

    /**
     * Filter input field.
     * @type {Element}
     */
    const filterfield = elem.querySelector(
      options.filterfield || '.checkbox-filter__filter'
    );

    /**
     * List of checkboxwrappers, each containing a checkbox and a label.
     * @type {NodeList|Array}
     */
    const checkboxes =
      elem.querySelectorAll(options.checkboxes || 'div.checkbox') || [];

    /**
     * Container to display the selected items.
     * @type {Element}
     */
    const selectedContainer = elem.querySelector(
      options.selectedContainer || '.checkbox-filter__selected'
    );

    /**
     * Container for the checkboxes.
     * @type {Element}
     */
    const checkboxContainer = elem.querySelector(
      options.checkboxContainer || '.checkbox-filter__checkboxes'
    );

    /**
     * Button to trigger opening the modal.
     * @type {Element}
     */
    const openBtn = elem.querySelector(
      options.openBtn || '.checkbox-filter__open'
    );

    /**
     * Button to confirm the selection and close the modal.
     * @type {Element}
     */
    const submitBtn = elem.querySelector(
      options.submitBtn || '.checkbox-filter__submit'
    );

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
    const closeBtns = elem.querySelectorAll(
      options.closeBtns || '.checkbox-filter__close'
    );

    /**
     * Container to display the number of search results.
     * @type {Element}
     */
    const resultSpan = elem.querySelector(
      options.resultSpan || '.checkbox-filter__result'
    );

    /**
     * Container to display the placeholder result text prior to filtering.
     * @type {Element}
     */
    const resultSpanPlaceholder = elem.querySelector(
      options.resultSpanPlaceholder || '.checkbox-filter__result-placeholder'
    );

    /**
     * Container wrapping the resultspan.
     * @type {Element}
     */
    const resultSpanWrapper = elem.querySelector(
      options.resultSpanWrapper || '.checkbox-filter__result-wrapper'
    );

    /**
     * Container wrapping the countspan.
     * @type {Element}
     */
    const countSpanWrapper = elem.querySelector(
      options.countSpanWrapper || '.checkbox-filter__count-wrapper'
    );

    /**
     * Container to display the number of selected values.
     * @type {Element}
     */
    const countSpan = elem.querySelector(
      options.countSpan || '.checkbox-filter__count'
    );

    /**
     * Store the checked checkboxes prior to making changes.
     * @type {Array}
     */
    let selectedFilters = [];

    /**
     * Check to prevent the class from making selected item tags.
     * @type {boolean}
     */
    const makeTags = (() => {
      if (options.makeTags === false) {
        return options.makeTags;
      }
      return true;
    })();

    /**
     * A Gent styleguide class to create a tabTrap.
     * @type {TabTrap}
     */
      // eslint-disable-next-line no-undef
    const tabTrap = new gent_styleguide.TabTrap(modal);

    /**
     * Filter the displayed checkboxes.
     * @param {boolean} clear Clear the filtervalue if true.
     */
    const filter = clear => {
      if (!filterfield) {
        return;
      }

      if (clear) {
        filterfield.value = '';
      }

      let count = 0;

      if (checkboxContainer) {
        checkboxContainer.style.display = 'none';
      }

      checkboxLoop(({checkboxWrapper, checkbox, label}) => {
        if (
          !label ||
          label.innerText
            .toUpperCase()
            .indexOf(filterfield.value.toUpperCase()) === -1
        ) {
          checkboxWrapper.setAttribute('hidden', 'true');
          checkbox.setAttribute('hidden', 'true');
        }
        else {
          checkboxWrapper.removeAttribute('hidden');
          checkbox.removeAttribute('hidden');
          count++;
        }
      });

      if (checkboxContainer) {
        checkboxContainer.style.display = '';
      }

      updateResult(count);
      tabTrap.setFocusables();
    };

    /**
     * Make a tag.
     * @param {Element} checkbox Input type checkbox.
     * @param {Element} label Label for the input type checkbox.
     * @return {Element} A gent styleguide tag component.
     */
    const makeTag = (checkbox, label) => {
      let tag = document.createElement('span');
      tag.className = 'tag filter';
      tag.innerText = label.innerText;
      tag.setAttribute('data-value', checkbox.value);

      let button = document.createElement('button');
      button.type = 'button';
      button.innerHTML = `<span class="visually-hidden">${options.hiddenTagText ||
      'Remove tag'}</span>`;

      button.addEventListener('click', () => {
        checkbox.checked = false;
        selectedContainer.removeChild(tag);
      });

      tag.appendChild(button);

      return tag;
    };

    /**
     * Remove a tag from the selectedContainer.
     * @param {Element} checkbox Input type checkbox.
     */
    const removeTag = checkbox => {
      let test = selectedContainer.querySelectorAll('.filter');
      for (let i = test.length; i--;) {
        if (test[i].getAttribute('data-value') === checkbox.value) {
          selectedContainer.removeChild(test[i]);
        }
      }
    };

    /**
     * Update the count display.
     */
    const updateCount = () => {
      const selectedCount = selectedContainer.children.length;

      if (countSpan) {
        countSpan.innerText = selectedCount;
      }
      if (countSpanWrapper) {
        if (selectedCount > 0) {
          countSpanWrapper.classList.remove('hidden');
        }
        else {
          countSpanWrapper.classList.add('hidden');
        }
      }
    };

    /**
     * Update the result display.
     * @param {number} resultCount The number of results after filter.
     */
    const updateResult = (resultCount) => {
      if (resultSpan) {
        resultSpan.innerText = resultCount;
      }

      if (resultSpanWrapper) {
        if (filterfield.value === '') {
          resultSpanWrapper.classList.add('hidden');
        }
        else {
          resultSpanWrapper.classList.remove('hidden');
        }
      }

      if (resultSpanPlaceholder) {
        if (filterfield.value === '') {
          resultSpanPlaceholder.classList.remove('hidden');
        }
        else {
          resultSpanPlaceholder.classList.add('hidden');
        }
      }
    };

    /**
     * Loop over all checkboxes and execute a callback for each iteration.
     * @param {function} next The callback function.
     */
    const checkboxLoop = next => {
      for (let i = checkboxes.length; i--;) {
        let checkboxWrapper = checkboxes[i];
        let checkbox = checkboxWrapper.querySelector('input[type=checkbox]');
        let label = checkboxWrapper.querySelector('label');
        next({checkboxWrapper, checkbox, label});
      }
    };

    /**
     * Reset the component to it's stored value.
     */
    const reset = () => {
      if (makeTags) {
        selectedContainer.innerHTML = '';
      }

      checkboxLoop(({checkbox, label}) => {
        if (selectedFilters.indexOf(checkbox) !== -1) {
          checkbox.checked = true;
        }
        else {
          checkbox.checked = false;
        }
        if (checkbox.checked && makeTags) {
          selectedContainer.appendChild(makeTag(checkbox, label));
        }
      });
    };

    /**
     * Initialise the component.
     */
    const init = () => {
      selectedFilters = [];

      checkboxLoop(({checkbox, label}) => {
        if (checkbox.checked && makeTags) {
          selectedContainer.appendChild(makeTag(checkbox, label));
        }
      });

      updateCount();

      filter(true);
    };

    /**
     * Add all events.
     */
    const addEvents = () => {
      // Make sure the filter method is not repeated while typing.
      if (filterfield) {
        let filterTimeOut = null;

        filterfield.addEventListener('input', () => {
          if (filterTimeOut) {
            clearTimeout(filterTimeOut);
          }
          filterTimeOut = setTimeout(filter, 200);
        });
      }

      // Add events for all checkboxes.
      checkboxLoop(({checkbox, label}) => {
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            if (makeTags) {
              selectedContainer.appendChild(makeTag(checkbox, label));
            }
          }
          else {
            if (makeTags) {
              removeTag(checkbox);
            }
          }
        });
      });

      // Enable opening the modal.
      if (openBtn) {
        openBtn.addEventListener('click', (e) => {
          selectedFilters = [];

          checkboxLoop(({checkbox}) => {
            if (checkbox.checked) {
              selectedFilters.push(checkbox);
            }
          });

          document.addEventListener('keydown', handleKeyboardInput);
        });
      }

      // Add close events to all closeBtns.
      if (closeBtns) {
        for (let i = closeBtns.length; i--;) {
          closeBtns[i].addEventListener('click', () => {
            reset();
            updateCount();
            document.removeEventListener('keydown', handleKeyboardInput);
          });
        }
      }

      // Update selectedFilters and close.
      if (submitBtn) {
        submitBtn.addEventListener('click', updateCount);
      }
    };

    /**
     * Handle keyboard input
     * @param {object} e event
     */
    const handleKeyboardInput = e => {
      let keyCode = e.keyCode || e.which;
      switch (keyCode) {
        case 27: // esc
          e.preventDefault();
          reset();
          updateCount();
          break;
        case 13: // enter
          e.preventDefault(); // prevent form submit
      }
    };

    init();
    addEvents();

    return {};
  };
});
