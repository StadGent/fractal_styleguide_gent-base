'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else {
    if (typeof exports === 'object') {
      module.exports = factory();
    }
    else {
      root.ResponsiveTable = factory();
    }
  }
}(this || window, function () {
  return function (element, options) {

    let caption = null;

    const determineFocusable = () => {
      var scrollableWidth = element.parentNode.querySelector('table').scrollWidth;
      var containerWidth = element.parentNode.clientWidth;

      if (scrollableWidth <= containerWidth) {
        element.removeAttribute('tabindex');
      }
      else if (caption) {
        caption.innerText += ' ' + options.scrollableText;
      }
    };

    const setupResponsiveTable = () => {
      if (caption && !caption.hasAttribute('id')) {
        const tableUid = Math.random().toString(36).substr(2, 16);
        caption.setAttribute('id', 'responsive-table-caption-caption-' + tableUid);
        element.setAttribute('aria-labelledby', caption.getAttribute('id'));
      }

      element.setAttribute('tabindex', '0');
      element.setAttribute('role', 'group');

      let firstRow = element.querySelector('tr');
      let tableHeadingsNodeList = firstRow.querySelectorAll('th');

      if (firstRow.getElementsByTagName('th').length === firstRow.querySelectorAll('*').length) {
        for (let i = 0; i < tableHeadingsNodeList.length; i++) {
          if (!tableHeadingsNodeList[i].hasAttribute('scope')) {
            tableHeadingsNodeList[i].setAttribute('scope', 'col');
          }
        }
      }

      let tableRowsNodeList = element.querySelectorAll('tr');
      for (let i = 0; i < tableRowsNodeList.length; i++) {
        let firstChild = tableRowsNodeList[i].firstElementChild;

        if (firstChild && !firstChild.hasAttribute('scope')) {
          firstChild.setAttribute('scope', 'row');
        }
      }

      determineFocusable();
    };

    const equalizeColumnHeaderHeights = () => {
      const headers = document.querySelectorAll('.table-swiper .column-header');
      let maxHeaderHeight = 0;

      headers.forEach(header => {
        header.style.height = 'auto';
        const height = Math.round(header.offsetHeight);
        if (height > maxHeaderHeight) {
          maxHeaderHeight = height;
        }
      });

      headers.forEach(header => {
        header.style.height = `${maxHeaderHeight}px`;
      });

      const rows = document.querySelectorAll('.table-swiper .cell-row');
      const groupedByIndex = {};

      rows.forEach(row => {
        const index = row.getAttribute('data-row-index');
        if (!groupedByIndex[index]) {
          groupedByIndex[index] = [];
        }
        groupedByIndex[index].push(row);
      });

      Object.values(groupedByIndex).forEach(rowGroup => {
        let maxHeight = 0;

        rowGroup.forEach(row => {
          row.style.height = 'auto';
          const height = Math.round(row.offsetHeight);
          if (height > maxHeight) {
            maxHeight = height;
          }
        });

        rowGroup.forEach(row => {
          row.style.height = `${maxHeight}px`;
        });
      });
    };

    const init = () => {
      if (!element) {
        return;
      }

      caption = element.querySelector('caption');

      setupResponsiveTable();
      equalizeColumnHeaderHeights();
    };

    init();

    window.equalizeTableSwiperHeights = equalizeColumnHeaderHeights;

    return {};
  };
}));
