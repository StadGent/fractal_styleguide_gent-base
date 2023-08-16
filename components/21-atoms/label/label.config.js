'use strict';

module.exports = {
  context: {
    label: 'Label name',
    type: '',
    icon: 'icon-tag'
  },
  variants: [
    {
      name: 'label success',
      context: {
        type: 'success'
      }
    },
    {
      name: 'label warning',
      context: {
        type: 'warning'
      }
    },
    {
      name: 'label error',
      context: {
        type: 'error'
      }
    }
  ]
};
