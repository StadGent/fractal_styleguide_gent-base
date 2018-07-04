'use strict';

(function () {

  if (!Menu) { // eslint-disable-line no-undef
    return;
  }

  const selected = document.querySelectorAll('nav.menu');
  for (let i = selected.length; i--;) {
    new Menu(selected[i]); // eslint-disable-line no-undef
  }

})();
