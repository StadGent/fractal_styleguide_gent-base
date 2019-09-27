'use strict';

module.exports = {
  status: 'alpha',
  context: {
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet vestibulum ex, id tincidunt nulla porttitor nec.</p>'
  },
  variants: [
    {
      name: 'spot-image-left',
      context: {
        modifier: 'left'
      }
    },
    {
      name: 'spot-image-top',
      context: {
        modifier: 'top'
      }
    }
  ]
};
