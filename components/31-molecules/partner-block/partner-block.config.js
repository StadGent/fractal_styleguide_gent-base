'use strict';

module.exports = {
  context: {
    title: 'Partners',
    description: 'Here comes information about the partners. The logos in this block are not predefined and can be changed per project.',
    items: [
      {
        link: '/styleguide/img/stock/partner1.svg',
        alt_text: 'University of Ghent',
        link_title: 'Link to the University of Ghent website'
      },
      {
        link: '/styleguide/img/stock/partner2.svg',
        alt_text: 'HoGent',
        link_title: 'Link to the HoGent website'
      },
      {
        link: '/styleguide/img/stock/partner3.svg',
        alt_text: 'Artevelde Hogeschool',
        link_text: 'Link to the Artevelde Hogeschool website'
      },
      {
        link: '/styleguide/img/stock/partner4.svg',
        alt_text: 'Odisee',
        link_text: 'Link to the Odisee website'
      },
      {
        link: '/styleguide/img/stock/partner5.svg',
        alt_text: 'KU Leuven',
        link_text: 'Link to the KU Leuven website'
      },
      {
        link: '/styleguide/img/stock/partner6.svg',
        alt_text: 'Luca',
        link_text: 'Link to the Luca website'
      },
      {
        link: '/styleguide/img/stock/partner7.svg',
        alt_text: 'Student in Ghent',
        link_text: 'Link to the Student in Ghent website'
      }
    ]
  },
  variants: [
    {
      name: 'single-partner',
      context: {
        title: '',
        single_partner: true,
        description: 'Here comes information about the partners. The logos in this block are not predefined and can be changed per project.'
      }
    }
  ]
};
