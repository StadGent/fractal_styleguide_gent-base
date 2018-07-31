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

    const filterfield = elem.querySelector('.checkbox-filter__filter');
    const checkboxes = elem.querySelectorAll('div.checkbox') || [];
    const selectedContainer = elem.querySelector('.selected');
    const openBtn = elem.querySelector('.checkbox-filter__open');
    const submitBtn = elem.querySelector('.checkbox-filter__submit');
    const modal = elem.querySelector('.checkbox-filter__modal');
    const closeBtns = elem.querySelectorAll('.checkbox-filter__close');
    const resultSpan = elem.querySelector('.checkbox-filter__result');
    let trigger = null;

    let selectedFilters = [];

    const filter = (clear) => {

      if (!filterfield) {
        return;
      }

      if (clear) {
        filterfield.value = '';
      }

      let count = 0;
      for (let i = checkboxes.length; i--;) {
        const checkbox = checkboxes[i];
        const label = checkbox.querySelector('label');
        if (!label ||
          label.innerText.toUpperCase()
            .indexOf(filterfield.value.toUpperCase()) === -1) {
          checkbox.setAttribute('hidden', 'true');
        }
        else {
          checkbox.removeAttribute('hidden');
          count++;

        }
      }
      resultSpan.innerText = count;
    };
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
    const removeTag = (checkbox) => {
      let test = selectedContainer.querySelectorAll('.filter');
      for (let i = test.length; i--;) {
        if (test[i].getAttribute('data-value') === checkbox.value) {
          selectedContainer.removeChild(test[i]);
        }
      }
    };
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
      }
      // show
      else {
        openBtn.setAttribute('aria-expanded', 'true');
        modal.removeAttribute('aria-hidden');
        document.querySelector('body').style.overflow = 'hidden';
        modal.classList.add('visible');
        modal.focus();
      }
    };

    const reset = () => {
      for (let i = checkboxes.length; i--;) {
        let checkbox = checkboxes[i].querySelector('input[type=checkbox]');

        if (selectedFilters.includes(checkbox)) {
          checkbox.checked = true;
        }
        else {
          checkbox.checked = false;
        }
      }
      init();
    };

    const init = () => {
      selectedFilters = [];
      selectedContainer.innerHTML = '';
      modal.setAttribute('tabindex', '-1');
      modal.setAttribute('aria-hidden', 'true');
      openBtn.setAttribute('aria-expanded', 'false');

      for (let i = checkboxes.length; i--;) {
        let checkbox = checkboxes[i].querySelector('input[type=checkbox]');
        let label = checkboxes[i].querySelector('label');

        if (checkbox.checked) {
          selectedContainer.appendChild(makeTag(checkbox, label));
        }
      }
    };

    const addEvents = () => {

      let filterTimeOut = null;

      if (filterfield) {
        filterfield.addEventListener('input', (e) => {

          if (filterTimeOut) {
            clearTimeout(filterTimeOut);
          }

          filterTimeOut = setTimeout(filter, 200);
        });
      }

      for (let i = checkboxes.length; i--;) {
        let checkbox = checkboxes[i].querySelector('input[type=checkbox]');
        let label = checkboxes[i].querySelector('label');

        checkbox.addEventListener('change', (e) => {

          if (checkbox.checked) {
            selectedContainer.appendChild(makeTag(checkbox, label));
          }
          else {
            removeTag(checkbox);
          }
        });
      }

      if (openBtn) {

        openBtn.addEventListener('click', () => {
          trigger = openBtn;
          selectedFilters = [];

          for (let i = checkboxes.length; i--;) {
            let checkbox = checkboxes[i].querySelector('input[type=checkbox]');

            if (checkbox.checked) {
              selectedFilters.push(checkbox);
            }
          }

          filter();
          toggleModal();
        });
      }

      if (closeBtns) {
        for (let i = closeBtns.length; i--;) {
          closeBtns[i].addEventListener('click', () => {
            reset();
            toggleModal();
          });
        }
      }

      if (submitBtn) {
        submitBtn.addEventListener('click', toggleModal);
      }

    };

    init();
    addEvents();

    return {};
  };
}));
