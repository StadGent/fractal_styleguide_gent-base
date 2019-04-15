'use strict';

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
        contact: true,
        newsletter: true,
        social: true,
        logo: true
      }
    },
    {
      name: 'contact',
      context: {
        contact: true
      }
    },
    {
      name: 'contact-logo',
      context: {
        contact: true,
        logo: true
      }
    },
    {
      name: 'newsletter',
      context: {
        newsletter: true
      }
    },
    {
      name: 'newsletter-logo',
      context: {
        logo: true,
        newsletter: true
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
        contact: true,
        newsletter: true
      }
    },
    {
      name: 'contact-newsletter-logo',
      context: {
        contact: true,
        logo: true,
        newsletter: true
      }
    },
    {
      name: 'contact-social',
      context: {
        contact: true,
        social: true
      }
    },
    {
      name: 'contact-social-logo',
      context: {
        logo: true,
        contact: true,
        social: true
      }
    },
    {
      name: 'newsletter-social',
      context: {
        newsletter: true,
        social: true
      }
    },
    {
      name: 'newsletter-social-logo',
      context: {
        logo: true,
        newsletter: true,
        social: true
      }
    },
    {
      name: 'contact-newsletter-social',
      context: {
        contact: true,
        newsletter: true,
        social: true
      }
    }
  ]
};
