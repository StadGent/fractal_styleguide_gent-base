'use strict';

const imageList = [];
for (let i = 6; i--;) {
  imageList.push({
    src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
    alt: 'placeholder image alternative text',
    caption: 'image caption'
  });
}

module.exports = {
  context: imageList[0],
  variants: [
    {
      name: 'single',
      hidden: true
    },
    {
      name: 'multiple',
      hidden: true
    },
    {
      name: 'double',
      context: {
        items: imageList.slice(-2)
      }
    },
    {
      name: 'triple',
      context: {
        items: imageList.slice(-3)
      }
    },
    {
      name: 'quadruple',
      context: {
        items: imageList.slice(-4)
      }
    },
    {
      name: 'quintuple',
      context: {
        items: imageList.slice(-5)
      }
    },
    {
      name: 'quintuple et plus',
      context: {
        items: imageList
      }
    },
    {
      name: 'default-alternative',
      label: 'Single (alternative)',
      context: {
        src: imageList[0].src,
        caption: imageList[0].caption,
        alt: imageList[0].alt,
        type: 'secondary'
      }
    },
    {
      name: 'double-alternative',
      label: 'Double (alternative)',
      context: {
        items: imageList.slice(-2),
        type: 'secondary'
      }
    },
    {
      name: 'triple-alternative',
      label: 'Triple (alternative)',
      context: {
        items: imageList.slice(-3),
        type: 'secondary'
      }
    },
    {
      name: 'quadruple-alternative',
      label: 'Quadruple (alternative)',
      context: {
        items: imageList.slice(-4),
        type: 'secondary'
      }
    }
  ]
};
