'use strict';

module.exports = {
  preview: '@preview-description-list-without-padding',
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.label || item.name}</dt><dd style="max-width: 100%; padding: 0;">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    search: true,
    translate: false,
    header_search_id: 'header-search',
    header_search_label: 'Search',
    header_search_placeholder: 'Search',
    header_search_text: 'Search',
    breadcrumbs_id: 'system-breadcrumb',
    breadcrumbs_items: [
      '<a href=\'#\'>Home</a>',
      '<a href=\'#\'>Society, Welfare & health</a>',
      '<a href=\'#\'>News & Events</a>',
      '<span>Page title</span>'
    ],
    figure_logo_src_dark: '/styleguide/img/stock/district09-dark.svg',
    figure_logo_src_light: '/styleguide/img/stock/district09-light.svg',
    site_name: 'Stad Gent',
    menu_items: []
  },
  variants: [
    {
      name: 'default',
      label: 'Default - without header image',
      context: {
        hero_image_src: null
      }
    },
    {
      name: 'seperate_translation_unauth',
      label: 'Seperate multilingual site with synchronous translations',
      context: {
        subsite: true,
        translate: true,
        site_name: 'ICT Supplier District09',
        search: false
      }
    },
    {
      name: 'seperate_hmenu_translation_auth_search',
      label: 'Seperate multilingual site with menu + synchronous translations + search',
      context: {
        subsite: true,
        translate: true,
        menu: true,
        site_name: 'ICT Supplier District09',
        menu_items: [
          '<a href=\'#\' class=\'active\'>Home</a>',
          '<a href=\'#\'>News & events</a>',
          '<a href=\'#\'>Subpage</a>',
          '<a href=\'#\'>Another page</a>'
        ]
      }
    }
  ]
};
