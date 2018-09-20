'use strict';

module.exports = {
  name: 'Theme footer',
  handle: 'theme-footer',
  status: 'beta',
  preview: '@preview-description-list-without-padding',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: 100%; padding: 0;">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  default: 'contact-newsletter-social',
  variants: [
    {
      name: 'contact-newsletter-social',
      preview: '@preview',
      context: {
        theme: 'Ghent mobility',
        contact: {
          address: {
            name: 'City hall',
            address: 'Botermarkt 1, 9000 Gent'
          },
          phone: {
            machine: '+3292101060',
            human: '09 210 10 60'
          },
          email: 'noreply@stad.gent',
          form: {
            machine: '#',
            human: 'Contactform Ghent mobility'
          }
        },
        newsletter: {},
        social: {}
      }
    },
    {
      name: 'contact',
      preview: '@preview',
      context: {
        theme: 'Ghent mobility',
        contact: {
          address: {
            name: 'City hall',
            address: 'Botermarkt 1, 9000 Gent'
          },
          phone: {
            machine: '+3292101060',
            human: '09 210 10 60'
          },
          email: 'noreply@stad.gent',
          form: {
            machine: '#',
            human: 'Contactform Ghent mobility'
          }
        }
      }
    },
    {
      name: 'newsletter',
      preview: '@preview',
      context: {
        theme: 'Ghent mobility',
        newsletter: {}
      }
    },
    {
      name: 'social',
      preview: '@preview',
      context: {
        theme: 'Ghent mobility',
        social: {}
      }
    },
    {
      name: 'contact-newsletter',
      preview: '@preview',
      context: {
        theme: 'Ghent mobility',
        contact: {
          address: {
            name: 'City hall',
            address: 'Botermarkt 1, 9000 Gent'
          },
          phone: {
            machine: '+3292101060',
            human: '09 210 10 60'
          },
          email: 'noreply@stad.gent',
          form: {
            machine: '#',
            human: 'Contactform Ghent mobility'
          }
        },
        newsletter: {}
      }
    },
    {
      name: 'contact-social',
      preview: '@preview',
      context: {
        theme: 'Ghent mobility',
        contact: {
          address: {
            name: 'City hall',
            address: 'Botermarkt 1, 9000 Gent'
          },
          phone: {
            machine: '+3292101060',
            human: '09 210 10 60'
          },
          email: 'noreply@stad.gent',
          form: {
            machine: '#',
            human: 'Contactform Ghent mobility'
          }
        },
        social: {}
      }
    },
    {
      name: 'newsletter-social',
      preview: '@preview',
      context: {
        theme: 'Ghent mobility',
        newsletter: {},
        social: {}
      }
    }
  ]
};
