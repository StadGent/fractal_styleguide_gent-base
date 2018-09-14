'use strict';

module.exports = {
  title: 'Contact block',
  default: 'contact-block-with-phone',
  status: 'alpha',
  handle: 'contact-block',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    title: 'Contact us',
    description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis, ut consequat urna dapibus. Vivamus at lobortis odio. Sed felis mauris, mattis eget purus at, pharetra ullamcorper risus.',
    tel: '09 123 45 67',
    email: null,
    link: '#'
  },
  variants: [
    {
      name: 'contact-block-with-phone'
    },
    {
      name: 'contact-block-with-email',
      context: {
        title: 'Contact us',
        description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis, ut consequat urna dapibus. Vivamus at lobortis odio. Sed felis mauris, mattis eget purus at, pharetra ullamcorper risus.',
        tel: null,
        email: 'info@stad.gent',
        link: '#'
      }
    }
  ]
};
