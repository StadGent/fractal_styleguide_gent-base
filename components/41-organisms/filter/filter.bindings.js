'use strict';

(function () {

  if (!Modal) { // eslint-disable-line no-undef
    return;
  }

  const filter = document.querySelector('#filter');
  // eslint-disable-next-line no-undef
  new Modal(filter, {
    // The modal is always visible from tablet and up,
    // this is atypical.
    resizeEvent: () => {
      if (window.innerWidth > 768) {
        filter.setAttribute('aria-hidden', 'false');
      }
      else {
        filter.setAttribute('aria-hidden', 'true');
      }
    }
  });
})();
