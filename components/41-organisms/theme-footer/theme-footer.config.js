'use strict';

module.exports = {
  status: 'beta',
  preview: '@preview-description-list-without-padding',
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="padding: 0;">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  default: 'contact-newsletter-social',
  variants: [
    {
      name: 'contact-newsletter-social',
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
        newsletter: {
          uid: 'theme-footer-1'
        },
        social: {}
      }
    },
    {
      name: 'contact',
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
      context: {
        theme: 'Ghent mobility',
        newsletter: {
          uid: 'theme-footer-2'
        }
      }
    },
    {
      name: 'social',
      context: {
        theme: 'Ghent mobility',
        social: {}
      }
    },
    {
      name: 'contact-newsletter',
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
        newsletter: {
          uid: 'theme-footer-3'
        }
      }
    },
    {
      name: 'contact-social',
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
      context: {
        theme: 'Ghent mobility',
        newsletter: {
          uid: 'theme-footer-4'
        },
        social: {}
      }
    }
  ]
};
