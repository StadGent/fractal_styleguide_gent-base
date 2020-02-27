'use strict';

module.exports = {
  collator: function (markup, item) {
    return `<!-- Start: @${item.name} -->
            <dt>${item.name}</dt>
            <dd>
              ${markup}
              <button class="button button-primary" aria-controls="${item.context.id}">Open modal</button>
            </dd>
            <!-- End: @${item.name} -->`;
  },
  context: {
    id: 'modal',
    title: 'An example modal',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet vestibulum ex, id tincidunt nulla porttitor nec. Cras aliquam interdum felis, nec efficitur quam varius sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nec gravida tellus, quis pulvinar enim. Proin ut lectus dui. Pellentesque maximus orci quis aliquet bibendum. Fusce vestibulum velit a tellus fermentum, in laoreet est pharetra.</p>' +
      '<p>Fusce sed lacus turpis. Praesent ultrices viverra neque vel fermentum. Donec pulvinar ligula et iaculis euismod. Donec rhoncus cursus lacus, et pharetra ligula tristique non. Morbi nec ligula ornare, semper orci sit amet, varius massa. Fusce magna quam, condimentum et rhoncus et, porttitor at turpis. Donec id nunc dapibus, consequat massa a, cursus odio. Aliquam in dignissim sem. Suspendisse potenti. Etiam at metus vitae urna viverra luctus. Donec convallis interdum convallis. Donec volutpat eget velit in varius. Nam porta varius urna at eleifend. In elit ex, vestibulum non ex a, suscipit semper dui. Integer dictum lacus augue, vitae rhoncus lorem tempor eget.</p>' +
      '<p>Integer nec suscipit dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur non finibus felis. Nunc faucibus sapien at fermentum semper. Donec congue egestas felis, eget ultrices augue commodo in. Aliquam vitae elit diam. Nulla auctor velit sed nisl lacinia, sit amet tincidunt lectus consectetur. Aliquam sit amet hendrerit lacus. Curabitur lacus enim, tempus eget massa id, varius elementum quam. Praesent pulvinar facilisis lacinia. Quisque congue imperdiet nunc vitae dictum. Nulla a nisi neque. Mauris sed mollis orci. Pellentesque sagittis tempus diam. Phasellus malesuada diam sed lectus fringilla pellentesque. Nullam sit amet bibendum magna, et hendrerit tellus.</p>' +
      '<p>In ultrices, libero in pretium elementum, arcu est eleifend leo, et luctus ante orci nec mi. Sed ac facilisis sapien, sit amet dignissim erat. Nulla malesuada quam vitae leo iaculis fermentum. Aliquam condimentum odio at metus malesuada, et gravida nisi ornare. Sed lobortis eros eu dolor pulvinar porta. Sed luctus auctor pulvinar. Etiam laoreet interdum rhoncus. Aliquam in quam posuere ligula faucibus auctor.</p>' +
      '<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer condimentum mauris non urna scelerisque bibendum. Nulla facilisi. Curabitur sed mi fermentum, maximus lorem eu, laoreet purus. Vivamus ultricies consequat odio, a tristique erat varius ac. Morbi feugiat, nisl eu vehicula elementum, ipsum orci laoreet eros, id hendrerit enim sem in dolor. Maecenas augue ligula, vehicula a risus blandit, volutpat euismod felis. Aliquam maximus, tortor sed tincidunt volutpat, lorem ex dictum sem, eu scelerisque augue mi vitae orci. Nam imperdiet magna porttitor nunc finibus accumsan. Nullam maximus, nulla sit amet lobortis ullamcorper, erat nulla ornare lacus, non ullamcorper felis mi a nibh. Integer eget pulvinar quam.</p>' +
      '<p>Fusce sed lacus turpis. Praesent ultrices viverra neque vel fermentum. Donec pulvinar ligula et iaculis euismod. Donec rhoncus cursus lacus, et pharetra ligula tristique non. Morbi nec ligula ornare, semper orci sit amet, varius massa. Fusce magna quam, condimentum et rhoncus et, porttitor at turpis. Donec id nunc dapibus, consequat massa a, cursus odio. Aliquam in dignissim sem. Suspendisse potenti. Etiam at metus vitae urna viverra luctus. Donec convallis interdum convallis. Donec volutpat eget velit in varius. Nam porta varius urna at eleifend. In elit ex, vestibulum non ex a, suscipit semper dui. Integer dictum lacus augue, vitae rhoncus lorem tempor eget.</p>' +
      '<p>Integer nec suscipit dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur non finibus felis. Nunc faucibus sapien at fermentum semper. Donec congue egestas felis, eget ultrices augue commodo in. Aliquam vitae elit diam. Nulla auctor velit sed nisl lacinia, sit amet tincidunt lectus consectetur. Aliquam sit amet hendrerit lacus. Curabitur lacus enim, tempus eget massa id, varius elementum quam. Praesent pulvinar facilisis lacinia. Quisque congue imperdiet nunc vitae dictum. Nulla a nisi neque. Mauris sed mollis orci. Pellentesque sagittis tempus diam. Phasellus malesuada diam sed lectus fringilla pellentesque. Nullam sit amet bibendum magna, et hendrerit tellus.</p>' +
      '<p>In ultrices, libero in pretium elementum, arcu est eleifend leo, et luctus ante orci nec mi. Sed ac facilisis sapien, sit amet dignissim erat. Nulla malesuada quam vitae leo iaculis fermentum. Aliquam condimentum odio at metus malesuada, et gravida nisi ornare. Sed lobortis eros eu dolor pulvinar porta. Sed luctus auctor pulvinar. Etiam laoreet interdum rhoncus. Aliquam in quam posuere ligula faucibus auctor.</p>' +
      '<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer condimentum mauris non urna scelerisque bibendum. Nulla facilisi. Curabitur sed mi fermentum, maximus lorem eu, laoreet purus. Vivamus ultricies consequat odio, a tristique erat varius ac. Morbi feugiat, nisl eu vehicula elementum, ipsum orci laoreet eros, id hendrerit enim sem in dolor. Maecenas augue ligula, vehicula a risus blandit, volutpat euismod felis. Aliquam maximus, tortor sed tincidunt volutpat, lorem ex dictum sem, eu scelerisque augue mi vitae orci. Nam imperdiet magna porttitor nunc finibus accumsan. Nullam maximus, nulla sit amet lobortis ullamcorper, erat nulla ornare lacus, non ullamcorper felis mi a nibh. Integer eget pulvinar quam.</p>'
  },
  variants: [
    {
      name: 'with-actions',
      context: {
        id: 'modal-actions',
        actions: '<button type="button" class="button button-primary modal-close" data-target="modal-actions">Understood!</button>'
      }
    },
    {
      name: 'fixed-height',
      context: {
        id: 'modal-fixed',
        modifier: 'fixed-height',
        actions: '<button type="button" class="button button-primary modal-close" data-target="modal-fixed">Understood!</button>'
      }
    }
  ]
};
