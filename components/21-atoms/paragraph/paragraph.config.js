'use strict';

module.exports = {
  title: 'Paragraph',
  status: 'beta',
  handle: 'paragraph',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin mauris vel nisi condimentum accumsan. Phasellus eget est condimentum erat fringilla congue. <a href="https://stad.gent">Duis malesuada justo</a> ut tincidunt tincidunt. Vestibulum in felis quam. In <strong>varius</strong> ligula vel ultricies consequat. Cras fringilla blandit purus nec <a href=\'javascript:(void);\'>fermentum</a>. Vivamus tristique ac mi a <i>pulvinar</i>. Quisque non ipsum tortor. Nunc nec odio non tellus malesuada molestie id sed ipsum. Curabitur risus ex, <a href="/some/file" download="download">aliquet</a> sed orci a, sagittis finibus sem. Ut bibendum purus id sodales scelerisque.'
  },
  variants: [
    {
      name: 'default',
      preview: '@preview',
      handle: 'paragraph'
    }
  ]
};
