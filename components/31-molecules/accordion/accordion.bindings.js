'use strict';

(function () {

  if (!Accordion) { // eslint-disable-line no-undef
    return;
  }

  const selected = document.querySelectorAll('.accordion');
  console.log('binding');
  for (let i = selected.length; i--;) {
    console.log('binding');
     let acc = new Accordion(selected[i]); // eslint-disable-line no-undef
  }

})();
