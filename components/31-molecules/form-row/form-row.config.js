'use strict';

module.exports = {
  hidden: true,
  context: {
    first: {
      label: 'Postal code',
      id: 'postal-code_id',
      input_component: 'input',
      type: 'text',
      modifier: 'error',
      field_message: 'Almost there!',
      field_description: 'Wrap form items in a .form-row element.',
      name: 'postal-code_name'
    },
    second: {
      label: 'Municipality',
      id: 'municipality_id',
      input_component: 'input',
      type: 'text',
      modifier: 'success',
      field_message: 'Very good!',
      field_description: 'Place modifier .stacked on the form-items.',
      name: 'municipality_name'
    }
  }
};
