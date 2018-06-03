"use strict";

describe("2-module-2-task", function() {

    it ('проверяем поиск одного ключа', function () {
        let obj = {
            options: {
                color: 'red'
            }
        };

        expect(find(obj, 'red')).toEqual('options.color');
    });

    it ('проверяем поиск нескольких ключей', function () {
        let obj = {
            options: {
                color: 'red'
            },
            style: {
                border: {
                    color: 'red'
                }
            }
        };

        expect(find(obj, 'red')).toEqual(['options.color', 'style.border.color']);
    });

    it ('ничего не найденно то null', function () {
        let obj = {
            options: {
                color: 'red'
            },
            style: {
                border: {
                    color: 'red'
                }
            }
        };

        expect(find(obj, 'green')).toEqual(null);
    });
});