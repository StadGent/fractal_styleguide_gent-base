/* global Modal */
'use strict';

(function () {

  if (!Modal) {
    return;
  }

  const selected = document.querySelectorAll('.modal');
  for (let i = selected.length; i--;) {
    new Modal(selected[i]);
  }

})();
