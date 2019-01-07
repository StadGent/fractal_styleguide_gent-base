'use strict';

module.exports = {
  title: 'Input number',
  status: 'beta',
  handle: 'input-number',
  context: {
    name: 'number_name',
    id: 'number_id'
  },
  variants: [
    {
      name: 'default',
      handle: 'input-number'
    },
    {
      name: 'success',
      hidden: 'hidden',
      context: {
        modifier: 'success'
      }
    },
    {
      name: 'error',
      hidden: 'hidden',
      context: {
        modifier: 'error'
      }
    },
    {
      name: 'disabled',
      hidden: 'hidden',
      context: {
        disabled: true
      }
    }
  ]
};
