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
    field_description: 'Optional field description.<br> --- <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur eveniet illo porro quis sint.',
    field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
    description: 'Description checkboxes.',
    modifier: 'default',
    id: 'default',
    options: generateCheckboxes('default', 2)
  },
  variants: [
    {
      name: 'more-than-6',
      modifier: 'more-than-6',
      id: 'more-than-6',
      context: {
        options: generateCheckboxes('default-6-plus', 20)
      }
    },
    {
      name: 'more-than-20',
      modifier: 'more-than-20',
      id: 'more-than-20',
      context: {
        options: generateCheckboxes('default-20-plus', 21)
      }
    },
    {
      name: 'with-error',
      context: {
        modifier: 'error',
        options: generateCheckboxes('default-20-plus', 21),
        field_description: null
      }
    }
  ]
};
