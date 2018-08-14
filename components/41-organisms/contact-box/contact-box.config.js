'use strict';

module.exports = {
  title: 'Contact box',
  status: 'alpha',
  context: {
    contacts: [
      {
        link: '#',
        link_text: 'Thomas Vandersteen',
        address: 'Kasteelwegel 23<br />9000 Gent',
        email: 'thomas.vandersteen@stad.gent',
        opening_hours: 'From 10:00 till 18:00'
      },
      {
        link: '#',
        link_text: 'Tester De Test',
        address: 'Kouter 23<br />9000 Gent',
        email: 'tester.de.test@stad.gent'
      }
    ],
    other_contacts: [
      {
        link: '#',
        link_text: 'Thomas Vandersteen'
      },
      {
        link: '#',
        link_text: 'Tester De Test'
      }
    ],
    authorized_persons: [
      {
        link: '#',
        link_text: 'Thomas Vandersteen'
      },
      {
        link: '#',
        link_text: 'Tester De Test'
      }
    ]
  }
};
