/**
 * @file
 * Javascript binding of baguettebox.min.js and macy.js.
 */
'use strict';

(function () {

  if (!baguetteBox) { // eslint-disable-line no-undef
    return;
  }

  baguetteBox.run('.image-wall', { // eslint-disable-line no-undef
    filter: /.*/i,
    async: true,
    captions: function (element) {
      var figcaption = element.querySelector('figcaption');
      return figcaption ? figcaption.innerText : null;
    },
    buttons: true
  });

})();


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
