'use strict';

(function () {

  if (!Modal) { // eslint-disable-line no-undef
    return;
  }

  let selected = document.querySelectorAll('.programme-detail');
  for (let i = selected.length; i--;) {
    new Modal(selected[i], { // eslint-disable-line no-undef
      changeHash: true
    });
  }
})();
