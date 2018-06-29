"use strict";

describe("2-module-1-task", function() {

    it("проверяем клонирование плоских объектов", function() {
        let obj = {test: 1};

        expect(clone(obj) !== obj).toEqual(true);
        expect(clone(obj).test === obj.test).toEqual(true);
    });

    it("проверяем вложенных объектов", function() {
        let obj = {test: { test2: { test3: '1' } }};

        expect(clone(obj) !== obj).toEqual(true);
        expect(clone(obj).test.test2 !== obj.test.test2).toEqual(true);
        expect(clone(obj).test.test2.test3 === obj.test.test2.test3).toEqual(true);
    });

    it("проверяем корректную обработку null (typeof null === 'object')", function() {
        let obj = {test: { test2: { test3: null } }};

        expect(clone(obj) !== obj).toEqual(true);
        expect(clone(obj).test.test2 !== obj.test.test2).toEqual(true);
        expect(clone(obj).test.test2.test3 === obj.test.test2.test3).toEqual(true);
    });

});