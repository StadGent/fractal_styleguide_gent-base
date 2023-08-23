'use strict';

module.exports = {
  default: '3 column',
  context: {
    list: [
      '<a href="#" class="active">Anchor link 1</a>',
      '<a href="#">Anchor link 2 that is slightly longer</a>',
      '<a href="#">Anchor link 3 that is also a bit longer to see the behaviour</a>',
      '<a href="#">Anchor link 4</a>',
      '<a href="#">Anchor link 5</a>',
      '<a href="#">Anchor link 6</a>',
      '<a href="#">Anchor link 7</a>',
      '<a href="#">Anchor link 8</a>'
    ],
    type: 'three-column'
  },
  variants: [
    {
      name: '2 column',
      context: {
        type: 'two-column'
      }
    }
  ]
};
