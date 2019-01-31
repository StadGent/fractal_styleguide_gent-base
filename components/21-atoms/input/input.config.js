'use strict';

function makeVariants(types, modifier, disabled) {
  return types.map(function (type) {
    return {
      name: `${type}${modifier ? '--' + modifier : ''}${disabled ? '--disabled-' + disabled : ''}`,
      context: {
        type: type,
        label: `input type ${type}`,
        id: `${type}${modifier ? '--' + modifier : ''}${disabled ? '--disabled-' + disabled : ''}`,
        modifier: modifier,
        disabled: disabled
      }
    };
  });
}

const types = [
  'text',
  'email',
  'password',
  'number',
  'date',
  'tel',
  'url',
  'radio',
  'checkbox'
];

module.exports = {
  status: 'beta',
  default: 'text',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    name: 'input_name',
    type: 'text',
    label: 'input type text'
  },
  variants: [
    ...makeVariants(types),
    {
      name: 'search',
      context: {
        type: 'search',
        id: 'search',
        placeholder: 'search placeholder',
        label: 'input type search'
      }
    },
    ...makeVariants(types, 'error'),
    ...makeVariants(types, 'success'),
    ...makeVariants(types, null, true)
  ]
};
