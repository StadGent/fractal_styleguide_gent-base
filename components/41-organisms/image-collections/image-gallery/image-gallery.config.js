'use strict';

module.exports = {
  title: 'Image gallery',
  status: 'ready',
  name: 'Image gallery',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.label || item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      name: 'multiple',
      hidden: true
    },
    {
      name: 'default',
      label: 'Single',
      preview: '@preview',
      context: {
        src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        alt: 'placeholder image alternative text',
        caption: 'image caption'
      }
    },
    {
      name: 'double',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: [
          {
            src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
            alt: 'placeholder image alternative text',
            caption: 'image caption'
          },
          {
            src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
            alt: 'placeholder image alternative text'
          }
        ]
      }
    },
    {
      name: 'triple',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: [
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
            alt: 'placeholder image alternative text'
          }
        ]
      }
    },
    {
      name: 'quadruple',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: [
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
          },
          {
            src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
            alt: 'placeholder image alternative text'
          }
        ]
      }
    },
    {
      name: 'quintuple',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: [
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
          },
          {
            src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
            alt: 'placeholder image alternative text',
            caption: 'image caption'
          },
          {
            src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
            alt: 'placeholder image alternative text'
          }
        ]
      }
    },
    {
      name: 'quintuple et plus',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: [
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
          },
          {
            src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
            alt: 'placeholder image alternative text',
            caption: 'image caption'
          },
          {
            src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
            alt: 'placeholder image alternative text'
          }
        ]
      }
    }
  ]
};
