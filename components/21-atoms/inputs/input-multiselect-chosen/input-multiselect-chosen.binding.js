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
  $(window).on('load', initMultiselectChosen);

  /**
   * Replace the mobile breadcrumb of Gent base by our own.
   */
  function initMultiselectChosen() {
    var isIpad = navigator.userAgent.match(/iPad/i) != null;
    var isIphone = navigator.userAgent.match(/iPhone/i) != null;

    if (isIpad === false) {
      $('.chosen-select').loadChosenSelect();
    }

    if (isIpad || isIphone) {
      $('.chosen-select').addClass('no-chosen-select');
    }
  }

})(jQuery);
