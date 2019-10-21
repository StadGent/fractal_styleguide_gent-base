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
      '<a href=\'#\'>Society, Welfare & health</a>',
      '<a href=\'#\'>News & Events</a>',
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
      name: 'default',
      label: 'Default - without header image - not signed in',
      context: {
        hero_image_src: null
      }
    },
    {
      name: 'no-hero_auth',
      label: 'Default - without header image - signed in',
      context: {
        hero_image_src: null,
        mijn_gent_block_auth: true,
        mijn_gent_block_image: true
      }
    },
    {
      name: 'hero_auth',
      label: 'Default - with header image',
      context: {
        mijn_gent_block_auth: true,
        mijn_gent_block_image: false
      }
    },
    {
      name: 'theme_no-hero_auth',
      label: 'Theme page - without header image',
      context: {
        mijn_gent_block_auth: true,
        mijn_gent_block_image: false,
        hero_image_src: null,
        theme: true
      }
    },
    {
      name: 'theme_hero_auth',
      label: 'Theme page - with header image',
      context: {
        mijn_gent_block_auth: true,
        mijn_gent_block_image: false,
        theme: true
      }
    },
    {
      name: 'seperate_translation_unauth_search',
      label: 'Seperate multilingual site with synchronous translations + not authenticated + search',
      context: {
        subsite: true,
        translate: true,
        site_name: 'ICT Supplier Digipolis Gent',
        hero_image_src: null
      }
    },
    {
      name: 'seperate_translation_auth_search',
      label: 'Seperate multilingual site with synchronous translations + authenticated + search',
      context: {
        mijn_gent_block_auth: true,
        mijn_gent_block_image: false,
        subsite: true,
        translate: true,
        site_name: 'ICT Supplier Digipolis Gent',
        hero_image_src: null
      }
    },
    {
      name: 'seperate_hmenu_translation_auth_search',
      label: 'Seperate multilingual site with menu + synchronous translations + authenticated + search',
      context: {
        mijn_gent_block_auth: true,
        mijn_gent_block_image: false,
        subsite: true,
        translate: true,
        menu: true,
        site_name: 'ICT Supplier Digipolis Gent',
        hero_image_src: null
      }
    },
    {
      name: 'seperate_hero_menu_translation_auth_search',
      label: 'Seperate multilingual site with hero + menu + synchronous translations + authenticated + search',
      context: {
        mijn_gent_block_auth: true,
        mijn_gent_block_image: false,
        subsite: true,
        translate: true,
        menu: true,
        site_name: 'ICT Supplier Digipolis Gent'
      }
    }
  ]
};
