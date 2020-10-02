'use strict';

const generateCheckboxes = (uid, i) =>{
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

module.exports = {
  title: 'Checkbox dynamic',
  status: 'beta',
  context: {
    label: 'Checkboxes',
    id: 'default',
    field_description: 'Optional field description.<br> --- <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur eveniet illo porro quis sint.',
    field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
    description: 'Description checkboxes.',
    options: generateCheckboxes('default', 2)
  },
  variants: [
    {
      name: 'more-than-6',
      context: {
        id: 'more-than-6',
        options: generateCheckboxes('default-6-plus', 20)
      }
    },
    {
      name: 'more-than-20',
      context: {
        id: 'more-than-20',
        options: generateCheckboxes('default-20-plus', 21)
      }
    },
    {
      name: 'with-error',
      context: {
        modifier: 'error',
        id: 'with-error',
        options: generateCheckboxes('default-20-plus', 21),
        field_description: null
      }
    }
  ]
};
