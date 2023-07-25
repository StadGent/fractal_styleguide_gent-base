'use strict';

module.exports = {
  context: {
    text: 'Aliquam ullamcorper vehicula leo. Mauris mattis egestas hendrerit. Sed <a href="#">vitae aliquet mauris</a>. Morbi at erat sed mi mollis maximus at sit amet enim. Sed quis libero eu mauris eleifend accumsan vitae semper turpis. Vestibulum nisl ipsum, ullamcorper euismod ultrices nec, tempor sit amet urna. Pellentesque bibendum a mi commodo consectetur. Aliquam nec est tellus.',
    icon: 'icon-info-circle',
    modifier: 'messages--info'
  },
  variants: [
    {
      name: 'default',
      label: 'Info'
    },
    {
      name: 'warning',
      context: {
        icon: 'icon-exclamation-circle',
        modifier: 'messages--warning'
      }
    },
    {
      name: 'error',
      context: {
        icon: 'icon-cross-circle',
        modifier: 'messages--error'
      }
    },
    {
      name: 'success',
      context: {
        icon: 'icon-checkmark-circle',
        modifier: 'messages--status'
      }
    },
    {
      name: 'crisis',
      context: {
        icon: 'icon-exclamation-circle',
        modifier: 'messages--crisis'
      }
    }
  ]
};
