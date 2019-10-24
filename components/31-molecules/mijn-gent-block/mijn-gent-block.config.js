'use strict';

module.exports = {
  hidden: true,
  default: 'logged-in',
  context: {
    auth: false,
    image: true,
    accordion: true
  },
  variants: [
    {
      name: 'logged-in',
      context: {
        auth: true
      }
    },
    {
      name: 'logged-out',
      context: {
        auth: false
      }
    },
    {
      name: 'no-image',
      context: {
        auth: true,
        image: false
      }
    }
  ]
};
