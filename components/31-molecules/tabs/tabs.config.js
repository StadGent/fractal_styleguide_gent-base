'use strict';

module.exports = {
  status: 'alpha',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    modifier: 'dark',
    tabs: [
      {
        label: 'tab 1',
        target: 'tab1',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio dolore in, odio odit sapiente. Accusamus hic illum quaerat repellendus!</p>'
      },
      {
        label: 'tab 2',
        target: 'tab2',
        content: '<ul>\n' +
        '<li>Lorem ipsum dolor sit amet.</li>\n' +
        '<li>Expedita illo mollitia tempore temporibus.</li>\n' +
        '<li>Explicabo harum nam nobis sequi.</li>\n' +
        '<li>Ab ea earum impedit optio.</li>\n' +
        '<li>Dolorem ipsa libero nobis repellendus.</li>\n' +
        '</ul>'
      },
      {
        label: 'tab 3',
        target: 'tab3',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio dolore in, odio odit sapiente. Accusamus hic illum quaerat repellendus!</p>' +
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio dolore in, odio odit sapiente. Accusamus hic illum quaerat repellendus!</p>' +
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio dolore in, odio odit sapiente. Accusamus hic illum quaerat repellendus!</p>'
      }
    ]
  },
  variants: [
    {
      name: 'default',
      label: 'Dark'
    },
    {
      name: 'Light',
      context: {
        modifier: 'light'
      }
    }
  ]
};
