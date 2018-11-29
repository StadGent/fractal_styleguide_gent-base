'use strict';

(function () {

  if (!OpeningHoursMonthWidget) { // eslint-disable-line no-undef
    return;
  }

  const selected = document.querySelectorAll('.opening-hours-wrapper[data-type="month"]');
  for (let i = selected.length; i--;) {
    new OpeningHoursMonthWidget(selected[i]); // eslint-disable-line no-undef
  }

})();
