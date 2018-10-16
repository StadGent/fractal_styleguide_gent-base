/* global Modal */
'use strict';

(function () {

  if (!Modal) {
    return;
  }

  let selected = document.querySelectorAll('.programme-detail');
  for (let i = selected.length; i--;) {
    new Modal(selected[i]);
  }
})();
