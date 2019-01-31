'use strict';

module.exports = {
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt><h2>${item.name}</h2></dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    mijn_gent_block_items: [
      '<a href=\'javascript:(void);\'>Mijn profiel</a>',
      '<a href=\'javascript:(void);\'>Nieuwsbrieven</a>',
      '<a href=\'javascript:(void);\'>Historiek</a>'
    ],
    mijn_gent_block_auth: 'false',
    header_search_id: 'header-search',
    header_search_label: 'Search',
    header_search_placeholder: 'Search',
    header_search_text: 'Search',
    breadcrumbs_id: 'system-breadcrumb',
    breadcrumbs_items: [
      '<a href=\'https://stad.gent\'>Stad.gent</a>',
      '<a href=\'#\'>Overview</a>',
      '<a href=\'#\'>Theme</a>',
      '<a href=\'#\'>Subpage</a>',
      '<span>Page title</span>'
    ],
    hero_image_src: 'https://via.placeholder.com/1600x400&text=4:1+(1600x400)',
    hero_image_description: 'Caption text comes here.',
    hero_title: 'ICT Supplier <span>Digipolis Gent</span>',
    figure_logo_src_dark: '/styleguide/img/stock/digipolis-dark.svg',
    figure_logo_src_light: '/styleguide/img/stock/digipolis-light.svg',
    subsite: 'ICT Supplier Digipolis Gent',
    menu_items: [
      '<a href=\'#\' class=\'active\'>Home</a>',
      '<a href=\'#\'>News & events</a>',
      '<a href=\'#\'>Subpage</a>',
      '<a href=\'#\'>Another page</a>'
    ]
  },
  variants: [
    {
      name: 'logged-in',
      context: {
        mijn_gent_block_auth: 'true',
        header_search_id: 'header-search-authenticated',
        breadcrumbs_id: 'system-breadcrumb-authenticated'
      }
    },
    {
      name: 'subsite-hero',
      context: {
        header_search_id: 'header-search-subsite',
        breadcrumbs_id: 'system-breadcrumb-subsite'
      }
    },
    {
      name: 'hero',
      context: {
        header_search_id: 'header-search-hero',
        breadcrumbs_id: 'system-breadcrumb-hero'
      }
    },
    {
      name: 'menu',
      context: {
        header_search_id: 'header-search-menu',
        breadcrumbs_id: 'system-breadcrumb-menu'
      }
    }
  ]
};
