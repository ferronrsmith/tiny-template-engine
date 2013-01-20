/*global describe, it, jasmine, expect */

describe("format & tiny template testing", function () {
    "use strict";
    it('expect format to be equal', function () {
        expect("{0} is dead, but {1} is alive! {0}".format("FLASH", "HTML5")).toBe('FLASH is dead, but HTML5 is alive! FLASH');
    });

    it('expect 3rd param to be undefined', function () {
        expect("{0} is dead, but {1} is alive! {0} {2}".format("FLASH", "HTML5")).toBe('FLASH is dead, but HTML5 is alive! FLASH undefined');
    });

    it('expect template to be replaced', function () {
        expect("Hello {who}!".t({ who : 'JavaScript'})).toBe('Hello JavaScript!');
    });

    it('expect template to be replaced', function () {
        expect("Hello {who}! It's {time} ms since epoch".t({who : 'JavaScript', time : 'today'})).toBe("Hello JavaScript! It's today ms since epoch");
    });

    it('expect template to be replaced', function () {
        expect("Hello {who}! It's {time} ms since {current} epoch".t({who : 'JavaScript', time : 'today'}, {current: 'multi'})).toBe("Hello JavaScript! It's today ms since multi epoch");
    });

});