'use strict';

(function () {

  if (!File) {
    return;
  }

  const selected = document.querySelectorAll('.file');
  for (let i = selected.length; i--;) {
    new File(selected[i]);
  }

})();
