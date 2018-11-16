'use strict';

/* global define, module, gent_styleguide, OpeningHours, Accordion, allieTabs */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else {
    if (typeof exports === 'object') {
      module.exports = factory();
    }
    else {
      root.OpeningHoursAccordion = factory();
    }
  }
})(this || window, function () {
  return function (elem, options) {
    if (typeof gent_styleguide === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('You need to include base.js.');
      return;
    }

    if (typeof OpeningHours === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('You need to include opening-hours.functions.js.');
      return;
    }

    if (typeof Accordion === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('You need to include opening-hours.functions.js.');
      return;
    }

    if (typeof allieTabs === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('You need to include allieTabs.');
      return;
    }

    if (!options) {
      options = {};
    }

    options = Object.assign({
      endpoint: 'http://openingsuren.web.test.gentgrp.gent.be/api/v1'
    }, options);

    let channels;
    let {service} = elem.dataset;

    const template = elem.innerHTML;
    const {endpoint} = options;

    const fetchChannels = callback => {
      let url = `${endpoint}/services/${service}/channels`;
      gent_styleguide.request(url, (xmlhttp, data) => {
        channels = JSON.parse(data);
        if (typeof callback === 'function') {
          callback(channels);
        }
      }, {headers: {Accept: 'application/json'}, options});
    };

    const prepareDOM = channel => {
      let html = template
        .replace(/%label%/g, channel.label)
        .replace(/%service%/g, service)
        .replace(/%channel%/g, channel.id);

      elem.innerHTML += html;
    };

    const bindEvents = () => {
      let accordions = elem.querySelectorAll('.accordion');
      let openingHours = elem.querySelectorAll('.opening-hours-wrapper');
      let tabs = elem.querySelectorAll('.tabs');

      for (let i = accordions.length; i--;) {
        new Accordion(accordions[i]);
      }

      for (let i = tabs.length; i--;) {
        allieTabs.init(tabs[i]);
      }

      for (let i = openingHours.length; i--;) {
        new OpeningHours(openingHours[i], options);
      }
    };

    /**
     * Initialize the component.
     */
    const init = () => {
      elem.innerHTML = '';

      fetchChannels(channels => {
        channels.forEach(channel => {
          prepareDOM(channel);
        });

        bindEvents();
        elem.classList.add('is-loaded');
      });
    };

    init();

    return { };
  };
});
