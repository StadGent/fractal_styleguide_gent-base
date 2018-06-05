'use strict';

module.exports = {
  title: 'Input text',
  status: 'beta',
  handle: 'input-text',
  context: {
    textfield_id: 'textfield_id',
    textfield_name: 'textfield_name'
  },
  variants: [
    {
      name: 'default',
      handle: 'input-text'
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
