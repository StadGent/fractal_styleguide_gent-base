'use strict';

const footerConfig = require('../../41-organisms/footer/footer.config').context;

const generateCheckboxes = (uid, i) => {
  let result = [];
  for (let j = i; j--;) {
    result.push({
      label: `Checkbox option ${j}`,
      id: `checkbox-${+j}-${uid}`,
      value: j,
      name: 'checkboxes-dynamic'
    });
  }

  return result;
};

const generateTeasers = (uid) => {
  let result = [];
  for (let i = 10; i--;) {
    result.push({
      teaser_uid: `search_teaser_${i}`,
      image_ratio: '1:1',
      image_src: 'https://via.placeholder.com/570x570&text=8:5+(570x570)',
      image_alt_text: 'alt text',
      type: 'teaser--wide',
      paragraph_text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet et impedit neque nobis ratione, totam unde? A asperiores, nam nihil quam repellat voluptatibus?',
      title: 'Search result',
      link: '#',
      link_text: 'Read more',
      tags: ['some tag']
    });
  }
  return result;
};

module.exports = {
  preview: '@preview-without-padding',
  context: {
    teasers: generateTeasers('filter-page-teaser'),
    checkboxes: generateCheckboxes('checkboxes-with-filter', 100),
    footerConfig
  }
};
