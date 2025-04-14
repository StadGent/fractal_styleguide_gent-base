// Global bindings for ResponsiveTable, Swiper, equalizeTableSwiperHeights.
'use strict';

(function () {
  const tablesNodeList = document.querySelectorAll('.responsive-table .table-wrapper');

  for (let i = 0; i < tablesNodeList.length; i++) {
    const table = tablesNodeList[i];
    new ResponsiveTable(table, { // eslint-disable-line no-undef
      scrollableText: '(scroll to see more)'
    });
  }

  // Initialize each Swiper separately.
  document.querySelectorAll('.table-swiper-wrapper .swiper').forEach((swiperElement, index) => {
    const swiperWrapper = swiperElement.closest('.table-swiper-wrapper');
    const paginationEl = swiperWrapper.querySelector('.swiper-pagination');
    const nextEl = swiperWrapper.querySelector('.swiper-button-next');
    const prevEl = swiperWrapper.querySelector('.swiper-button-prev');

    new Swiper(swiperElement, { // eslint-disable-line no-undef
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: true,
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
          if (typeof equalizeTableSwiperHeights === 'function') {
            equalizeTableSwiperHeights(); // eslint-disable-line no-undef
          }
          // fallback update after render.
          setTimeout(() => this.update(), 100);
        },
        resize: function () {
          if (typeof equalizeTableSwiperHeights === 'function') {
            equalizeTableSwiperHeights(); // eslint-disable-line no-undef
          }
        }
      }
    });
  });

  if (typeof equalizeTableSwiperHeights === 'function') {
    window.addEventListener('load', equalizeTableSwiperHeights); // eslint-disable-line no-undef
    window.addEventListener('resize', equalizeTableSwiperHeights); // eslint-disable-line no-undef
  }
})();
