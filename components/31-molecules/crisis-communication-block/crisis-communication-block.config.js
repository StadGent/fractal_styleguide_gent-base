'use strict';

module.exports = {
  status: 'alpha',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: 100%; padding: 0;">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    title: 'This is a title',
    description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis, ut consequat urna dapibus. Vivamus at lobortis odio. Sed felis mauris, mattis eget purus at, pharetra ullamcorper risus.'
  },
  variants: [
    {
      name: 'default',
      context: {
        links: [
          '<a href="javascript:(void);">An external link where you can find more info</a>',
          '<a href="javascript:(void);">Another internal or external link</a>',
          '<a href="javascript:(void);">There might be a third internal or external link</a>'
        ],
        list: [
          '<i class="icon-twitter" aria-hidden="true"></i><span>Follow the news on Twitter via <a href="javascript:(void);" alt="Twitter">@StadGent</a></span>',
          '<i class="icon-phone" aria-hidden="true"></i><span>Emergency number <a href="javascript:(void);" alt="Emergency phone number">09 210 10 10</a></span>',
          '<i class="icon-external-link" aria-hidden="true"></i><span><a href="javascript:(void);" alt="Online mourning register">Sign the online mourning register</a></span>'
        ]
      }
    },
    {
      name: 'Without links'
    }
  ]
};
