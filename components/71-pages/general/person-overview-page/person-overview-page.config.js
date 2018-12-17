'use strict';

const createItems = (amount) => {
  let array = [];

  for (let i = amount; i--;) {
    array.push(
      {
        teaser_uid: 'uid',
        paragraph_text: 'Function or job description comes here',
        title: 'Name and first name',
        link_text: 'read more',
        link: '#',
        image_src: 'https://loremflickr.com/280/280/person?random=' + i,
        image_alt_text: 'alt text',
        teaser_tag: 'Just some tag'
      });
  }

  return array;
};

module.exports = {
  title: 'Person Overview page',
  status: 'alpha',
  preview: '@preview-overview-without-padding',
  context: {
    people: createItems(30)
  },
  variants: [
    {
      name: 'with-filters'
    }
  ]
};
