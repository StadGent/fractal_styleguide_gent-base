'use strict';

/**
 * List of all supported icon types.
 *
 * @type {string[]}
 */
const icons = [
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'calendar',
  'chat-round',
  'chat',
  'checkmark-checkbox',
  'checkmark-circle',
  'checkmark',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'clock',
  'cross',
  'digipolis',
  'document',
  'download',
  'envelope',
  'exclamation-circle',
  'exclamation',
  'external-link',
  'facebook',
  'fancyback',
  'favicon',
  'fax',
  'filter',
  'flickr',
  'googleplus',
  'hamburger',
  'heart',
  'home',
  'image',
  'instagram',
  'lightning',
  'linkedin',
  'lock-closed',
  'lock-open',
  'logo-en',
  'logo-es',
  'logo-fr',
  'logo-nl',
  'logo-sp',
  'marker',
  'minus',
  'normalphone',
  'phone',
  'plus',
  'readspeaker',
  'search',
  'share',
  'star-empty',
  'star-full',
  'star-half',
  'twitter-outline',
  'twitter',
  'user',
  'url',
  'vimeo',
  'youtube'
];

/**
 * Helper to convert the list of icon names to a list of icon variants.
 *
 * @return {Array}
 *   The array of variant configurations.
 */
function getIconVariants() {
  let variants = [];
  let len = icons.length;

  for (let i = 0; i < len; i++) {
    let icon = icons[i];
    let variant = {
      name: icon,
      context: {
        icon: icon
      }
    };
    variants.push(variant);
  }

  return variants;
}

module.exports = {
  status: 'ready',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>.icon-${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  default: icons[0],
  variants: getIconVariants()
};
