'use strict';

module.exports = {
  context: {
    id: 'file-upload',
    label: 'Attachment'
  },
  variants: [
    {
      name: 'multiple',
      context: {
        label: 'Attachments (max. 3)'
      }
    },
    {
      name: 'stacked',
      context: {
        label: 'Attachments (max. 3)',
        itemLabel: 'Attachment %s of 3'
      }
    }
  ]
};
