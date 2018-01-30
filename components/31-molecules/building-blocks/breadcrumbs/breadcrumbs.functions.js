/**
 * @file
 * Breadcrumb handling and rendering.
 */

// Breadcrumb namespace definition.

'use strict';

var gentStyleGuideBreadcrumb = {};

(function ($) {

  /**
   * Replace the mobile breadcrumb of Gent base by our own.
   *
   * Adds this function to a global gentStyleBreadcrumb namespace.
   */
  gentStyleGuideBreadcrumb.updateMobileBreadcrumb = function () {
    var breadcrumb = $('ol.breadcrumb, ul.nav--breadcrumb, ul.breadcrumb');
    if (breadcrumb.length && !breadcrumb.hasClass('gentbe-processed')) {
      // Prevent duplicate processing by us or Gent base.
      breadcrumb.addClass('gentbe-processed');
      breadcrumb.addClass('mobile-breadcrumb-processed');

      // Remove the mobile breadcrumb of Gent base.
      $('select.nav--mobile-breadcrumb').remove();

      // Duplicate the original breadcrumb as mobile version.
      var mobile = breadcrumb.clone();
      mobile.removeAttr('id').addClass('nav--mobile-breadcrumb');
      breadcrumb.after(mobile);

      // Truncate the labels.
      truncateBreadcrumbLabels_(breadcrumb, 150);
      truncateBreadcrumbLabels_(mobile, 100);

      // Collapse the trail.
      collapseBreadcrumbTrail_(breadcrumb, 6);
      collapseBreadcrumbTrail_(mobile, 5, 1, 2);
    }
  };

  /**
   * Truncate the breadcrumb labels to a maximum length.
   *
   * @param {Object} breadcrumb
   *   The breadcrumb element as jQuery object.
   * @param {int} length
   *   Maximum length of a label.
   * @param {boolean} [ellipsis]
   *   Wether an elipsis should be added, defaults to true.
   */
  function truncateBreadcrumbLabels_(breadcrumb, length, ellipsis) {
    $('a, span', breadcrumb).each(function () {
      var element = $(this);
      var text = element.text().trim();

      if (text.length > length) {
        if (ellipsis !== false) {
          text = text.substr(0, (length - 3)).trim() + '...';
        }
        else {
          text = text.substr(0, length).trim();
        }

        element.text(text);
      }
    });
  }

  /**
   * Collapse the breadcrumb trail by hiding some elements.
   *
   * @param {Object} breadcrumb
   *   The breadcrumb element as jQuery object.
   * @param {int} min_length
   *   Only collapse if the trail has at least this many items.
   * @param {int} [head]
   *   Number of items to show at the start of the trail, defaults to 2.
   * @param {int} [tail]
   *   Number of items to show at the end of the trail, defaults to the same value as head.
   * @param {string} [text]
   *   Text to use as link to show the collapsed items, defaults to "...".
   */
  function collapseBreadcrumbTrail_(breadcrumb, min_length, head, tail, text) {
    // Set the default head and tail.
    if (head == null) {
      head = 2;
    }

    if (tail == null) {
      tail = head;
    }

    // Make sure we have a sensible minimum length.
    min_length = Math.max(min_length, (head + tail + 1));

    // Get the number of items.
    var length = $('li', breadcrumb).length;

    // Check if the trail has the minimum length.
    if (length >= min_length) {
      // Hide the items.
      for (var i = (head + 1); i <= (length - tail); i++) {
        $('li:nth-of-type(' + i + ')', breadcrumb).hide();
      }

      // Create the uncollapse  link.
      var link = $('<li>').append(
        $('<a>')
          .text(text ? text : '...')
          .attr('href', '#')
          .click(function (e) {
            e.preventDefault();

            $(this).parent().remove();
            $('li', breadcrumb).show();
          })
      );

      // Add it.
      if (head) {
        $('li:nth-of-type(' + head + ')', breadcrumb).after(link);
      }
      else {
        breadcrumb.prepend(link);
      }
    }
  }
})(jQuery);
