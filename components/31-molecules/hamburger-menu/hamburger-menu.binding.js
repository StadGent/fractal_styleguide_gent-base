/**
 * @file
 * Javascript binding of hamburger-menu.functions.js.
 */

'use strict';

(function ($) {
  $(window).on('load', function (e) {
    var $hamburgerMenu = $('.hamburger-menu');

    if ($hamburgerMenu.length > 0) {
      $hamburgerMenu.loadHamburgerMenu();
    }
  });

})(jQuery);
