'use strict';

/* global define, module */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else {
    if (typeof exports === 'object') {
      module.exports = factory();
    }
    else {
      root.MobileTable = factory();
    }
  }
}(this || window, function () {
  return function (element) {

    /**
     * The table caption.
     */
    let caption = null;

    /**
     * The responsive list version of the table.
     */
    let tableList = null;

    /**
     * The options of the table.
     */
    let options = {};

    /**
     * Add a wrapper div with class .table-list as next sibling to the table.
     */
    const addTableList = () => {
      tableList = document.createElement('div');
      tableList.classList.add('table-list');
      element.parentNode.insertBefore(tableList, null);
    };

    /**
     * Adds the individual items to the list <ul></ul> of the table-list wrapper.
     *
     * @param {Object} list
     *   The list to add in elements based on the table.
     */
    const addListItems = (list) => {
      // Get the headers of the table columns.
      let colHeadingsNodeList = element.querySelector('table').querySelectorAll('th[scope="col"');
      // Get the headers of the table rows.
      let rowHeadingsNodeList = element.querySelector('table').querySelectorAll('th[scope="row"]');
      // Get all rows of the table.
      let rowsNodeList = element.querySelector('table').querySelectorAll('tr');
      // Define an inital start to loop the rows.
      let initial = '';

      // The first row of the table.
      const firstRow = element.querySelector('tr');

      if (firstRow.getElementsByTagName('th').length === firstRow.querySelectorAll('*').length) {
        options.columnHeaders = true;
      }
      else {
        options.columnHeaders = false;
      }

      // Determine if we have column headers. If so set the initial row +1.
      initial = (options.columnHeaders) ? 1 : 0;

      // Add the rows as a list item.
      for (let i = initial; i < rowsNodeList.length; i++) {
        let row = rowsNodeList[i];

        // Get all the columns of the table based on the current row.
        let colsNodeList = row.querySelectorAll('td');

        let listItem = document.createElement('li');
        list.appendChild(listItem);

        // Add a header based on the row heading.
        if (rowHeadingsNodeList !== undefined) { // eslint-disable-line no-undefined
          let header = document.createElement('h3');
          header.innerHTML = row.querySelector('th[scope="row"]').innerHTML;
          listItem.appendChild(header);
        }

        // Create the definition list containing all columns as dd's.
        let defList = document.createElement('dl');
        listItem.appendChild(defList);

        for (let j = 0; j < colsNodeList.length; j++) {
          let column = colsNodeList[j];

          if (colHeadingsNodeList.length > 0) {
            let term = document.createElement('dt');
            term .innerHTML = colHeadingsNodeList[j + 1].innerHTML; // Refactor this j + 1 line.
            defList.appendChild(term);
          }

          let item = document.createElement('dd');
          item.innerHTML = column.innerHTML;
          defList.appendChild(item);
        }
      }
    };

    /**
     * Add an unordered list element to the table-list container.
     */
    const addList = () => {
      let list = document.createElement('ul');
      tableList.appendChild(list);
      addListItems(list);
    };

    /**
     * Add the table caption as a description to the definition lists.
     */
    const addListDescription = () => {
      let description = document.createElement('div');
      description.setAttribute('class', 'list-description');
      description.innerHTML = caption.innerHTML;
      tableList.appendChild(description);
    };

    /**
     * Build a mobile version of the table with definition lists.
     */
    const buildMobileTable = () => {
      addTableList();
      addList();
      addListDescription();
    };

    /**
     * Entry point of the script.
     *
     */
    const init = () => {
      if (!element) {
        return;
      }

      // Get the table caption for later use.
      caption = element.querySelector('caption');

      // Build a definition list based on the table for mobile use.
      buildMobileTable();
    };

    init();

    return {init};
  };
}));
