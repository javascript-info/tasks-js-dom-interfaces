"use strict";

describe("task", function() {

    it("сумма 2 и 3 равна 5", function() {
        expect(sum(2, 3)).toEqual(5);
    });

    it("сумма 3 и 4 равна 7", function() {
        expect(sum(3, 4)).toEqual(7);
    });

});