'use strict';

module.exports = {
  hidden: false,
  context: {
    steps: [
      {text: 'first step', url: '#'},
      {text: 'second step', url: '#'},
      {text: 'active step', url: '#'},
      {text: 'Step with a long name', url: '#'},
      {text: 'inactive fifth step'},
      {text: 'inactive sixth step'},
      {text: 'inactive seventh step'}
    ],
    active: 3
  },

  variants: [
    {
      name: 'vertical',
      context: {
        modifier: 'vertical'
      }
    }
  ]
};
