'use strict';

module.exports = {
  name: 'Nav filter',
  handle: 'nav-filter',
  status: 'alpha',
  preview: '@preview',
  context: {
    list: [
      '<a href="/ga-voor-een-onvergetelijke-schoolstage" class="active">Alle opleidingsniveaus</a>',
      '<a href="/ga-voor-een-onvergetelijke-schoolstage?education=A">Master</a>',
      '<a href="/ga-voor-een-onvergetelijke-schoolstage?education=B">Bachelor</a>',
      '<a href="/ga-voor-een-onvergetelijke-schoolstage?education=CDE">Hoger secundair en beroepsonderwijs</a>'
    ]
  }
};
