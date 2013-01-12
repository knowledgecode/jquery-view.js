/**
 * @preserve jquery-view.js v1.0.0 (c) 2013 knowledgecode | MIT licensed
 * @requires jQuery or jQMobi or Zepto
 */
/*global $ */
/*jslint browser: true */
(function () {
    'use strict';

    var id = 'view',
        m = {};

    /**
     * @name on
     * @function
     * @param {Object} listeners
     */
    m.on = function (listeners) {
        var doc = $(document),
            listener,
            keys,
            fn;

        if (listeners.ready) {
            doc.ready(listeners.ready);
        }
        for (listener in listeners) {
            if (listeners.hasOwnProperty(listener)) {
                keys = listener.split('@');
                if (keys.length === 2) {
                    fn = listeners[listener];
                    switch (keys[1]) {
                    case 'window':
                        $(window).on(keys[0], fn);
                        break;
                    case 'document':
                        doc.on(keys[0], fn);
                        break;
                    default:
                        doc.on(keys[0], keys[1], fn);
                    }
                }
            }
        }
    };

    /**
     * @name off
     * @function
     * @param {Object} listeners
     */
    m.off = function (listeners) {
        var doc = $(document),
            listener,
            keys,
            fn;

        for (listener in listeners) {
            if (listeners.hasOwnProperty(listener)) {
                keys = listener.split('@');
                if (keys.length === 2) {
                    fn = listeners[listener];
                    switch (keys[1]) {
                    case 'window':
                        $(window).off(keys[0], fn);
                        break;
                    case 'document':
                        doc.off(keys[0], fn);
                        break;
                    default:
                        doc.off(keys[0], keys[1], fn);
                    }
                }
            }
        }
    };

    $.fn[id] = m;

}());
