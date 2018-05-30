'use strict';

module.exports = {
  title: 'Paragraph',
  status: 'beta',
  order: 1,
  handle: 'paragraph',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin mauris vel nisi condimentum accumsan. Phasellus eget est condimentum erat fringilla congue. Duis malesuada justo ut tincidunt tincidunt. Vestibulum in felis quam. In <strong>varius</strong> ligula vel ultricies consequat. Cras fringilla blandit purus nec <a href=\'javascript:(void);\'>fermentum</a>. Vivamus tristique ac mi a <i>pulvinar</i>. Quisque non ipsum tortor. Nunc nec odio non tellus malesuada molestie id sed ipsum. Curabitur risus ex, aliquet sed orci a, sagittis finibus sem. Ut bibendum purus id sodales scelerisque.'
  },
  variants: [
    {
      name: 'default',
      preview: '@preview',
      handle: 'paragraph',
    },
    {
      name: 'caption-text',
      preview: '@preview',
      context: {
        modifier: 'caption'
      }
    },
    {
      name: 'small-text',
      preview: '@preview',
      context: {
        modifier: 'small'
      }
    },
    {
      name: 'left-text',
      preview: '@preview',
      context: {
        modifier: 'text-left'
      }
    },
    {
      name: 'right-text',
      preview: '@preview',
      context: {
        modifier: 'text-right'
      }
    }
  ]
};
