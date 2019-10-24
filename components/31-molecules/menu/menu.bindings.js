'use strict';

(function () {

  if (!Modal) { // eslint-disable-line no-undef
    return;
  }

  const menu = document.querySelectorAll('.modal.menu');

  const createModal = function (modal) {
    // eslint-disable-next-line no-undef
    new Modal(modal, {
      // The modal is always visible from tablet and up,
      // this is atypical.
      resizeEvent: (open, close) => {
        if (window.innerWidth > 960) {
          close();
          modal.setAttribute('aria-hidden', 'false');
        }
        else {
          if (!modal.classList.contains('visible')) {
            modal.setAttribute('aria-hidden', 'true');
          }
        }
      }
    });
  };

  for (var i = menu.length; i--;) {
    createModal(menu[i]);
  }
})();
