/* global ResponsiveTable */

'use strict';

(function () {
  var tablesNodeList = document.querySelectorAll('.responsive-table .table-wrapper');

  // Optimise all tables with a wrapper div.responsive-table
  for (var i = 0; i < tablesNodeList.length; i++) {
    var table = tablesNodeList[i];

    // Adds accessibility support.
    new ResponsiveTable(table, {
      scrollableText: '(scroll to see more)'
    });
  }

})();
