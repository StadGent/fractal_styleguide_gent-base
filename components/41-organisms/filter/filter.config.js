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
      paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet et impedit neque nobis ratione, totam unde? A asperiores, nam nihil quam repellat voluptatibus?',
      title: 'Search result',
      link: '#',
      link_text: 'read more',
      tag: 'some tag'
    });
  }
  return result;
};


module.exports = {
  title: 'Filter',
  status: 'alpha',
  preview: '@preview-without-padding',
  name: 'Filter',
  context: {
    checkboxes: generateCheckboxes('checkbox-with-filter'),
    results: generateTeasers('search teasers')
  }
};
