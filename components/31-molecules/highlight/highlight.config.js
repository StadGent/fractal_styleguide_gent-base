'use strict';

module.exports = {
  default: 'image-left',
  context: {
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet vestibulum ex, id tincidunt nulla porttitor nec.</p>'
  },
  variants: [
    {
      name: 'image-left',
      context: {
        modifier: 'left'
      }
    },
    {
      name: 'image-top',
      context: {
        modifier: 'top'
      }
    },
    {
      name: 'no-image',
      hidden: true
    },
    ...[
      'badminton',
      'ball',
      'camera',
      'checklist',
      'form',
      'letter',
      'loupe',
      'mail',
      'newsletter',
      'question',
      'upload',
      'whistle'
    ].map(h => ({name: h, context: {modifier: 'top', classes: [h]}}))
  ]
};
