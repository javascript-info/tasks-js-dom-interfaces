"use strict";

describe("1-module-2-task", function() {

    it("если имя корректное то true", function() {
        expect(isValid('Ilia')).toEqual(true);
    });

    it("если содержит пробелы, то false", function () {
        expect(isValid('Ilia Burlak')).toEqual(false);
    });

    it("если меньше 4 симовлов то false", function () {
        expect(isValid('Ili')).toEqual(false);
    });

});