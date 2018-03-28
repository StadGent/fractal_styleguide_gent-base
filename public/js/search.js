(function () {
  'use strict';
  var components = document.querySelector('#tree-components');

  var hide = function (elem) {
    if (!(elem.tagName === 'LI' || elem.tagName === 'UL')) {
      return;
    }
    elem.setAttribute('hidden', 'true');

    if (elem.parentNode.querySelectorAll('li:not([hidden=true])').length === 0) {
      hide(elem.parentNode);
    }
  };

  var show = function (elem) {

    // if it's a collection, iterate
    if(elem.length > 0) {
      for(var i = elem.length; i--;) {
        show(elem[i])
      }
      return;
    }

    if ((elem.tagName === 'LI' || elem.tagName === 'UL')) {
      elem.removeAttribute('hidden');

      if (elem.parentNode.querySelectorAll('li:not([hidden=true])').length > 0) {
        show(elem.parentNode);
      }
    }
  };

  var filter = function (e) {
    var spans = components.querySelectorAll('span');
    for (var i = spans.length; i--;) {
      if (spans[i].innerHTML.toUpperCase()
          .indexOf(e.target.value.toUpperCase()) === -1) {
        if (spans[i].parentNode.tagName === 'A') {
          hide(spans[i].parentNode.parentNode);
        }
      }
      else {
        if (spans[i].parentNode.classList.contains('Tree-collectionLabel')) {
          show(spans[i].parentNode.parentNode.querySelectorAll('ul > li'))
        }
        else {
          show(spans[i].parentNode.parentNode);
        }
      }
    }
  };

  var addEvents = function () {
    var inputField = document.querySelector('#search');
    if (inputField && components) {
      inputField.addEventListener('input', filter);
    }
  };

  addEvents();
})();