'use strict';

/* global define, module, gent_styleguide */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else {
    if (typeof exports === 'object') {
      module.exports = factory();
    }
    else {
      root.OpeningHours = factory();
    }
  }
})(this || window, function () {
  return function (elem, options) {
    if (typeof gent_styleguide === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('You need to include base.js.');
      return;
    }

    if (!options) {
      options = {};
    }

    let channels = [];

    const print = data => { elem.innerHTML = data; };
    const error = message => { print(`<span class="error">Error: ${message}</span>`); };

    const getRequestDateFromUrl = () => {
      let parameterDate = findGetParameter('oh_day');
      if (!parameterDate) {
        return null;
      }

      return formatDate(parameterDate);
    };

    /**
     * Isolate a GET parameter from the URI query string and return it.
     *
     * @param {string} key
     *    GET parameter name.
     *
     * @return {string}
     *    GET parameter value.
     */
    const findGetParameter = key => {
      let result = null;
      let tmp = [];
      let items = location.search.substr(1).split('&');

      for (let index = 0; index < items.length; index++) {
        tmp = items[index].split('=');
        if (tmp[0] === key) {
          result = decodeURIComponent(tmp[1]);
        }
      }

      return result;
    };


    /**
     *  Format a date to YYYY--MM-DD format
     *
     * @param {string} dateString
     *    date in any format
     * @return {string}
     *    date in YYYY-MM-DD format.
     */
    const formatDate = dateString => {
      let iso;
      if (dateString === 'today') {
        let today = new Date();
        dateString = today.toISOString().slice(0, 10);
      }
      if (dateString === 'tomorrow') {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateString = tomorrow.toISOString().slice(0, 10);
      }

      let date = !dateString ? new Date() : new Date(dateString);

      try {
        iso = date.toISOString();
      }
      catch (err) {
        date = new Date();
        iso = date.toISOString();
      }

      return iso.slice(0, 10);
    };

    const constructRequestUrls = callback => {
      let {service, type, date} = elem.dataset;
      let baseUri = `${options.endpoint}/services/${service}/channels`;

      if (!channels.length) {
        gent_styleguide.request(baseUri, (xmlhttp, data) => {
          channels = JSON.parse(data).reduce((accumulator, channel) => {
            accumulator.push(channel.id);
            return accumulator;
          }, []);

          constructRequestUrls(callback);
        }, {headers: {Accept: 'application/json'}, options});

        return;
      }

      if (typeof callback === 'function') {
        callback(
          channels.map(channel => {
            let uri = `${baseUri}/${channel}`;

            switch (type) {
              case 'open-now': {
                uri += '/open-now';
                break;
              }

              case 'day':
              case 'week':
              case 'month':
              case 'year': {
                uri += `/openinghours/${type}?date=${formatDate(date)}`;
                break;
              }

              case 'week-from-now':
              default: {
                let until = new Date(date);
                until.setDate(until.getDate() + 6);
                uri += '/openinghours?from=' + formatDate(date) + '&until=' + formatDate(until);
                break;
              }
            }

            return (`${uri}&language=${options.language}`);
          })
        );
      }
    };

    const constructWidget = urls => {
      let html = '';
      urls.forEach((url, i) => gent_styleguide.request(url, (xmlhttp, data) => {
        html += data;

        if (i + 1 === urls.length) {
          print(html);
          addEvents();
          if (typeof options.callback === 'function') {
            options.callback();
          }
        }
      }, {options}));
    };

    /**
     * Handle keyboard input to move to other dates.
     *
     * @param {Event} e
     *   The keydown event.
     */
    const handleKeyboardInput = function (e) {
      let keyCode = e.keyCode || e.which;
      let current = e.target;
      let currentPosition = +current.getAttribute('aria-posinset');

      let changeFocus = function (e, nextElem) {
        e.preventDefault();
        nextElem.click();
      };

      let next = function () {
        let nextElem = elem.querySelector('[aria-posinset="' + ++currentPosition + '"]')
          || elem.querySelector('[aria-posinset="' + 1 + '"]');
        changeFocus(e, nextElem);
      };

      let previous = function () {
        let nextElem = elem.querySelector('[aria-posinset="' + --currentPosition + '"]')
          || elem.querySelector('[aria-posinset="' + 31 + '"]')
          || elem.querySelector('[aria-posinset="' + 30 + '"]');
        changeFocus(e, nextElem);
      };

      let up = function () {
        let nextElem = elem.querySelector('[aria-posinset="' + (currentPosition - 7) + '"]')
          || elem.querySelector('[aria-posinset="' + (currentPosition + 4 * 7) + '"]')
          || elem.querySelector('[aria-posinset="' + (currentPosition + 3 * 7) + '"]');
        changeFocus(e, nextElem);
      };

      let down = function () {
        let nextElem = elem.querySelector('[aria-posinset="' + (currentPosition + 7) + '"]')
          || elem.querySelector('[aria-posinset="' + (currentPosition - 4 * 7) + '"]')
          || elem.querySelector('[aria-posinset="' + (currentPosition - 3 * 7) + '"]');
        changeFocus(e, nextElem);
      };

      let home = function () {
        let nextElem = elem.querySelector('[aria-posinset="1"]');
        changeFocus(e, nextElem);
      };

      let end = function () {
        let nextElem = elem.querySelector('[aria-posinset="31"]')
          || elem.querySelector('[aria-posinset="30"]')
          || elem.querySelector('[aria-posinset="29"]')
          || elem.querySelector('[aria-posinset="28"]');
        changeFocus(e, nextElem);
      };

      switch (keyCode) {
        case 37:
          previous();
          break;
        case 38:
          up();
          break;
        case 40:
          down();
          break;
        case 39:
          next();
          break;
        case 36:
          home();
          break;
        case 35:
          end();
          break;
      }
    };


    const addEvents = () => {
      if (elem.dataset.type === 'month') {
        elem.querySelector('.openinghours--prev').addEventListener('click', function () {
          let month = new Date(elem.dataset.date);
          month.setMonth(month.getMonth() - 1, 5);
          elem.dataset.date = formatDate(month);
          new OpeningHours(elem, options); // eslint-disable-line no-undef
        });
        elem.querySelector('.openinghours--next').addEventListener('click', function () {
          let month = new Date(elem.dataset.date);
          month.setMonth(month.getMonth() + 1, 5);
          elem.dataset.date = formatDate(month);
          new OpeningHours(elem, options); // eslint-disable-line no-undef
        });

        let days = elem.querySelectorAll('.openinghours--day:not([aria-hidden])');
        for (let i = 0; i < days.length; i++) {

          days[i].addEventListener('keydown', handleKeyboardInput);

          days[i].addEventListener('click', function (e) {
            for (let x = 0; x < days.length; x++) {
              days[x].setAttribute('tabindex', -1);
              // IE fix: trigger repaint
              days[x].classList.add('inactive');
            }
            this.setAttribute('tabindex', 0);
            // IE fix: trigger repaint
            this.classList.remove('inactive');
            this.focus();
          });
        }
      }
    };

    /**
     * Initialize the component.
     */
    const init = () => {
      let defaults = {
        endpoint: '',
        language: 'en',
        requestDate: getRequestDateFromUrl()
      };

      options = Object.assign(defaults, options);

      if (!options.endpoint || options.endpoint.length === 0) {
        error('Please provide an API endpoint.');
        return;
      }

      if (isNaN(elem.dataset.service)) {
        error('Please provide a service.');
        return;
      }

      if (elem.dataset.channels) {
        channels = elem.dataset.channels.split(',');
      }

      if (!elem.dataset.date) {
        elem.dataset.date = options.requestDate || new Date().toISOString().slice(0, 10);
      }

      // Load data from API
      constructRequestUrls(constructWidget);

    };

    init();

    return {init};
  };
});
