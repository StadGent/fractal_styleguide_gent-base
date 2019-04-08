'use strict';

var MobileTable = function (element) { // eslint-disable-line no-unused-vars
  /**
   * The table wrapper.
   */
  var table = null;

  /**
   * The table caption.
   */
  var caption = null;

  /**
   * The responsive list version of the table.
   */
  var tableList = null;

  /**
   * Add a wrapper div with class .table-list as next sibling to the table.
   */
  var addTableList = function () {
    var tableListContainer = document.createElement('div');
    tableListContainer.setAttribute('class', 'table-list');
    table.parentNode.insertBefore(tableListContainer, tableListContainer.nextSibling);

    tableList = table.nextElementSibling;
  };

  /**
   * Adds the individual items to the list <ul></ul> of the table-list wrapper.
   */
  var addListItems = function (list) {
    // Get the headers of the table columns.
    var headingsNodeList = table.querySelector('table').querySelectorAll('th[scope="col"');
    // Get all rows of the table.
    var rowsNodeList = table.querySelector('table').querySelectorAll('tr');

    // Add the rows as a list item.
    for (var i = 0; i < rowsNodeList.length; i++) {
      var row = rowsNodeList[i];

      // Get all the columns of the table based on the current row.
      var colsNodeList = row.querySelectorAll('td');

      // Exclude first row as they contain the headers.
      if (i !== 0) {
        var listItem = document.createElement('li');
        list.appendChild(listItem);

        // Add a header based on the row heading.
        var header = document.createElement('h3');
        header.innerHTML = row.querySelector('th').innerHTML;
        listItem.appendChild(header);

        // Create the definition list containing all columns as dd's.
        var defList = document.createElement('dl');
        listItem.appendChild(defList);

        for (var j = 0; j < colsNodeList.length; j++) {
          var column = colsNodeList[j];

          var term = document.createElement('dt');
          term .innerHTML = headingsNodeList[j + 1].innerHTML; // Refactor this j + 1 line.
          defList.appendChild(term);

          var item = document.createElement('dd');
          item.innerHTML = column.innerHTML;
          defList.appendChild(item);
        }
      }
    }
  };

  /**
   * Add an unordered list element to the table-list container.
   */
  var addList = function () {
    var list = document.createElement('ul');
    tableList.appendChild(list);
    addListItems(list);
  };

  /**
   * Add the table caption as a description to the definition lists.
   */
  var addListDescription = function () {
    var description = document.createElement('div');
    description.setAttribute('class', 'list-description');
    description.innerHTML = caption.innerHTML;
    tableList.appendChild(description);
  };

  /**
   * Build a mobile version of the table with definition lists.
   */
  var buildMobileTable = function () {
    addTableList();
    addList();
    addListDescription();
  };

  /**
   */
  /**
   * Entry point of the script.
   *
   * @param element
   *   The element.
   */
  var init = function (element) {
    if (!element) {
      return;
    }

    table = element;
    caption = table.querySelector('caption');

    buildMobileTable();
  };

  init();
};
