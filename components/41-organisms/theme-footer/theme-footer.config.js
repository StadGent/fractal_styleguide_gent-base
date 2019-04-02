'use strict';

const contact = {
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
};

module.exports = {
  status: 'beta',
  preview: '@preview-description-list-without-padding',
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: 100%; padding: 0;">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  default: 'contact-newsletter-social-logo',
  context: {
    theme: 'Ghent mobility'
  },
  variants: [
    {
      name: 'contact-newsletter-social-logo',
      context: {
        contact: contact,
        newsletter: {
          uid: 'theme-footer-1'
        },
        social: true,
        logo: true
      }
    },
    {
      name: 'contact',
      context: {
        contact: contact
      }
    },
    {
      name: 'contact-logo',
      context: {
        contact: contact,
        logo: true
      }
    },
    {
      name: 'newsletter',
      context: {
        newsletter: {
          uid: 'theme-footer-2'
        }
      }
    },
    {
      name: 'newsletter-logo',
      context: {
        logo: true,
        newsletter: {
          uid: 'theme-footer-3'
        }
      }
    },
    {
      name: 'social',
      context: {
        social: true
      }
    },
    {
      name: 'social-logo',
      context: {
        social: true,
        logo: true
      }
    },
    {
      name: 'contact-newsletter',
      context: {
        contact: contact,
        newsletter: {
          uid: 'theme-footer-4'
        }
      }
    },
    {
      name: 'contact-newsletter-logo',
      context: {
        contact: contact,
        logo: true,
        newsletter: {
          uid: 'theme-footer-5'
        }
      }
    },
    {
      name: 'contact-social',
      context: {
        contact: contact,
        social: true
      }
    },
    {
      name: 'contact-social-logo',
      context: {
        logo: true,
        contact: contact,
        social: true
      }
    },
    {
      name: 'newsletter-social',
      context: {
        newsletter: {
          uid: 'theme-footer-6'
        },
        social: true
      }
    },
    {
      name: 'newsletter-social-logo',
      context: {
        logo: true,
        newsletter: {
          uid: 'theme-footer-7'
        },
        social: true
      }
    },
    {
      name: 'contact-newsletter-social',
      context: {
        contact: contact,
        newsletter: {
          uid: 'theme-footer-1'
        },
        social: true
      }
    }
  ]
};
