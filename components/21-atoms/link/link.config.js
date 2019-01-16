'use strict';

module.exports = {
  title: 'Link',
  name: 'Link',
  handle: 'link',
  status: 'ready',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  order: 12,
  context: {
    link: '#',
    text: 'Link text',
    aria_label: null
  },
  variants: [
    {
      name: 'default',
      preview: '@preview',
      handle: 'link'
    },
    {
      name: 'external-link',
      preview: '@preview',
      context: {
        link: 'https://stad.gent'
      }
    },
    {
      name: 'download-link',
      preview: '@preview',
      context: {
        link: '#',
        download: true
      }
    },
    {
      name: 'mailto-link',
      preview: '@preview',
      context: {
        link: 'mailto:info@stad.gent'
      }
    },
    {
      name: 'standalone',
      preview: '@preview',
      handle: 'link',
      context: {
        link: '#',
        modifier: 'standalone-link'
      }
    },
    {
      name: 'standalone-external',
      preview: '@preview',
      handle: 'link',
      context: {
        link: 'https://stad.gent',
        modifier: 'standalone-link'
      }
    },
    {
      name: 'standalone-mailto',
      preview: '@preview',
      handle: 'link',
      context: {
        link: 'mailto:info@stad.gent',
        modifier: 'standalone-link'
      }
    },
    {
      name: 'standalone-download',
      preview: '@preview',
      handle: 'link',
      context: {
        link: '#',
        modifier: 'standalone-link',
        download: true
      }
    },
    {
      name: 'standalone-back',
      preview: '@preview',
      handle: 'link',
      context: {
        link: '#',
        text: 'back',
        modifier: 'standalone-link back'
      }
    },
    {
      name: 'button',
      preview: '@preview',
      context: {
        link: '#',
        modifier: 'button button-primary'
      }
    },
    {
      name: 'button mailto',
      preview: '@preview',
      context: {
        link: 'mailto:info@stad.gent',
        modifier: 'button button-primary'
      }
    },
    {
      name: 'button download',
      preview: '@preview',
      context: {
        link: '#',
        modifier: 'button button-primary',
        download: true
      }
    },
    {
      name: 'button external',
      preview: '@preview',
      context: {
        link: 'https://stad.gent',
        modifier: 'button button-primary'
      }
    },
    {
      name: 'button block',
      preview: '@preview',
      context: {
        link: '#',
        modifier: 'button button-primary button-block'
      }
    },
    {
      name: 'button block mailto',
      preview: '@preview',
      context: {
        link: 'mailto:info@stad.gent',
        modifier: 'button button-primary button-block'
      }
    },
    {
      name: 'button block download',
      preview: '@preview',
      context: {
        link: '#',
        modifier: 'button button-primary button-block',
        download: true
      }
    },
    {
      name: 'button block custom icon',
      preview: '@preview',
      context: {
        link: '#',
        modifier: 'button button-primary button-block icon-favicon'
      }
    }
  ]
};
