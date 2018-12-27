'use strict';

module.exports = {
  title: 'Contact block',
  default: 'contact-block-with-phone',
  status: 'alpha',
  handle: 'contact-block',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      name: 'contact-block-with-phone',
      preview: '@preview',
      context: {
        title: 'Contact us',
        description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis, ut consequat urna dapibus. Vivamus at lobortis odio. Sed felis mauris, mattis eget purus at, pharetra ullamcorper risus.',
        tel: '09 123 45 67',
        email: null,
        link: '#'
      }
    },
    {
      name: 'contact-block-with-email',
      preview: '@preview',
      context: {
        title: 'Contact us',
        description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis, ut consequat urna dapibus. Vivamus at lobortis odio. Sed felis mauris, mattis eget purus at, pharetra ullamcorper risus.',
        tel: null,
        email: 'info@stad.gent',
        link: '#'
      }
    },
    {
      name: 'contact-block-without-description',
      preview: '@preview',
      context: {
        title: 'Contact us',
        tel: '09 123 45 67',
        email: null,
        link: '#'
      }
    },
    {
      name: 'contact-block-without-link',
      preview: '@preview',
      context: {
        title: 'Contact us',
        description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis, ut consequat urna dapibus. Vivamus at lobortis odio. Sed felis mauris, mattis eget purus at, pharetra ullamcorper risus.',
        tel: null,
        email: 'info@stad.gent'
      }
    }
  ]
};
