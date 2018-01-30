'use strict';

(function ($) {

  /**
   * Invoked after after loading the initial page and after each AJAX request.
   *
   * @param context
   *   The DOM context.
   * @param settings
   *   Object of additional settings.
   */
  $(window).on('load', dropButtonLoad);

  /**
   * Replace the mobile breadcrumb of Gent base by our own.
   */
  function dropButtonLoad() {
    var dropButton = $('.dropbutton-wrapper');
    var dropButtonToggle = dropButton.find('.dropbutton-toggle button');

    dropButtonToggle.on('click', function (e) {
      e.stopPropagation();
      if (dropButton.hasClass('open')) {
        dropButton.removeClass('open');
      }
      else {
        dropButton.addClass('open');
      }
    });

    $(document).on('click', function (e) {
      dropButton.removeClass('open');
    });

  }

})(jQuery);
