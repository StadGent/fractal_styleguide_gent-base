'use strict';

module.exports = {
  status: 'alpha',
  context: {
    title: 'Partners',
    description: 'Here comes information about the partners. The logos in this block are not predefined and can be changed per project.',
    items: [
      {
        link: '/styleguide/img/stock/partner1.svg',
        alt_text: 'University of Ghent'
      },
      {
        link: '/styleguide/img/stock/partner2.svg',
        alt_text: 'HoGent'
      },
      {
        link: '/styleguide/img/stock/partner3.svg',
        alt_text: 'Artevelde Hogeschool'
      },
      {
        link: '/styleguide/img/stock/partner4.svg',
        alt_text: 'Odisee'
      },
      {
        link: '/styleguide/img/stock/partner5.svg',
        alt_text: 'KU Leuven'
      },
      {
        link: '/styleguide/img/stock/partner6.svg',
        alt_text: 'Luca'
      },
      {
        link: '/styleguide/img/stock/partner7.svg',
        alt_text: 'Student in Ghent'
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
