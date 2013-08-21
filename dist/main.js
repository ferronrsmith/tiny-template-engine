/*global jQuery, $ */
/*jslint devel:true*/
/**
 * User: ferron
 * Date: 1/13/13
 * Time: 7:59 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 *
 * "{0} is dead, but {1} is alive! {0}".format("FLASH", "HTML5")
 * FLASH is dead, but HTML5 is alive! FLASH
 * @return {String}
 */
String.prototype.format = function () {
    "use strict";
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (match, number) {
        return args[number] !== 'undefined' ? args[number] : match;
    });
};

String.prototype.t = function () {
    /**
     * Simple templating engine that takes as arguments an abject literal and replace the content inside the template
     *
     * "Hello {who}!".t({ who : 'JavaScript'});
     * // Hello JavaScript!
     *
     * "Hello {who}! It's {time} ms since epoch".t({who : 'JavaScript', time : Date.now});
     * // Hello JavaScript! It's ...... ms since epoch
     * @return {*}
     */
    "use strict";
    var p, res = this, i, len = arguments.length, cur;
    for (i = 0; i < len; i += 1) {
        cur = arguments[i];
        for (p in cur) {
            if (cur.hasOwnProperty(p)) {
                res = res.replace(new RegExp('{' + p + '}', 'g'), cur[p]);
            }
        }
    }
    return res;
};