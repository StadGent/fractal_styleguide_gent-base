'use strict';

module.exports = {
  title: 'Input textarea',
  status: 'beta',
  handle: 'input-textarea',
  context: {
    textarea_id: 'textarea_id',
    textarea_name: 'textarea_name'
  },
  variants: [
    {
      name: 'default',
      handle: 'input-textarea'
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
