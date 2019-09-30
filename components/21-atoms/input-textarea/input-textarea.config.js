'use strict';

module.exports = {
  hidden: true,
  status: 'beta',
  context: {
    id: 'textarea_id',
    name: 'textarea_name'
  },
  variants: [
    {
      name: 'success',
      context: {
        id: 'textarea_id--success',
        modifier: 'success'
      }
    },
    {
      name: 'error',
      context: {
        id: 'textarea_id--error',
        modifier: 'error'
      }
    },
    {
      name: 'disabled',
      context: {
        id: 'textarea_id--disabled',
        disabled: true
      }
    }
  ]
};
