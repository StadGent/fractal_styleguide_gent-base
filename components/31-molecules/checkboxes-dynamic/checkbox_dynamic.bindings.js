'use strict';

(function () {

  if (Accordion) { // eslint-disable-line no-undef
    const selected = document.querySelectorAll('.checkbox-accordion');
    for (let i = selected.length; i--;) {
      new Accordion(selected[i]); // eslint-disable-line no-undef
    }
  }

  if (CheckboxFilterDynamic) { // eslint-disable-line no-undef
    const selected = document.querySelectorAll('.checkbox-filter-dynamic');
    for (let i = selected.length; i--;) {
      new CheckboxFilterDynamic(selected[i], {hiddenTagText: 'Remove tag'}); // eslint-disable-line no-undef
    }
  }

})();
