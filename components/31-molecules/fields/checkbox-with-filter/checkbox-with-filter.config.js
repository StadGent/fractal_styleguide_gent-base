'use strict';

const generateCheckboxes = (uid) =>{
  let result = [];
  for (let i = 10; i--;) {
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

module.exports = {
  title: 'Checkbox with filter',
  status: 'beta',
  collated: true,
  context: {
    label: 'Label checkbox',
    label_optional: 'Optional',
    label_count: 'value(s)',
    field_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex pellentesque neque, nec ultrices dui enim ut diam. Nam pellentesque velit pharetra, accumsan ante at, gravida turpis. Cras venenatis velit ut ipsum molestie pretium. Vivamus tellus metus, pretium eu nibh vitae, eleifend luctus dolor. Morbi feugiat tristique ante eu egestas. Nunc ligula magna, fringilla sed consequat id, pellentesque at risus. Nunc ex elit, tincidunt at lorem vel, mattis gravida nisl. Praesent sodales nibh massa, id ultrices metus viverra id.',
    field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
    description: 'Description checkboxes.',

    options: generateCheckboxes()
  },
  variants: [
    {
      name: 'default',
      handle: 'checkbox'
    },
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
