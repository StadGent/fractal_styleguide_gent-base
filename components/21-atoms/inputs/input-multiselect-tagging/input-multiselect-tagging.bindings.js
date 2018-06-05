/**
 * @file
 * Javascript binding of choices.min.js.
 */
'use strict';

(function () {

  if (!Choices) { // eslint-disable-line no-undef
    return;
  }

  var elements = document.getElementsByClassName('multiselect-tagging'); // eslint-disable-line no-undef

  for (var i = elements.length; i--;) {
    new Choices(elements[i], { // eslint-disable-line no-undef
      searchEnabled: false,
      removeItems: true,
      removeItemButton: true
    });
  }

})();
