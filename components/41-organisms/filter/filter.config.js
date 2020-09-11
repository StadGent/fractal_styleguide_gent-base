'use strict';

const generateCheckboxes = (uid) =>{
  let result = [];
  for (let i = 2; i--;) {
    var title = 'Category ' + (10 - i);
    var value = 'category_ ' + (10 - i);
    var items = [];

    for (let j = 100; j--;) {
      items.push({
        label_checkbox: `Checkbox option ${i.toString() + j}`,
        checkbox_name: 'checkboxgroup[]',
        checkbox_id: `checkbox-${i.toString() + j}-${uid}`,
        checkbox_value: i.toString() + j
      });
    }

    result.push({
      title,
      value,
      items
    });
  }

  return result;
};

const generateTeasers = (uid)=>{
  let result = [];
  for (let i = 10; i--;) {
    result.push({
      teaser_uid: `search_teaser_${i}`,
      image_ratio: '8:5',
      image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
      image_alt_text: 'alt text',
      type: 'teaser--wide',
      paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet et impedit neque nobis ratione, totam unde? A asperiores, nam nihil quam repellat voluptatibus?',
      title: 'Search result',
      link: '#',
      link_text: 'Read more',
      tags: ['some tag']
    });
  }
  return result;
};


module.exports = {
  status: 'alpha',
  hidden: true,
  preview: '@preview-without-padding',
  context: {
    checkboxes: generateCheckboxes('checkboxes-with-filter'),
    results: generateTeasers('search teasers')
  }
};
