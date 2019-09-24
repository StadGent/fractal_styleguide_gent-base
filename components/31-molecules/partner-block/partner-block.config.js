'use strict';

module.exports = {
  status: 'alpha',
  context: {
    title: 'Partners',
    description: 'Hier komt een begeleidende tekst bij het logo.'
  },
  variants: [
    {
      name: 'single-partner',
      context: {
        title: '',
        single_partner: true,
        description: 'Hier komt een begeleidende tekst bij het logo die kort meer uitleg geeft.'
      }
    }
  ]
};
