'use strict';

module.exports = {
  context: {
    primary_button: 'Submit',
    link: 'Cancel'
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
        secondary_button: 'Save for later',
        link: null
      }
    },
    {
      name: 'full',
      context: {
        secondary_button: 'Save for later'
      }
    }
  ]
};
