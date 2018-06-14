'use strict';

module.exports = {
  title: 'Mijn Gent block',
  status: 'ready',
  hidden: 'true',
  handle: 'mijn-gent-block',
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
