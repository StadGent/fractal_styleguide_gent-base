'use strict';

module.exports = {
  default: 'image-left',
  context: {
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet vestibulum ex, id tincidunt nulla porttitor nec.</p>'
  },
  variants: [
    {
      name: 'image-left',
      context: {
        modifier: 'left'
      }
    },
    {
      name: 'image-top',
      context: {
        modifier: 'top'
      }
    },
    {
      name: 'no-image',
      hidden: true
    }
  ]
};
