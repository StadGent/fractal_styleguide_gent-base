'use strict';
let previous;
const types = ['primary', 'secondary', 'dark', 'alert', 'success'];
const versions = [
  'button-small',
  'button-default',
  'button-large',
  'icon-download',
  'disabled',
  'button-block',
  'button-block icon-download'
];

const createVariant = (type, version) => {
  return {
    name: `${type}-${version}`,
    preview: '@preview',
    context: {
      text: version.charAt(0).toUpperCase() + version.slice(1),
      type: type,
      modifier: (() => {
        switch (version) {
          case 'button-default':
            return null;
          case 'disabled':
            return null;
          default:
            return version;
        }
      })(),
      disabled: version === 'disabled'
    }
  };
};

const reduceVersions = (type) => {
  return versions.reduce((accumulator, v) => {
    // Alert buttons already have an icon.
    if (type === 'alert' && v.indexOf('icon') >= 0) {
      return accumulator;
    }
    // Create a variant and add it to the result.
    return accumulator.concat(createVariant(type, v));
  }, []);
};

module.exports = {
  title: 'Button',
  name: 'Button',
  status: 'ready',
  handle: 'button',
  default: 'primary-button-small',
  preview: '@preview-description-list',
  collated: 'true',
  collator: function (markup, item) {
    let result = '';
    if (item.context.type !== previous) {
      result += `${previous ? '</dd>' : ''}<dt class="styleguide">${item.context.type}</dt><dd>`;
    }
    previous = item.context.type;
    result += `<!-- Start: @${item.handle} --><p>\n${markup}\n</p><!-- End: @${item.handle} -->\n`;
    return result;
  },
  context: {
    text: 'Button'
  },
  variants: types.reduce((accumulator, type) => accumulator.concat(reduceVersions(type)), [])
};
