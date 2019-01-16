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
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt><h2>${item.name}</h2></dt><dd style="max-width: 100%">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      preview: '@preview',
      name: 'default'
    },

    {
      preview: '@preview',
      name: 'no-map',
      context: Object.assign({}, data, {
        map: false
      })
    },

    {
      preview: '@preview',
      name: 'contacts-only',
      context: Object.assign({}, data, {
        authorized_persons: [],
        map: false
      })
    },

    {
      preview: '@preview',
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
