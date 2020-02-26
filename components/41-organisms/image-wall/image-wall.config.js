'use strict';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createItems = (amount) => {
  let array = [];

  for (let i = amount; i--;) {
    array.push({
      src: 'https://via.placeholder.com/' + getRandomInt(600, 800) + 'x' + getRandomInt(600, 800),
      alt: 'placeholder image alternative text',
      caption: 'image caption'
    });
  }

  return array;
};

module.exports = {
  context: {
    items: createItems(100)
  }
};
