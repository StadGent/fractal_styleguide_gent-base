/**
 * @file
 * Implements a dropdown button.
 *
 * @author
 * Wim Vantomme
 *
 */
'use strict';

(function ($) {
  $.fn.extend({

    /**
     * Implements a jQuery extension function.
     *
     * @fires event:click
     */
    dropButtonLoad: function () {
      var dropButton = $(this);
      var dropButtonToggle = dropButton.find('.dropbutton-toggle button');

      /**
       * Opens or closes the drop-down botton on click.
       *
       * @event click
       */
      dropButtonToggle.on('click', function (e) {
        e.stopPropagation();
        if (dropButton.hasClass('open')) {
          dropButton.removeClass('open');
        }
        else {
          dropButton.addClass('open');
        }
      });

      /**
       * Closes the drop-down button
       *
       * @event click
       */
      $(document).on('click', function (e) {
        dropButton.removeClass('open');
      });
    }
  });
})(jQuery);
