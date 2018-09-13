'use strict';

module.exports = {
  title: 'Contact box',
  status: 'alpha',
  context: {
    unique_id: '1',
    contact_categories: [
      {
        link: '#',
        name: 'Contact category name',
        description: 'eros mauris. Vestibulum gravida efficitur ligula, quis hendrerit est euismod ac'
      }
    ],
    contacts: [
      {
        link: '#',
        link_text: 'Thomas Vandersteen',
        address: 'Kasteelwegel 23<br />9000 Gent',
        phone: '09 123 45 67',
        email: 'thomas.vandersteen@stad.gent',
        opening_hours: 'From 10:00 till 18:00'
      },
      {
        link: '#',
        link_text: 'Thomas Vandersteen',
        address: 'Kasteelwegel 23<br />9000 Gent',
        phone: '09 123 45 67',
        email: 'thomas.vandersteen@stad.gent',
        opening_hours: 'From 10:00 till 18:00'
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
