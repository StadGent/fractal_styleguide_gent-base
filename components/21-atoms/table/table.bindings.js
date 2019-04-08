/** global ResponsiveTable, MobileTable */

'use strict';

(function () {
  var tablesNodeList = document.querySelectorAll('.responsive-table');

  // Optimise all tables with a wrapper div.responsive-table
  for (var i = 0; i < tablesNodeList.length; i++) {
    var table = tablesNodeList[i];

    // Adds accessibility support.
    new ResponsiveTable(table, {
      scrollableText: '(scroll to see more)'
    });

    // Adds a mobile solution using definition lists.
    new MobileTable(table);
  }

})();
