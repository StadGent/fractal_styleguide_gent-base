'use strict';

(function () {

  if (!CheckboxFilter) { // eslint-disable-line no-undef
    return;
  }

  const selected = document.querySelectorAll('.checkbox-filter');
  for (let i = selected.length; i--;) {
    new CheckboxFilter(selected[i], {hiddenTagText: 'Remove tag'}); // eslint-disable-line no-undef
  }

})();
