'use strict';

module.exports = {
  title: 'Input checkbox',
  name: 'Input checkbox',
  status: 'beta',
  handle: 'input-checkbox',
  context: {
    checkbox_id: 'checkbox_id',
    checkbox_name: 'checkbox_name',
    checkbox_label: 'Checkbox label'
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
