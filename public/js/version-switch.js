(function () {
  'use strict';

  var wrapper = document.getElementById('version');
  if (!wrapper) {
    return;
  }
  var btn = document.getElementById('version-toggle');
  if (!btn) {
    return;
  }
  var list = document.getElementById(btn.getAttribute('aria-controls'));
  if (!list) {
    return;
  }

  var documentToggle = function (e) {
    if (!wrapper.contains(e.target)) {
      toggle();
    }
  };

  var toggle = function () {
    var isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !isExpanded);
    list.setAttribute('aria-hidden', isExpanded);

    if (!isExpanded) {
      document.addEventListener('click', documentToggle);
    }
    else {
      document.removeEventListener('click', documentToggle);
    }
  };

  btn.addEventListener('click', toggle);
})();
