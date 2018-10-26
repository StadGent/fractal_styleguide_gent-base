'use strict';

module.exports = {
  title: 'Modal',
  name: 'modal',
  status: 'alpha',
  preview: '@preview-description-list',
  hidden: true,
  variants: [
    {
      name: 'default',
      preview: '@preview',
      hidden: true
    },
    {
      name: 'fixed-height',
      label: 'Fixed Height',
      preview: '@preview',
      context: {
        modifier: 'fixed-height'
      }
    }
  ]
};
