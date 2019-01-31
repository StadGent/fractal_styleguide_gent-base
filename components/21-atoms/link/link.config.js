'use strict';

module.exports = {
  status: 'ready',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    link: '#',
    text: 'Link text',
    aria_label: null
  },
  variants: [
    {
      name: 'external-link',
      context: {
        link: 'https://stad.gent'
      }
    },
    {
      name: 'download-link',
      context: {
        link: '#',
        download: true
      }
    },
    {
      name: 'mailto-link',
      context: {
        link: 'mailto:info@stad.gent'
      }
    },
    {
      name: 'standalone',
      context: {
        link: '#',
        modifier: 'standalone-link'
      }
    },
    {
      name: 'standalone-external',
      context: {
        link: 'https://stad.gent',
        modifier: 'standalone-link'
      }
    },
    {
      name: 'standalone-mailto',
      context: {
        link: 'mailto:info@stad.gent',
        modifier: 'standalone-link'
      }
    },
    {
      name: 'standalone-download',
      context: {
        link: '#',
        modifier: 'standalone-link',
        download: true
      }
    },
    {
      name: 'standalone-back',
      context: {
        link: '#',
        text: 'back',
        modifier: 'standalone-link back'
      }
    },
    {
      name: 'button',
      context: {
        link: '#',
        modifier: 'button button-primary'
      }
    },
    {
      name: 'button mailto',
      context: {
        link: 'mailto:info@stad.gent',
        modifier: 'button button-primary'
      }
    },
    {
      name: 'button download',
      context: {
        link: '#',
        modifier: 'button button-primary',
        download: true
      }
    },
    {
      name: 'button external',
      context: {
        link: 'https://stad.gent',
        modifier: 'button button-primary'
      }
    },
    {
      name: 'button block',
      context: {
        link: '#',
        modifier: 'button button-primary button-block'
      }
    },
    {
      name: 'button block mailto',
      context: {
        link: 'mailto:info@stad.gent',
        modifier: 'button button-primary button-block'
      }
    },
    {
      name: 'button block download',
      context: {
        link: '#',
        modifier: 'button button-primary button-block',
        download: true
      }
    },
    {
      name: 'button block custom icon',
      context: {
        link: '#',
        modifier: 'button button-primary button-block icon-favicon'
      }
    }
  ]
};
