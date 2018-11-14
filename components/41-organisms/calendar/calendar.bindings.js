'use strict';

(function () {

  if (!Calendar) { // eslint-disable-line no-undef
    return;
  }

  const selected = document.querySelectorAll('.calendar');
  for (let i = selected.length; i--;) {
    new Calendar(selected[i], { // eslint-disable-line no-undef
      endpoint: 'http://openingsuren.web.test.gentgrp.gent.be/api/v1'
    });
  }

})();
