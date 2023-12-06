'use strict';

module.exports = {
  preview: '@preview-accordion',
  variants: [
    {
      name: 'default',
      context: {
        buttonText: 'single accordion',
        content: '<p>Single item accordions are indicated by a chevron.</p>' +
        '<p>Below is some nonsens text.</p>' +
        '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>' +
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Animi culpa dolorum enim molestiae molestias nemo nulla quas sed, ' +
        'temporibus voluptatem!</p>'
      }
    },
    {
      name: 'multiple',
      context: {
        items: [
          {
            buttonText: 'First item',
            content: '<p>Multiple item accordions are contained in a list element.</p>' +
            '<p>They are indicated with a \'plus\' or \'minus\' icon</p>' +
            '<p>Below is some nonsens text.</p>' +
            '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>' +
            '<ol><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Animi culpa dolorum enim molestiae molestias nemo nulla quas sed, ' +
            'temporibus voluptatem!</p>'
          },
          {
            buttonText: 'Second item',
            content: '<p>Single item accordions are indicated by a chevron.</p>' +
            '<p>Below is some nonsens text.</p>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Animi culpa dolorum enim molestiae molestias nemo nulla quas sed, ' +
            'temporibus voluptatem!</p>'
          },
          {
            buttonText: 'Third item',
            content: '<p>Single item accordions are indicated by a chevron.</p>' +
            '<p>Below is some nonsens text.</p>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Animi culpa dolorum enim molestiae molestias nemo nulla quas sed, ' +
            'temporibus voluptatem!</p>'
          },
          {
            buttonText: 'Fourth item',
            content: '<p>Single item accordions are indicated by a chevron.</p>' +
            '<p>Below is some nonsens text.</p>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Animi culpa dolorum enim molestiae molestias nemo nulla quas sed, ' +
            'temporibus voluptatem!</p>'
          }
        ]
      }
    }
  ]
};
