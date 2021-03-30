'use strict';

module.exports = {
  default: 'error',
  variants: [
    {
      name: 'error',
      context: {
        state: 'error',
        text: 'Text for error state'
      }
    },
    {
      name: 'warning',
      context: {
        state: 'warning',
        text: 'Text for warning state'
      }
    },
    {
      name: 'success',
      context: {
        state: 'success',
        text: 'Text for success state'
      }
    }
  ]
};
