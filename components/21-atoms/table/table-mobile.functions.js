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

  var tableList = null;

  /**
   * Build
   */
  var addTableList = function () {
    var tableListContainer = document.createElement('div');
    tableListContainer.setAttribute('class', 'table-list');
    table.parentNode.insertBefore(tableListContainer, tableListContainer.nextSibling);

    tableList = table.nextElementSibling;
  };

  var addListItems = function (list) {
    var rowsNodeList = table.querySelector('table').querySelectorAll('tr');
    var headingsNodeList = table.querySelector('table').querySelectorAll('th[scope="col"');

    for (var i = 0; i < rowsNodeList.length; i++) {
      var row = rowsNodeList[i];

      // Exclude first row as they are headers.
      if (i !== 0) {
        var listItem = document.createElement('li');
        list.appendChild(listItem);

        var colsNodeList = row.querySelectorAll('td');

        var header = document.createElement('h3');
        header.innerHTML = row.querySelector('th').innerHTML;
        listItem.appendChild(header);

        var defList = document.createElement('dl');
        listItem.appendChild(defList);

        for (var j = 0; j < colsNodeList.length; j++) {
          var column = colsNodeList[j];

          var dt = document.createElement('dt');
          dt.innerHTML = headingsNodeList[j+1].innerHTML; // Refactor this j + 1 line.
          defList.appendChild(dt);

          var item = document.createElement('dd');
          item.innerHTML = column.innerHTML;
          defList.appendChild(item);
        }
      }
    }
  };

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

  init(element);
};
