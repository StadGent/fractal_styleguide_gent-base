/**
 * @file
 * Implements the jQuery UI datepicker plugin.
 *
 * @author
 * Gert-Jan Meire
 *
 */

'use strict';

(function ($) {
  $.fn.extend({

    /**
     * Creates a jQuery extension function.
     *
     */
    loadDatepicker: function () {
      $(this).datepicker({
        showWeek: true,
        dateFormat: 'dd/mm/yy',
        altFormat: 'dd/mm/yy'
      });
    }
  });
})(jQuery);
