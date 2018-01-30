'use strict';

(function ($) {
  $(document).ready(function () {
    var $gallery = $('.gallery');

    if ($gallery.length > 0) {
      $gallery.loadLightGallery();
    }
  });

})(jQuery);
