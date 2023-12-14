'use strict';

module.exports = {
  variants: [
    {
      name: 'default',
      context: {
        type: 'important',
        icon: 'exclamation-circle',
        note: 'Important info'
      }
    },
    {
      name: 'Time-bound info',
      context: {
        type: 'timebound',
        icon: 'clock',
        note: 'Time-bound info'
      }
    },
    {
      name: 'Payment info',
      context: {
        type: 'payment',
        icon: 'euro',
        note: 'Payment info'
      }
    },
    {
      name: 'Not to be missed info',
      context: {
        type: 'unmissable',
        icon: 'exclamation-circle',
        note: 'Info that can\'t be missed'
      }
    }
  ]
};
