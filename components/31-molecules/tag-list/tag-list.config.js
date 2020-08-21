'use strict';

module.exports = {
  context: {
    tags: [
      {
        tag_text: 'In the',
        type: 'span-tag'
      },
      {
        tag_text: 'summer time',
        type: 'span-tag'
      },
      {
        tag_text: 'when the weather',
        type: 'span-tag'
      },
      {
        tag_text: 'is fine',
        type: 'span-tag'
      }
    ]
  },
  variants: [
    {
      name: 'link',
      context: {
        tags: [
          {
            tag_text: 'In the',
            type: 'tag'
          },
          {
            tag_text: 'summer time',
            type: 'tag'
          },
          {
            tag_text: 'when the weather',
            type: 'tag'
          },
          {
            tag_text: 'is fine',
            type: 'tag'
          }
        ]
      }
    }
  ]
};
