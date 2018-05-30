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
    aria_label: null,
    aria_labelledby: null
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
      name: 'button',
      preview: '@preview',
      context: {
        icon: 'icon-arrow-right',
        modifier: 'button button-primary'
      }
    }
  ]
};
