'use strict';

module.exports = {
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
      '<a href=\'#\'>Home</a>',
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
    site_name: 'Stad Gent',
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
        mijn_gent_block_auth: true,
        mijn_gent_block_image: true,
        header_search_id: 'header-search-authenticated',
        breadcrumbs_id: 'system-breadcrumb-authenticated',
        hero_image_src: null
      }
    },
    {
      name: 'logged-in-no-image',
      context: {
        mijn_gent_block_auth: true,
        mijn_gent_block_image: false,
        header_search_id: 'header-search-authenticated-no-image',
        breadcrumbs_id: 'system-breadcrumb-authenticated-no-image',
        hero_image_src: null
      }
    },
    {
      name: 'subsite',
      context: {
        header_search_id: 'header-search-subsite',
        breadcrumbs_id: 'system-breadcrumb-subsite',
        site_name: 'ICT Supplier Digipolis Gent',
        subsite: true,
        hero_image_src: null
      }
    },
    {
      name: 'subsite-hero',
      context: {
        header_search_id: 'header-search-subsite',
        breadcrumbs_id: 'system-breadcrumb-subsite',
        site_name: 'ICT Supplier Digipolis Gent',
        subsite: true
      }
    }
  ]
};
