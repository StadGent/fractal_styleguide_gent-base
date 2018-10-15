/* global Modal */
'use strict';

(function () {

  if (!Modal) {
    return;
  }

  let selected = document.querySelectorAll('.programme-detail');
  Array.from(selected).forEach(item => new Modal(item));
})();
