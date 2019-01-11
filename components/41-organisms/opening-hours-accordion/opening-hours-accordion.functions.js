'use strict';

/* global define, module */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else {
    if (typeof exports === 'object') {
      module.exports = factory();
    }
    else {
      root.OpeningHoursAccordion = factory();
    }
  }
})(this || window, function () {

  return function (elem, options) {

    if (!options) {
      options = {};
    }

    const tabs = elem.querySelectorAll(
      '[role=tab]' || options.tabSelector
    );

    const init = () => {
      for (let i = tabs.length; i--;) {
        tabs[i].addEventListener('click', function (e) {
          var evt = window.document.createEvent('UIEvents');
          evt.initUIEvent('resize', true, false, window, 0);
          window.dispatchEvent(evt);
        });
      }
    };

    init();

    return {init};
  };
});
