"use strict";

describe("6-module-1-task", function() {

    beforeEach(function () {
        this.oldDateNow = Date.now;

        Date.now = function () {
            // Обратите внимание, для всех тестов
            // Дата фиксируется на одной точке
            return new Date(2018, 5, 15, 13).getTime();
        };
    });

    afterEach(function () {
        Date.now = this.oldDateNow;
    });

    it("проверяем если разница содержит месяцы, дни, часы", function() {
        expect(getBeforeTime(new Date(2019, 6, 17))).toEqual('1 г., 1 мес., 1 д., 11 ч.');
    });

    it("проверяем если событие только что завершилось", function() {
        expect(getBeforeTime(new Date(2018, 5, 15, 13))).toEqual('событие завершилось');
    });

    it("если остался час событие до начала события", function() {
        expect(getBeforeTime(new Date(2018, 5, 15, 14))).toEqual('1 ч.');
    });

    it("проверяем один день", function() {
        expect(getBeforeTime(new Date(2018, 5, 16, 13))).toEqual('1 д.');
    });

    it("событие завершилось", function() {
        expect(getBeforeTime(new Date(2018, 5, 15, 12))).toEqual('событие завершилось');
    });

    it("проверяем один час", function() {
        expect(getBeforeTime(new Date(2018, 5, 15, 14))).toEqual('1 ч.');
    });

    it("проверяем одну минуту", function() {
        expect(getBeforeTime(new Date(2018, 5, 15, 13, 1))).toEqual('1 мин.');
    });

    it("проверяем одну секунду", function() {
        expect(getBeforeTime(new Date(2018, 5, 15, 13, 0, 1))).toEqual('1 сек.');
    });

    it("если количество дней в месяце разное, то должен все равно посчитаться корректно", function () {

        Date.now = function () {
            // Обратите внимание, для всех тестов
            // Дата фиксируется на одной точке
            return new Date(2018, 1, 1, 13).getTime();
        };

        expect(getBeforeTime(new Date(2018, 2, 1, 13))).toEqual('1 мес.');
    });

    it("середина месяца и начало следующего, не равно месяцу", function () {

        Date.now = function () {
            // Обратите внимание, для всех тестов
            // Дата фиксируется на одной точке
            return new Date(2018, 0, 20, 13).getTime();
        };

        expect(getBeforeTime(new Date(2018, 1, 1, 13))).toEqual('12 д.');
    });

    it("конец года", function () {
        Date.now = function () {
            // Обратите внимание, для всех тестов
            // Дата фиксируется на одной точке
            return new Date(2018, 11, 31, 3).getTime();
        };

        expect(getBeforeTime(new Date(2019, 1, 1, 3))).toEqual('1 д.');
    });

    it("конец года", function () {
        Date.now = function () {
            // Обратите внимание, для всех тестов
            // Дата фиксируется на одной точке
            return new Date(2018, 11, 31, 3).getTime();
        };

        expect(getBeforeTime(new Date(2019, 0, 1, 3))).toEqual('1 д.');
    });

});