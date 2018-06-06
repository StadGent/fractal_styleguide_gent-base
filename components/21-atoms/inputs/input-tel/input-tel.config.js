'use strict';

module.exports = {
  title: 'Input tel',
  status: 'beta',
  handle: 'input-tel',
  context: {
    tel_id: 'tel_id',
    tel_name: 'tel_name'
  },
  variants: [
    {
      name: 'default',
      handle: 'input-tel'
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
