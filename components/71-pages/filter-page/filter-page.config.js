'use strict';

const generateCheckboxes = (uid)=>{
  let result = [];
  for (let i = 195; i--;) {
    result.push({
      label_checkbox: `Checkbox option ${i}`,
      checkbox_name: 'checkboxgroup[]',
      checkbox_id: `checkbox-${i}-${uid}`,
      checkbox_value: i
    });
  }
  return result;
};

const generateTeasers = (uid)=>{
  let result = [];
  for (let i = 10; i--;) {
    result.push({
      teaser_uid: `search_teaser_${i}`,
      teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet et impedit neque nobis ratione, totam unde? A asperiores, nam nihil quam repellat voluptatibus?',
      teaser_title: 'Search result',
      teaser_link_link: '#',
      teaser_link_text: 'read more',
      teaser_tag: 'some tag'
    });
  }
  return result;
};

module.exports = {
  title: 'Filter page',
  status: 'alpha',
  preview: '@preview-without-padding',
  context: {
    teasers: generateTeasers('filter-page-teaser'),
    checkboxes: generateCheckboxes('checkbox-with-filter')
  }
};
