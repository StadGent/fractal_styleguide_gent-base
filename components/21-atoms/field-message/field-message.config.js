'use strict';

module.exports = {
  context: {
    field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="/">Donec</a> laoreet, urna sit amet convallis rhoncus, felis ex pellentesque neque, nec ultrices dui enim ut diam.'
  },
  variants: [
    {
      name: 'field-message-error',
      context: {
        modifier: 'error'
      }
    },
    {
      name: 'field-message-success',
      context: {
        modifier: 'success'
      }
    }
  ]
};
