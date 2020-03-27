'use strict';

/**
 * Generate a number of breadcrumb items.
 *
 * @param {Int} count
 *   Number of items to return.
 * @return {Array}
 *   Array of breadcrumb items.
 */
const _generate = count => {
  let tag;
  let text;
  let result = [];
  let i = 0;

  while (i < count) {
    text = i === 0 ? 'Home' : `Item ${i}`;
    tag = 'a href=""';

    // Last item.
    if (i === count - 1) {
      tag = 'span';
      text = 'A very long page title with lots of words';
    }


    result.push(`<${tag}>${text}</${tag}>`);

    i++;
  }

  return result;
};

module.exports = {
  context: {
    items: _generate(4)
  },
  variants: [
    {
      name: 'long',
      context: {
        items: _generate(6)
      }
    },
    {
      name: 'extremely-long',
      context: {
        items: _generate(20)
      }
    }
  ]
};
