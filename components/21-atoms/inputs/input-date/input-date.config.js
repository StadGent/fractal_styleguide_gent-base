'use strict';

module.exports = {
  title: 'Input date',
  status: 'beta',
  handle: 'input-date',
  context: {
    date_name: 'date_name',
    date_id: 'date_id'
  },
  variants: [
    {
      name: 'default',
      handle: 'input-date'
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
        disabled: 1
      }
    }
  ]
};

