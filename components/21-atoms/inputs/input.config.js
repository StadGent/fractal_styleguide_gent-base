'use strict';

function makeVariants(types, modifier, disabled) {
  return types.map(function (type) {
    return {
      name: `${type}${modifier ? '--' + modifier : ''}${disabled ? '--disabled-' + disabled : ''}`,
      preview: '@preview',
      context: {
        type: type,
        label: `input type ${type}`,
        id: `${type}${modifier ? '--' + modifier : ''}`,
        modifier: modifier,
        disabled: disabled
      }
    };
  });
}

module.exports = {
  title: 'Input',
  name: 'Input',
  status: 'beta',
  handle: 'input',
  default: 'text',
  preview: '@preview-description-list',
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
    ...makeVariants([
      'text',
      'email',
      'password',
      'number',
      'tel',
      'url',
      'radio',
      'checkbox'
    ]),
    {
      name: 'search',
      preview: '@preview',
      context: {
        type: 'search',
        id: 'search',
        placeholder: 'search placeholder',
        label: 'input type search'
      }
    },
    ...makeVariants([
      'text',
      'email',
      'password',
      'number',
      'tel',
      'url',
      'radio',
      'checkbox'
    ], 'error'),
    ...makeVariants([
      'text',
      'email',
      'password',
      'number',
      'tel',
      'url',
      'radio',
      'checkbox'
    ], 'success'),
    ...makeVariants([
      'text',
      'email',
      'password',
      'number',
      'tel',
      'url',
      'radio',
      'checkbox'
    ], null, true)
  ]
};
