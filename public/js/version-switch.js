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

(function (){
  'use strict'

  var projectVersion = 0;

  // ProjectVersion is added to the window in header.nunj.
  if (window.frctl && window.frctl.projectVersion) {
    projectVersion = window.frctl.projectVersion.split('.')[0]
  }

  fetch('https://api.github.com/repos/StadGent/fractal_styleguide_gent-base/releases/latest')
    .then(response => response.json())
    .then(release => release.name.split('.')[0])
    .then(releasedVersion => {
      if(+releasedVersion > +projectVersion &&
        window.confirm('This is an outdated version of Ghent Styleguide \nDo you want to browse the current version instead?')) {
        window.location = '/v' + releasedVersion;
      }
    })
})()
