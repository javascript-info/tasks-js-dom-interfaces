"use strict";

describe("7-module-1-task", function() {

    it("проверяем заполнения массива log", function() {
        let log = [];
        let fn = makeLogging(function () {}, log);

        fn(1,2);
        fn(3,4);
        fn(5);

        expect(log[0][0]).toEqual(1);
        expect(log[0][1]).toEqual(2);
        expect(log[1][0]).toEqual(3);
        expect(log[1][1]).toEqual(4);
        expect(log[2][0]).toEqual(5);
    });


    it ('проверяем return, что функция возвращает ожидаемые значения', function () {
        let log = [];
        let fn = makeLogging(function (a,b) {return a + b;}, log);

        expect(fn(1,2)).toEqual(3);
    });

    it ('если декорируемая функция, является методом объекта, то при вызове не должен терятся контекст', function () {
        let log = [];

        let user = {
            name: 'ilia',
            hi() {
                return `hello ${this.name}`;
            }
        }

        user.hi = makeLogging(user.hi, log);

        expect(user.hi()).toEqual('hello ilia');
    })

});