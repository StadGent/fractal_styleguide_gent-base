'use strict';

module.exports = {
  context: {
    modifier: null,
    tags: [
      {
        text: 'In the',
        type: 'span-tag'
      },
      {
        text: 'summer time',
        type: 'span-tag'
      },
      {
        text: 'when the weather',
        type: 'span-tag'
      },
      {
        text: 'is fine',
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
            text: 'In the',
            type: 'tag'
          },
          {
            text: 'summer time',
            type: 'tag'
          },
          {
            text: 'when the weather',
            type: 'tag'
          },
          {
            text: 'is fine',
            type: 'tag'
          }
        ]
      }
    },
    {
      name: 'filter',
      context: {
        tags: [
          {
            text: 'In the',
            type: 'filter-tag'
          },
          {
            text: 'summer time',
            type: 'filter-tag'
          },
          {
            text: 'when the weather',
            type: 'filter-tag'
          },
          {
            text: 'is fine',
            type: 'filter-tag'
          }
        ],
        link: {
          link: '#',
          text: 'Remove all filters'
        }
      }
    }
  ]
};
