/* global OpeningHoursAccordion */
'use strict';

(function () {

  if (!OpeningHoursAccordion) {
    return;
  }

  const selected = document.querySelectorAll('.opening-hours-accordion');
  for (let i = selected.length; i--;) {
    new OpeningHoursAccordion(selected[i]);
  }

})();
