/** eslint-disable no-console */

'use strict';

(function () {
  var tablesNodeList = document.querySelectorAll('.responsive-table');

  // Optimise all tables with a wrapper div.responsive-table
  for (var i = 0; i < tablesNodeList.length; i++) {
    var table = tablesNodeList[i];

    // Adds accessibility support.
    new ResponsiveTable(table, { // eslint-disable-line no-undef
      scrollableText: '(scroll to see more)'
    });

    // Adds a mobile solution using definition lists.
    new MobileTable(table); // eslint-disable-line no-undef
  }

})();
