'use strict';

module.exports = {
  hidden: true,
  default: 'logged-in',
  context: {
    auth: 'false'
  },
  variants: [
    {
      name: 'logged-in',
      context: {
        auth: 'true'
      }
    },
    {
      name: 'logged-out',
      context: {
        auth: 'false'
      }
    }
  ]
};
