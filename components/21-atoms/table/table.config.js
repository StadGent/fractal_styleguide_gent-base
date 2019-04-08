'use strict';

module.exports = {
  default: 'table',
  context: {
    columnHeaders: true,
    rowHeaders: true,
    numberOfRows: 10,
    numberOfCols: 6,
    caption: 'This is a table caption that describes the table content.'
  },
  variants: [
    {
      name: 'table',
      context: {}
    },
    {
      name: 'table-without-column-headers',
      context: {
        columnHeaders: false
      }
    },
    {
      name: 'table-without-row-headers',
      context: {
        rowHeaders: false
      }
    }
  ]
};
