'use strict';

module.exports = {
  status: 'beta',
  context: {
    multiple: false,
    images: [
      {
        src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        alt: 'placeholder image alternative text',
        caption: 'image caption'
      }
    ]
  },
  variants: [
    {
      name: 'Multiple images',
      context: {
        multiple: true,
        images: [
          {
            src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
            alt: 'placeholder image alternative text',
            caption: 'image caption'
          },
          {
            src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
            alt: 'placeholder image alternative text',
            caption: 'image caption'
          },
          {
            src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
            alt: 'placeholder image alternative text',
            caption: 'image caption'
          }
        ]
      }
    }
  ]
};
