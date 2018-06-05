/**
 * @file
 * Javascript binding of baguettebox.min.js.
 */
'use strict';

(function () {

  var elements = document.getElementsByClassName('multiselect-tagging'); // eslint-disable-line no-undef

  for (var i = 0; i < elements.length; i++) {
    new Choices(elements[i], { // eslint-disable-line no-undef
      searchEnabled: false,
      removeItems: true,
      removeItemButton: true
    });
  }

})();
