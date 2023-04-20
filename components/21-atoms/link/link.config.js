'use strict';

module.exports = {
  status: 'ready',
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
      name: 'external-link-background-dark',
      context: {
        link: 'https://stad.gent',
        background: 'dark-background',
        add_dark_background: true
      }
    },
    {
      name: 'download-link-background-dark',
      context: {
        link: '#',
        download: true,
        background: 'dark-background',
        add_dark_background: true
      }
    },
    {
      name: 'mailto-link-background-dark',
      context: {
        link: 'mailto:info@stad.gent',
        background: 'dark-background',
        add_dark_background: true
      }
    },
    {
      name: 'standalone-background-dark',
      context: {
        link: '#',
        modifier: 'standalone-link',
        background: 'dark-background',
        add_dark_background: true
      }
    },
    {
      name: 'standalone-external-background-dark',
      context: {
        link: 'https://stad.gent',
        modifier: 'standalone-link',
        background: 'dark-background',
        add_dark_background: true
      }
    },
    {
      name: 'standalone-mailto-background-dark',
      context: {
        link: 'mailto:info@stad.gent',
        modifier: 'standalone-link',
        background: 'dark-background',
        add_dark_background: true
      }
    },
    {
      name: 'standalone-download-background-dark',
      context: {
        link: '#',
        modifier: 'standalone-link',
        download: true,
        background: 'dark-background',
        add_dark_background: true
      }
    },
    {
      name: 'standalone-back-background-dark',
      context: {
        link: '#',
        text: 'back',
        modifier: 'standalone-link back',
        background: 'dark-background',
        add_dark_background: true
      }
    },
    {
      name: 'link styled as button',
      context: {
        link: '#',
        modifier: 'button button-primary'
      }
    },
    {
      name: 'link styled as button mailto',
      context: {
        link: 'mailto:info@stad.gent',
        modifier: 'button button-primary'
      }
    },
    {
      name: 'link styled as button download',
      context: {
        link: '#',
        modifier: 'button button-primary',
        download: true
      }
    },
    {
      name: 'link styled as button external',
      context: {
        link: 'https://stad.gent',
        modifier: 'button button-primary'
      }
    },
    {
      name: 'link styled as button block',
      context: {
        link: '#',
        modifier: 'button button-primary button-block'
      }
    },
    {
      name: 'link styled as button block mailto',
      context: {
        link: 'mailto:info@stad.gent',
        modifier: 'button button-primary button-block'
      }
    },
    {
      name: 'link styled as button block download',
      context: {
        link: '#',
        modifier: 'button button-primary button-block',
        download: true
      }
    },
    {
      name: 'link styled as button block custom icon',
      context: {
        link: '#',
        modifier: 'button button-primary button-block icon-favicon'
      }
    }
  ]
};
