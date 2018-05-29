'use strict';
let previous;

module.exports = {
  title: 'Button',
  name: 'Button',
  status: 'ready',
  handle: 'button-primary',
  default: 'button-primary-small',
  preview: '@preview-description-list',
  collated: 'true',
  collator: function (markup, item) {
    let result = '';
    if (item.context.type !== previous) {
      result += `${previous ? '</dd>' : ''}<dt class="styleguide-title">${item.context.type}</dt><dd>`;
    }
    previous = item.context.type;
    result += `<!-- Start: @${item.handle} -->\n${markup}\n<!-- End: @${item.handle} -->\n`;
    return result;
  },
  order: 1,
  context: {
    text: 'Button'
  },
  variants:
    (() => {
      let types = ['primary', 'secondary', 'dark', 'alert', 'success'];
      let versions = ['small', 'default', 'large', 'icon', 'disabled'];

      return types.reduce(
        (accumulator, type) => accumulator.concat(versions.map(v => {
          return {
            name: `button-${type}-${v}`,
            handle: `button-${type}`,
            context: {
              text: v.charAt(0).toUpperCase() + v.slice(1),
              type: type,
              modifier: (() => { // eslint-disable-line max-nested-callbacks
                switch (v) {
                  case 'icon':
                    return 'icon-download';
                  case 'default':
                    return null;
                  case 'disabled':
                    return null;
                  default:
                    return `button-${v}`;
                }
              })(),
              disabled: v === 'disabled'
            }
          };
        })), []
      );
    })()
};
