'use strict';

module.exports = {
  context: {
    tag_text: 'Inner city',
    type: 'tag'
  },
  variants: [
    {
      name: 'external-link-tag',
      context: {
        tag_text: 'External link',
        type: 'external-tag'
      }
    },
    {
      name: 'filter-tag',
      context: {
        tag_text: 'Inner city',
        type: 'filter-tag'
      }
    },
    {
      name: 'span-tag',
      context: {
        tag_text: 'Inner city',
        type: 'span-tag'
      }
    }
  ]
};
