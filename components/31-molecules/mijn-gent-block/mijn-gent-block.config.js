'use strict';

module.exports = {
  title: 'Mijn Gent block',
  status: 'beta',
  handle: 'mijn-gent-block',
  preview: '@preview-mijn-gent',
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
