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
    title: 'Title text',
    aria_label: null,
    aria_labelledby: null
  },
  variants: [
    {
      name: 'default',
      handle: 'link'
    },
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
      name: 'standalone',
      handle: 'link',
      context: {
        link: '#',
        modifier: 'standalone-link'
      }
    },
    {
      name: 'standalone-external',
      handle: 'link',
      context: {
        link: 'https://stad.gent',
        modifier: 'standalone-link'
      }
    },
    {
      name: 'standalone-download',
      handle: 'link',
      context: {
        link: '#',
        modifier: 'standalone-link',
        download: true
      }
    },
    {
      name: 'button',
      context: {
        icon: 'icon-arrow-right',
        modifier: 'button button-primary'
      }
    }
  ]
};
