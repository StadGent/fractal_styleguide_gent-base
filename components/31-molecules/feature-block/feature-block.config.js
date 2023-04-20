'use strict';

module.exports = {
  hidden: true,
  default: 'primary color',
  context: {
    modifier: 'primary dark-background',
    title: 'This is the title',
    content: 'Any variety of content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  variants: [
    {
      name: 'secondary color',
      context: {
        modifier: 'secondary'
      }
    }
  ]
};
