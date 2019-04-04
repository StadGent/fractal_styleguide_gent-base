/** eslint-disable no-console */

'use strict';

(function () {
  var tablesNodeList = document.querySelectorAll('.responsive-table');

  for (var i = 0; i < tablesNodeList.length; i++) {
    var table = tablesNodeList[i];
    new ResponsiveTable(table, { // eslint-disable-line no-undef
      scrollableText: '(scroll to see more)'
    });
  }

})();
