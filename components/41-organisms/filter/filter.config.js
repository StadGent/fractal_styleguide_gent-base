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

module.exports = {
  title: 'Filter',
  status: 'alpha',
  preview: '@preview-without-padding',
  name: 'Filter',
  context: {
    checkboxes: generateCheckboxes('checkbox-with-filter')
  }
};
