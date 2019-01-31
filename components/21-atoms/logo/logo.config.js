'use strict';

module.exports = {
  hidden: true,
  context: {
    site_name: 'Stad.gent'
  },
  variants: [
    {
      name: 'subsite',
      context: {
        type: 'subsite',
        site_name: 'ICT supplier Digipolis Gent'
      }
    }
  ]
};
