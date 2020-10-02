'use strict';

const generateCheckboxes = (uid) =>{
  let result = [];
  for (let i = 5; i--;) {
    var title = 'Category ' + (5 - i);
    var value = 'category_' + (5 - i);
    var items = [];

    for (let j = 20; j--;) {
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

module.exports = {
  title: 'Checkbox with filter',
  status: 'deprecated',
  context: {
    label: 'Label checkbox',
    label_optional: 'Optional',
    label_count: 'value(s)',
    field_description: 'Optional field description.<br> --- <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur eveniet illo porro quis sint.',
    field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
    description: 'Description checkboxes.',
    options: generateCheckboxes()
  },
  variants: [
    {
      name: 'with-error',
      context: {
        modifier: 'error',
        options: generateCheckboxes('default')
      }
    },
    {
      name: 'with-success',
      context: {
        modifier: 'success',
        options: generateCheckboxes('with-success')
      }
    }
  ]
};
