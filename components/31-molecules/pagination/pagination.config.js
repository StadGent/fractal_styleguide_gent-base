'use strict';

module.exports = {
  context: {
    total: 5555,
    active: 1
  },
  variants: [
    {
      name: 'large_2',
      context: {
        total: 5555,
        active: 3
      }
    },
    {
      name: 'large_3',
      context: {
        total: 5555,
        active: 2555
      }
    },
    {
      name: 'large_4',
      context: {
        total: 5555,
        active: 5554
      }
    },
    {
      name: 'large_5',
      context: {
        total: 5555,
        active: 5555
      }
    },
    {
      name: 'large_6',
      context: {
        total: 5555,
        active: 5553
      }
    },
    {
      name: 'small_1',
      context: {
        total: 3,
        active: 1
      }
    },
    {
      name: 'small_2',
      context: {
        total: 3,
        active: 2
      }
    },
    {
      name: 'small_3',
      context: {
        total: 3,
        active: 3
      }
    }
  ]
};
