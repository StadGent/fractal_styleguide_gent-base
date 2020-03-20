'use strict';
(function () {
  var components = document.querySelector('#tree-components');
  var searchField = document.querySelector('#search');
  var searchButton = document.querySelector('#search-btn');
  var autoSearch = document.querySelector('#auto-search');
  var resultMessage = document.querySelector('#search-result');

  var hide = function (elem, next) {
    if (!(elem.tagName === 'LI' || elem.tagName === 'UL')) {
      next();
    }
    else {
      elem.setAttribute('hidden', 'true');
      elem.parentNode.querySelectorAll('li:not([hidden=true])').length === 0 ? hide(elem.parentNode, next) : next();
    }
  };

  var show = function (elem, next) {

    // if it's a collection, iterate
    if (elem.length > 0) {
      for (var i = elem.length; i--;) {
        show(elem[i], next);
      }
      return;
    }

    if (!(elem.tagName === 'LI' || elem.tagName === 'UL')) {
      next();
    }
    else {
      elem.removeAttribute('hidden');
      elem.classList.remove('is-closed');
      elem.parentNode.querySelectorAll('li:not([hidden=true])').length > 0 ? show(elem.parentNode, next) : next();
    }
  };

  var displayResult = function () {
    resultMessage.innerText = components.querySelectorAll('li:not([hidden])>a').length + ' components found';
  };

  var filter = function () {
    var spans = components.querySelectorAll('span');
    var value = searchField.value;
    var elementCount = spans.length;

    // Callback for recursive loop function.
    var updateElementCount = function () {
      elementCount--;
      if (elementCount <= 0) {
        displayResult();
      }
    };

    for (var i = spans.length; i--;) {
      if (spans[i].innerHTML.toUpperCase()
          .indexOf(value.toUpperCase()) === -1) {
        if (spans[i].parentNode.tagName === 'A') {
          // Hide the wrapping LI tag.
          hide(spans[i].parentNode.parentNode, updateElementCount);
        }
        else {
          updateElementCount();
        }
      }
      else {
        if (spans[i].parentNode.classList.contains('Tree-collectionLabel')) {
          // Unhide all nodes in the collection.
          var collection = spans[i].parentNode.parentNode.querySelectorAll('ul > li');
          // Update elementCount.
          elementCount += collection.length - 1;
          show(collection, updateElementCount);
        }
        else {
          // Unhide the wrapping LI tag.
          show(spans[i].parentNode.parentNode, updateElementCount);
        }
      }
    }
  };

  var addEvents = function () {
    if (!components) {
      return;
    }
    if (searchField && autoSearch) {
      searchField.addEventListener('input', function () {
        // Only filter on input if autosearch is enabled.
        if (autoSearch.checked) {
          filter();
        }
      });
    }
    if (searchButton) {
      searchButton.addEventListener('click', filter);
    }
  };

  addEvents();
})();
