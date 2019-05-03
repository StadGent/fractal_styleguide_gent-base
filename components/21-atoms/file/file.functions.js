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
      root.File = factory();
    }
  }
}(this || window, function () {
  return function (elem, options) {
    const input = elem.querySelector('input[type="file"]');

    if (!input) {
      throw new Error('Element input[type="file"] not found.');
    }

    options = options || {};

    /**
     * Update the filename of the uploaded file.
     *
     * @param {Event} e
     *  Event object for the change event.
     *
     */
    const updateFile = e => {
      if (!input.files.length) {
        elem.dataset.file = options.emptyText || elem.dataset.emptyText || 'No file chosen.';
        return;
      }

      if (input.files.length > 1) {
        elem.dataset.file = options.multipleText || elem.dataset.multipleText || 'Multiple files.';
        return;
      }

      elem.dataset.file = input.files[0].name;
    };

    /**
     * Initialize the FileUpload component
     */
    const init = () => {
      if (input.hasAttribute('multiple')) {
        return;
      }

      input.addEventListener('change', updateFile);
      updateFile();
    };

    init();

    return {updateFile};
  };
}));
