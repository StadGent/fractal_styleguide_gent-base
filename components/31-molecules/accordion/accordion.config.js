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
    },
    {
      name: 'link',
      context: {
        buttonText: 'More info',
        faqs: [
          {
            buttonText: 'Croissant ice cream candy chocolate bar',
            content: '<p>Sweet roll jelly-o lemon drops pudding bear claw. Powder cotton candy toffee chupa chups topping. Jelly cupcake cotton candy brownie dessert. Caramels cheesecake bonbon dragée chocolate cake. Cupcake brownie halvah halvah tiramisu tootsie roll cake jelly beans dragée. Lollipop marzipan apple pie bonbon soufflé cookie. Sesame snaps chocolate cheesecake muffin macaroon. Sweet roll cheesecake bonbon shortbread biscuit carrot cake. Sweet sesame snaps jelly croissant icing bonbon. Bear claw brownie wafer muffin lemon drops chupa chups dragée icing. Dragée lollipop jelly-o gingerbread cake. Pudding liquorice chocolate cupcake ice cream lollipop biscuit gingerbread.</p>'
          },
          {
            buttonText: 'Croissant ice cream candy chocolate bar',
            content: '<p>Sweet roll jelly-o lemon drops pudding bear claw. Powder cotton candy toffee chupa chups topping. Jelly cupcake cotton candy brownie dessert. Caramels cheesecake bonbon dragée chocolate cake. Cupcake brownie halvah halvah tiramisu tootsie roll cake jelly beans dragée. Lollipop marzipan apple pie bonbon soufflé cookie. Sesame snaps chocolate cheesecake muffin macaroon. Sweet roll cheesecake bonbon shortbread biscuit carrot cake. Sweet sesame snaps jelly croissant icing bonbon. Bear claw brownie wafer muffin lemon drops chupa chups dragée icing. Dragée lollipop jelly-o gingerbread cake. Pudding liquorice chocolate cupcake ice cream lollipop biscuit gingerbread.</p>'
          },
          {
            buttonText: 'Croissant ice cream candy chocolate bar',
            content: '<p>Sweet roll jelly-o lemon drops pudding bear claw. Powder cotton candy toffee chupa chups topping. Jelly cupcake cotton candy brownie dessert. Caramels cheesecake bonbon dragée chocolate cake. Cupcake brownie halvah halvah tiramisu tootsie roll cake jelly beans dragée. Lollipop marzipan apple pie bonbon soufflé cookie. Sesame snaps chocolate cheesecake muffin macaroon. Sweet roll cheesecake bonbon shortbread biscuit carrot cake. Sweet sesame snaps jelly croissant icing bonbon. Bear claw brownie wafer muffin lemon drops chupa chups dragée icing. Dragée lollipop jelly-o gingerbread cake. Pudding liquorice chocolate cupcake ice cream lollipop biscuit gingerbread.</p>'
          },
          {
            buttonText: 'Croissant ice cream candy chocolate bar',
            content: '<p>Sweet roll jelly-o lemon drops pudding bear claw. Powder cotton candy toffee chupa chups topping. Jelly cupcake cotton candy brownie dessert. Caramels cheesecake bonbon dragée chocolate cake. Cupcake brownie halvah halvah tiramisu tootsie roll cake jelly beans dragée. Lollipop marzipan apple pie bonbon soufflé cookie. Sesame snaps chocolate cheesecake muffin macaroon. Sweet roll cheesecake bonbon shortbread biscuit carrot cake. Sweet sesame snaps jelly croissant icing bonbon. Bear claw brownie wafer muffin lemon drops chupa chups dragée icing. Dragée lollipop jelly-o gingerbread cake. Pudding liquorice chocolate cupcake ice cream lollipop biscuit gingerbread.</p>'
          },
          {
            buttonText: 'Croissant ice cream candy chocolate bar',
            content: '<p>Sweet roll jelly-o lemon drops pudding bear claw. Powder cotton candy toffee chupa chups topping. Jelly cupcake cotton candy brownie dessert. Caramels cheesecake bonbon dragée chocolate cake. Cupcake brownie halvah halvah tiramisu tootsie roll cake jelly beans dragée. Lollipop marzipan apple pie bonbon soufflé cookie. Sesame snaps chocolate cheesecake muffin macaroon. Sweet roll cheesecake bonbon shortbread biscuit carrot cake. Sweet sesame snaps jelly croissant icing bonbon. Bear claw brownie wafer muffin lemon drops chupa chups dragée icing. Dragée lollipop jelly-o gingerbread cake. Pudding liquorice chocolate cupcake ice cream lollipop biscuit gingerbread.</p>'
          }
        ]
      }
    }
  ]
};
