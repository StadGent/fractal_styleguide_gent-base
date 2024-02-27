'use strict';

/**
 * List of all supported icon types.
 *
 * @type {string[]}
 */
const icons = [
  'age',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-right-top',
  'arrow-up',
  'basket',
  'broken-link',
  'cart',
  'calendar',
  'chat-round',
  'chat',
  'checkmark-checkbox',
  'checkmark',
  'checkmark-circle',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'civil-affairs',
  'clock',
  'contact',
  'cross',
  'cross-circle',
  'culture',
  'district09',
  'document',
  'download',
  'education',
  'euro',
  'envelope',
  'environment',
  'exclamation',
  'exclamation-circle',
  'facebook',
  'favicon',
  'fax',
  'filter',
  'flickr',
  'fullscreen-enter',
  'fullscreen-exit',
  'ghent',
  'globe',
  'googleplus',
  'gsport',
  'hamburger',
  'health',
  'heart',
  'home',
  'image',
  'info',
  'info-circle',
  'instagram',
  'layers',
  'level',
  'lightning',
  'link',
  'linkedin',
  'living',
  'lock-closed',
  'lock-open',
  'logo-en',
  'logo-es',
  'logo-fr',
  'logo-nl',
  'logo-sp',
  'map',
  'marker',
  'minus',
  'mobility',
  'next',
  'normalphone',
  'pause',
  'pencil',
  'phone',
  'pinterest',
  'play',
  'plus',
  'previous',
  'question',
  'question-circle',
  'readspeaker',
  'refresh',
  'search',
  'settings',
  'share',
  'shopping',
  'size',
  'sportclub',
  'star-empty',
  'star-full',
  'star-half',
  'stop',
  'subscribe',
  'tag',
  'target',
  'tiktok',
  'trashcan',
  'twitter-outline',
  'twitter',
  'update',
  'user',
  'users',
  'url',
  'view-grid',
  'view-list',
  'vimeo',
  'virus',
  'whatsapp',
  'wheelchair',
  'wheelchair-no',
  'work',
  'youtube'
];

// Sort icons alphabetically.
icons.sort();

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
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>.icon-${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  default: icons[0],
  variants: getIconVariants()
};
