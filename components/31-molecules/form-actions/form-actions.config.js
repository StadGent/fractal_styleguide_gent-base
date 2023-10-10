'use strict';

module.exports = {
  context: {
    primary_button: 'Next page',
    link: 'Erase all'
  },
  variants: [
    {
      name: 'simple',
      context: {
        link: null
      }
    },
    {
      name: 'secondary-button',
      context: {
        secondary_button: 'Previous page',
        link: null
      }
    },
    {
      name: 'full',
      context: {
        secondary_button: 'Previous page',
        link: null
      }
    }
  ]
};
