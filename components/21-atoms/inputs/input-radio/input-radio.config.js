'use strict';

module.exports = {
  title: 'Input radio',
  status: 'beta',
  handle: 'input-radio',
  context: {
    id: 'radio_id',
    name: 'radio_name',
    label: 'radio label'
  },
  variants: [
    {
      name: 'default',
      handle: 'input-checkbox'
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
