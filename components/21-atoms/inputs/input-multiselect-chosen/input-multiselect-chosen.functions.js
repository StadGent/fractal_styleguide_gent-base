/**
 * @file
 * Implements the jQuery Chosen plugin.
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
    loadChosenSelect: function () {
      $(this).chosen({disable_search: true});
    }

  });
})(jQuery);
