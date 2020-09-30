'use strict';

const generateCheckboxes = (uid, i) =>{
  let result = [];
  for (let j = i; j--;) {
    result.push({
      label: `Checkbox option ${j}`,
      id: `checkbox-${+j}-${uid}`,
      value: j
    });
  }

  return result;
};

module.exports = {
  title: 'Checkbox dynamic',
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
      name: 'more-then-6',
      modifier: 'more-then-6',
      id: 'more-then-6',
      context: {
        options: generateCheckboxes('default-6-plus', 20)
      }
    },
    {
      name: 'more-then-20',
      modifier: 'more-then-20',
      id: 'more-then-20',
      context: {
        options: generateCheckboxes('default-20-plus', 21)
      }
    },
    {
      name: 'with-error',
      context: {
        id: 'input_text--error',
        label: 'input-text',
        modifier: 'error',
        options: generateCheckboxes('with-error', 2)
      }
    },
    {
      name: 'with-success',
      context: {
        id: 'input-text--success',
        label: 'input-text',
        modifier: 'success',
        options: generateCheckboxes('with-success', 2)
      }
    }
  ]
};
