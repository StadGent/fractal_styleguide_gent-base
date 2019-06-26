'use strict';

const coloredCells = [
  {
    row: 2,
    col: 2,
    className: 'success'
  },
  {
    row: 6,
    col: 4,
    className: 'warning'
  },
  {
    row: 4,
    col: 5,
    className: 'error'
  }
];

const coloredRows = [{
  row: 9,
  className: 'success'
}];

/**
 * Returns the class attribute with a color class for a given cell.
 *
 * @param {int} row
 *  Index of the row to check.
 * @param {int} col
 *  Index of the column to check.
 *
 * @return {string}
 *  CSS class attribute in attr="value" format.
 */
const getColorClass = (row, col) => {
  let result;

  if (!col) {
    result = Array.find(coloredRows, item => item.row === row);
  }
  else {
    result = Array.find(coloredCells, item => item.row === row && item.col === col);
  }

  return result && `class="${result.className}"`;
};

/**
 * Generates an array with rows and columns.
 *
 * @param {Boolean} columnHeaders
 *   Whether or not the first column is a row with headers.
 * @param {Boolean} rowHeaders
 *   Whether or not the first column is a column with headers.
 * @param {int} rows
 *   Number of rows in the table.
 * @param {int} cols
 *   Number of columns in the table.
 *
 * @return {array}
 *  An structured object with information about the table.
 */
const generateTable = (columnHeaders, rowHeaders, rows = 10, cols = 6) => {
  let table = {
    rows: [],
    columnHeaders,
    rowHeaders
  };

  for (let row = 1; row < rows + 1; row++) {
    let tr = {
      attributes: getColorClass(row),
      cells: []
    };

    for (let col = 1; col < cols + 1; col++) {
      if (columnHeaders && row === 1) {
        tr.cells.push({
          header: true,
          attributes: 'scope="col"',
          text: `Header column ${col}`
        });
      }
      else if (rowHeaders && col === 1) {
        tr.cells.push({
          header: true,
          attributes: 'scope="row"',
          text: `Header row ${row}`
        });
      }
      else {
        tr.cells.push({
          header: false,
          attributes: getColorClass(row, col),
          text: `Row ${row}, column ${col}`
        });
      }
    }

    table.rows.push(tr);
  }

  return table;
};

module.exports = {
  default: 'table',
  context: {
    table: generateTable(true, true),
    caption: 'This is a table caption that describes the table content.'
  },
  variants: [{
    name: 'table'
  },
  {
    name: 'table-without-column-headers',
    context: {
      table: generateTable(false, true)
    }
  },
  {
    name: 'table-without-row-headers',
    context: {
      table: generateTable(true, false)
    }
  },
  {
    name: 'table-without-headers',
    context: {
      table: generateTable(false, false)
    }
  }
  ]
};
