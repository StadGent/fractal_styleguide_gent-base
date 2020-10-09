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
      root.CheckboxFilterDynamic = factory();
    }
  }
})(this || window, function () {
  return function (elem, options) {

    options = options || {};
    options.filterField = options.filterField || '.checkbox-filter__filter';
    options.modalPreview = options.modalPreview || '.modal-preview';
    options.accordionPreview = options.accordionPreview || '.accordion-preview';
    options.accordionBtn = options.accordionBtn || 'button.accordion--button';
    options.previewCheckboxes = options.previewCheckboxes || 'div.checkbox.preview';
    options.checkboxes = options.checkboxes || 'div.checkbox:not(.preview)';
    options.selectedContainer = options.selectedContainer || '.checkbox-filter__selected';
    options.checkboxContainers = options.checkboxContainers || '.checkbox-filter__checkboxes';
    options.openBtn = options.openBtn || '.checkbox-filter__open';
    options.submitBtn = options.submitBtn || '.checkbox-filter__submit';
    options.closeBtns = options.closeBtns || '.checkbox-filter__close';
    options.resultSpan = options.resultSpan || '.checkbox-filter__result';
    options.makeTags = options.makeTags !== false;
    options.hiddenTagText = options.hiddenTagText || 'remove tag';
    options.onRemoveTag = options.onRemoveTag || function () {};

    /**
     * Filter input field.
     * @type {HTMLInputElement}
     */
    const filterField = elem.querySelector(options.filterField);

    /**
     * Container for the modal preview checkboxes.
     * @type {HTMLElement}
     */
    const modalPreview = elem.querySelector(options.modalPreview);

    /**
     * Container for the accordion preview checkboxes.
     * @type {HTMLElement}
     */
    const accordionPreview = elem.querySelector(options.accordionPreview);

    /**
     * Button to toggle the accordion.
     * @type {HTMLElement}
     */
    const accordionBtn = elem.querySelector(options.accordionBtn);

    /**
     * List of preview checkboxes, these exist outside of the modal.
     * @type {NodeList|Array}
     */
    const previewCheckboxes = elem.querySelectorAll(options.previewCheckboxes) || [];

    /**
     * List of checkboxwrappers, each containing a checkbox and a label.
     * @type {NodeList|Array}
     */
    const checkboxes = elem.querySelectorAll(options.checkboxes) || [];

    /**
     * Container to display the selected items.
     * @type {HTMLElement}
     */
    const selectedContainer = elem.querySelector(options.selectedContainer);

    /**
     * Container for the checkboxes.
     * @type {HTMLElement}
     */
    const checkboxContainers = elem.querySelectorAll(options.checkboxContainers);

    /**
     * Button to trigger opening the modal.
     * @type {HTMLElement}
     */
    const openBtn = elem.querySelector(options.openBtn);

    /**
     * Button to confirm the selection and close the modal.
     * @type {Element}
     */
    const submitBtn = elem.querySelector(options.submitBtn);

    /**
     * A list of elements to trigger closing the modal.
     * At least one must have the button role.
     * @type {NodeList}
     */
    const closeBtns = elem.querySelectorAll(options.closeBtns);

    /**
     * Container to display the number of search results.
     * @type {HTMLElement}
     */
    const resultSpan = elem.querySelector(options.resultSpan);

    /**
     * Store the checked checkboxes prior to making changes.
     * @type {Array}
     */
    let selectedFilters = [];

    /**
     * Filter the displayed checkboxes.
     * @param {boolean} clear Clear the filtervalue if true.
     */
    const filter = clear => {
      if (!filterField) {
        return;
      }

      if (clear) {
        filterField.value = '';
      }

      let count = 0;

      [].slice.call(checkboxContainers).forEach(container => {
        container.style.display = 'none';
      });

      checkboxLoop(({checkboxWrapper, checkbox, label}) => {
        if (
          !label ||
          label.textContent
            .toUpperCase()
            .indexOf(filterField.value.toUpperCase()) === -1
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

      [].slice.call(checkboxContainers).forEach(container => {
        let displayedCount = container.querySelectorAll(`${options.checkboxes}:not([hidden])`).length;
        if (displayedCount) {
          container.style.display = '';
        }
      });

      if (resultSpan) {
        resultSpan.textContent = '' + count;
      }
    };

    /**
     * Make a tag.
     * @param {HTMLInputElement} checkbox Input type checkbox.
     * @param {Element} label Label for the input type checkbox.
     * @return {Element} A gent styleguide tag component.
     */
    const makeTag = (checkbox, label) => {

      const li = document.createElement('li');

      const tag = document.createElement('span');
      tag.className = 'tag filter';
      tag.textContent = label.textContent;
      tag.setAttribute('data-value', checkbox.value);

      const button = document.createElement('button');
      button.type = 'button';
      button.innerHTML = `<span class="visually-hidden">${options.hiddenTagText} ${label.textContent}</span>`;
      button.addEventListener('click', () => checkbox.click());

      tag.appendChild(button);
      li.appendChild(tag);

      return li;
    };

    /**
     * Remove a tag from the selectedContainer.
     * @param {HTMLInputElement} checkbox Input type checkbox.
     */
    const removeTag = checkbox => {
      if (options.makeTags && selectedContainer) {
        const tag = selectedContainer.querySelector('.filter[data-value="' + checkbox.value + '"]');
        if (tag) {
          selectedContainer.removeChild(tag.parentElement);
          options.onRemoveTag(checkbox, tag);
        }
      }
    };

    const addTag = (checkbox, label) => {
      if (options.makeTags && selectedContainer) {
        selectedContainer.appendChild(makeTag(checkbox, label));
      }
    };

    /**
     * Loop over all checkboxes and execute a callback for each iteration.
     * @param {function} next The callback function.
     */
    const checkboxLoop = next => {
      for (let i = 0; i < checkboxes.length; i++) {
        let checkboxWrapper = checkboxes[i];
        let checkbox = checkboxWrapper.querySelector('input[type=checkbox]');
        let label = checkboxWrapper.querySelector('label');

        // Sometimes the input element isn't rendered at this point.
        if (checkbox && label) {
          next({checkboxWrapper, checkbox, label});
        }
      }
    };

    /**
     * Reset the component to it's stored value.
     */
    const reset = () => {
      checkboxLoop(({checkbox}) => {
        const isSelected = selectedFilters.indexOf(checkbox) !== -1;
        if ((isSelected && !checkbox.checked) || (!isSelected && checkbox.checked)) {
          checkbox.click();
        }
      });
    };

    /**
     * Initialise the component.
     */
    const init = () => {
      checkboxLoop(({checkbox, label}) => {
        if (checkbox.checked && !checkbox.indeterminate) {
          addTag(checkbox, label);
        }
      });
      filter(true);
    };

    /**
     * Bind two checkboxes
     * @param {HTMLInputElement} a A checkbox.
     * @param {HTMLInputElement} b Another checkbox.
     */
    const bindState = (a, b) => {
      if (a.checked !== b.checked) {
        a.click();
      }
    };

    /**
     * Bind the preview checkboxes to their original counterpart in the modal.
     */
    const addPreviewCheckboxesEvent = () => {
      if (!previewCheckboxes.length) {
        return;
      }

      for (let i = previewCheckboxes.length; i--;) {
        const checkboxWrapper = previewCheckboxes[i];
        const checkbox = checkboxWrapper.querySelector('input[type=checkbox]');
        const original = elem.querySelector('#' + checkbox.getAttribute('data-original'));

        if (checkbox) {
          checkbox.addEventListener('change', () => bindState(original, checkbox));
          original.addEventListener('change', () => bindState(checkbox, original));
        }
      }
    };

    const addModalEvents = () => {
      // Enable opening the modal.
      if (openBtn) {
        openBtn.addEventListener('click', () => {
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
            document.removeEventListener('keydown', handleKeyboardInput);
          });
        }
      }

      // Update selectedFilters and close.
      if (submitBtn) {
        submitBtn.addEventListener('click', () => {
          document.removeEventListener('keydown', handleKeyboardInput);
        });
      }

      // Make sure the filter method is not repeated while typing.
      if (filterField) {
        let filterTimeOut = null;
        filterField.addEventListener('input', () => {
          if (filterTimeOut) {
            clearTimeout(filterTimeOut);
          }
          filterTimeOut = setTimeout(filter, 200);
        });
      }
    };

    const createPreviewClone = (checkboxWrapper, checkbox) => {
      if (!modalPreview) {
        return;
      }
      if (modalPreview.querySelector('#' + checkbox.id + 'preview')) {
        return;
      }

      const wrapperClone = checkboxWrapper.cloneNode(true);
      const checkboxClone = wrapperClone.querySelector('input');
      const labelClone = wrapperClone.querySelector('label');

      checkboxClone.name = null;
      checkboxClone.id += 'preview';
      labelClone.for += 'preview';

      checkbox.addEventListener('change', () => bindState(checkboxClone, checkbox));
      checkboxClone.addEventListener('change', () => bindState(checkbox, checkboxClone));
      modalPreview.appendChild(wrapperClone);
    };

    const addAccordionEvent = () => {
      if (!accordionBtn || !accordionPreview) {
        return;
      }

      accordionBtn.addEventListener('click', () =>
        checkboxLoop(({checkboxWrapper, checkbox}) => {
          if (checkbox.checked && !accordionPreview.contains(checkboxWrapper)) {
            accordionPreview.appendChild(checkboxWrapper);
          }
        })
      );
    };

    /**
     * Add all events.
     */
    const addEvents = () => {

      addModalEvents();
      addPreviewCheckboxesEvent();
      addAccordionEvent();

      // Add events for all checkboxes.
      checkboxLoop(({checkboxWrapper, checkbox, label}) => {
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            addTag(checkbox, label);
            createPreviewClone(checkboxWrapper, checkbox);
          }
          else {
            removeTag(checkbox);
          }
        });
      });
    };

    /**
     * Handle keyboard input
     * @param {object} e event
     */
    const handleKeyboardInput = e => {
      let keyCode = e.keyCode || e.which;
      if (keyCode === 27) {
        e.preventDefault();
        reset();
      }
    };

    init();
    addEvents();

    return {};
  };
});
