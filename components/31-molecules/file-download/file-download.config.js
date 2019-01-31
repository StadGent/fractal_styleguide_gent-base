'use strict';

module.exports = {
  context: {
    link: '#',
    text: 'When the weather is hot',
    file: {
      size: '102 kb',
      type: 'pdf'
    }
  },
  variants: [
    {
      name: 'button',
      context: {
        modifier: 'button button-primary'
      }
    }
  ]
};
