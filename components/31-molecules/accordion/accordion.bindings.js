'use strict';

(function () {

  if (!Accordion) { // eslint-disable-line no-undef
    return;
  }

  const selected = document.querySelectorAll('.accordion');
  for (let i = selected.length; i--;) {
    new Accordion(selected[i]); // eslint-disable-line no-undef
  }

})();
