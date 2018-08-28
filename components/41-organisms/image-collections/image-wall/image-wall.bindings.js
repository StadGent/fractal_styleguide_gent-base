/**
 * @file
 * Javascript binding of Masonry.
 */
'use strict';

(function () {

  if (!Masonry || !imagesLoaded) { // eslint-disable-line no-undef
    return;
  }

  const grid = document.querySelector('.image-wall');
  if (!grid) {
    return;
  }

  const msnry = new Masonry(grid, { // eslint-disable-line no-undef
    columnWidth: 'li:not(.hidden)',
    itemSelector: 'li',
    transitionDuration: 0,
    gutter: 24
  });

  imagesLoaded(grid).on('progress', () => { // eslint-disable-line no-undef
    msnry.layout();
  });

})();
