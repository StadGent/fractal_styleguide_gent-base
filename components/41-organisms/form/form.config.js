'use strict';

module.exports = {
  status: 'alpha',
  variants: [
    {
      name: 'wizard',
      context: {
        modifier: 'wizard',
        steps: [
          {text: 'first step', url: '#'},
          {text: 'second step', url: '#'},
          {text: 'active step', url: '#'},
          {text: 'Step with a long name', url: '#'},
          {text: 'inactive fifth step'},
        ],
      }
    }
  ]
};
