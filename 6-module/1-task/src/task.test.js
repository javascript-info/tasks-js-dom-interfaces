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

    it("проверяем если событие только что завершилось", function() {
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

});