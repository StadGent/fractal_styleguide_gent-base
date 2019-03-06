'use strict';

module.exports = {
  status: 'beta',
  context: {
    tag_text: 'Inner city',
    type: 'tag'
  },
  variants: [
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
