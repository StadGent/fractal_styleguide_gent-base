'use strict';

module.exports = {
  title: 'Input url',
  status: 'beta',
  handle: 'input-url',
  context: {
    url_id: 'url_id',
    url_name: 'url_name'
  },
  variants: [
    {
      name: 'default',
      handle: 'input-url'
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
