"use strict";

describe("01-module-02-task", function() {

    it("при возведении 2 в 3ю степень результат 8", function() {
        expect(pow2(2, 3)).toEqual(8);
    });

    it("при возведении 3 в 4ю степень равен 81", function() {
        expect(pow2(3, 4)).toEqual(81);
    });

});