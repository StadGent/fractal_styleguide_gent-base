'use strict';

(function () {

  if (!OpeningHours) { // eslint-disable-line no-undef
    return;
  }

  const selected = document.querySelectorAll('.opening-hours-wrapper');
  for (let i = selected.length; i--;) {
    new OpeningHours(selected[i], { // eslint-disable-line no-undef
      endpoint: 'http://openingsuren.web.test.gentgrp.gent.be/api/v1',
    });
  }

})();
