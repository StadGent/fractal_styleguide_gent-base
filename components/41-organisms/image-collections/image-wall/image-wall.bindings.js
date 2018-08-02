/**
 * @file
 * Javascript binding of macy.js.
 */
'use strict';

(function () {

  if (!Macy) { // eslint-disable-line no-undef
    return;
  }

  let list = document.getElementsByClassName('image-wall');
  if (list.length === 0) {
    return;
  }

  Macy({ // eslint-disable-line no-undef
    container: '.image-wall',
    mobileFirst: true,
    margin: 24, // Base font: 20px - Gutter: 1.2rem
    columns: 1,
    breakAt: {
      1920: {
        margin: 28.8 // Base font: 24px - Gutter: 1.2rem
      },
      960: 4,
      768: 3,
      576: 2
    }
  });

})();
