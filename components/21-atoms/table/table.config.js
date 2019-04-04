'use strict';

module.exports = {
  default: 'table',
  context: {
    numberOfRows: 10,
    numberOfCols: 6,
    caption: 'This is a table caption that describes the table content.'
  },
  variants: [
    {
      name: 'table',
      context: {}
    }
  ]
};
