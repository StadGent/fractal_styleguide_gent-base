'use strict';

const data = {
  unique_id: '1',
  map: true,
  contact_categories: [
    {
      link: '#',
      name: 'Contact category name'
    }
  ],
  contacts: [
    {
      link: '#',
      link_text: 'Thomas Vandersteen',
      address: 'Kasteelwegel 23, 9000 Gent',
      phone: '09 123 45 67',
      email: 'thomas.vandersteen@stad.gent',
      opening_hours: 'From 10:00 till 18:00'
    },
    {
      link: '#',
      link_text: 'Thomas Vandersteen',
      address: 'Kasteelwegel 23, 9000 Gent',
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
};

module.exports = {
  title: 'Contact box',
  status: 'alpha',
  context: data,

  variants: [
    {
      name: 'default'
    },

    {
      name: 'no-map',
      context: Object.assign({}, data, {
        map: false
      })
    },

    {
      name: 'contacts-only',
      context: Object.assign({}, data, {
        authorized_persons: [],
        map: false
      })
    },

    {
      name: 'compact',
      context: (function () {
        let dataCopy = Object.assign({}, data);

        // Duplicate contacts so we have twice as much contacts
        dataCopy.contacts = dataCopy.contacts
          .reduce((res, current) => {
            return res.concat(Array(2).fill(current));
          }, []);

        dataCopy.authorized_persons = [];
        dataCopy.map = false;

        return dataCopy;
      })()
    }
  ]
};
