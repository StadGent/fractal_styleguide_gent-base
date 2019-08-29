'use strict';

(function () {

  if (!Breadcrumbs) { // eslint-disable-line no-undef
    return;
  }

  const selected = document.querySelectorAll('.breadcrumb');
  for (let i = selected.length; i--;) {
    new Breadcrumbs(selected[i]); // eslint-disable-line no-undef
  }

})();
