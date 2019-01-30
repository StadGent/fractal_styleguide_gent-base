'use strict';

module.exports = {
  title: 'Status message',
  status: 'ready',
  handle: 'status-message',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  default: 'status',
  context: {
    text: 'Aliquam ullamcorper vehicula leo. Mauris mattis egestas hendrerit. Sed vitae aliquet mauris. Morbi at erat sed mi mollis maximus at sit amet enim. Sed quis libero eu mauris eleifend accumsan vitae semper turpis. Vestibulum nisl ipsum, ullamcorper euismod ultrices nec, tempor sit amet urna. Pellentesque bibendum a mi commodo consectetur. Aliquam nec est tellus.',
    modifier: 'messages--status'
  },
  variants: [
    {
      name: 'status',
      preview: '@preview',
      context: {
        icon: 'icon-checkmark',
        modifier: 'messages--status'
      }
    },
    {
      name: 'error',
      preview: '@preview',
      context: {
        icon: 'icon-cross',
        modifier: 'messages--error'
      }
    },
    {
      name: 'warning',
      preview: '@preview',
      context: {
        icon: 'icon-exclamation',
        modifier: 'messages--warning'
      }
    }
  ]
};
