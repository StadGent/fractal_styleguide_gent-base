'use strict';

/* global define, module */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else {
    if (typeof exports === 'object') {
      module.exports = factory();
    }
    else {
      root.Calendar = factory();
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

      for (var index = 0; index < items.length; index++) {
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

    const constructRequestUrl = () => {
      let {service, channel, type, date} = elem.dataset;
      let uri = `${options.endpoint}/services/${service}/channels/${channel}`;

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

      return `${uri}&language=${options.language}`;
    };

    const request = (url, callback) => {
      let xmlhttp;
      xmlhttp = new XMLHttpRequest();
      xmlhttp.options = options;
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          callback(xmlhttp, xmlhttp.responseText);
        }
        else if (typeof xmlhttp.options.error === 'function' && xmlhttp.readyState === 4 && xmlhttp.status !== 200) {
          xmlhttp.options.error(xmlhttp);
        }
      };
      xmlhttp.open('GET', url, true);
      xmlhttp.setRequestHeader('Accept', 'text/html');
      xmlhttp.setRequestHeader('Accept-Language', options.language);
      xmlhttp.send();
    };

    const constructWidget = (xmlhttp, data) => {
      print(data);
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

      if (isNaN(elem.dataset.service) || isNaN(elem.dataset.channel)) {
        error('Please provide a service and channel.');
        return;
      }

      if (options.requestDate) {
        elem.dataset.date = this.settings.requestDate;
      }
      else if (typeof elem.dataset.date === 'undefined') {
        elem.dataset.date = new Date().toISOString().slice(0, 10);
      }

      // Load data from API
      request(constructRequestUrl(), constructWidget);
    };

    init();

    return {};
  };
});
