/* global FileUpload */
'use strict';

(function () {

  if (!FileUpload) {
    return;
  }

  const selected = document.querySelectorAll('.file-upload');
  for (let i = selected.length; i--;) {
    new FileUpload(selected[i]);
  }

})();
