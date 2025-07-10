// Global bindings for ResponsiveTable, Swiper, equalizeTableSwiperHeights.
'use strict';

(function () {

  /**
   * Reset heights for all elements in the given row map.
   *
   * @param {Object} rowMap - A map of data-row-index to an array of DOM elements.
   */
  function resetRowHeights(rowMap) {
    Object.keys(rowMap).forEach(function (key) {
      rowMap[key].forEach(function (cell) {
        cell.style.height = '';
      });
    });
  }

  /**
   * Set maximum height per row based on the row map.
   *
   * @param {Object} rowMap - A map of data-row-index to an array of DOM elements.
   */
  function setMaxRowHeights(rowMap) {
    Object.keys(rowMap).forEach(function (key) {
      const maxHeight = Math.max.apply(null, rowMap[key].map(function (el) {
        return el.offsetHeight;
      }));
      rowMap[key].forEach(function (cell) {
        cell.style.height = maxHeight + 'px';
      });
    });
  }

  /**
   * Set all .column-header elements within a wrapper to the same height.
   *
   * @param {Element} wrapper - The .table-swiper-wrapper element containing headers.
   */
  function equalizeColumnHeaders(wrapper) {
    const headers = wrapper.querySelectorAll('.column-header');
    if (headers.length === 0) {
      return;
    }

    headers.forEach(function (el) {
      el.style.height = '';
    });

    const maxHeaderHeight = Math.max.apply(null, Array.from(headers).map(function (el) {
      return el.offsetHeight;
    }));

    headers.forEach(function (el) {
      el.style.height = maxHeaderHeight + 'px';
    });
  }

  /**
   * Sets equal heights for cells in each row across fixed and swiper columns.
   */
  function equalizeTableSwiperHeights() {
    document.querySelectorAll('.table-swiper-wrapper').forEach(function (wrapper) {
      const rowMap = {};

      // Group .cell-row elements by data-row-index.
      const cells = wrapper.querySelectorAll('.cell-row[data-row-index]');
      cells.forEach(function (el) {
        const index = el.getAttribute('data-row-index');
        if (!rowMap[index]) {
          rowMap[index] = [];
        }
        rowMap[index].push(el);
      });

      resetRowHeights(rowMap);
      setMaxRowHeights(rowMap);
      equalizeColumnHeaders(wrapper);
    });
  }

  // Initialise each Swiper separately.
  function initializeSwiper() {
    document.querySelectorAll('.table-swiper-wrapper .swiper').forEach(function (swiperElement) {
      const swiperWrapper = swiperElement.closest('.table-swiper-wrapper');
      const paginationEl = swiperWrapper.querySelector('.swiper-pagination');
      const nextEl = swiperWrapper.querySelector('.swiper-button-next');
      const prevEl = swiperWrapper.querySelector('.swiper-button-prev');
      const slideCount = swiperElement.querySelectorAll('.swiper-slide').length;

      new Swiper(swiperElement, { // eslint-disable-line no-undef
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: slideCount > 1,
        pagination: {
          el: paginationEl,
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: nextEl,
          prevEl: prevEl
        },
        on: {
          init: function () {
            equalizeTableSwiperHeights();
            setTimeout(() => this.update(), 100);
          },
          resize: function () {
            equalizeTableSwiperHeights();
          }
        },
        observer: true,
        observeParents: true,
      });
    });
  }


  // Extra fallback for page load and window resize.
  window.addEventListener('load', initializeSwiper);
  window.addEventListener('load', equalizeTableSwiperHeights);
  window.addEventListener('resize', equalizeTableSwiperHeights);
})();
