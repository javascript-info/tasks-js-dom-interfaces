"use strict";

describe("16-module-1-task", function() {

    beforeEach(function () {

        this.asyncRequestOk = function (data) {

            return new Promise(resolve => {
                setTimeout(() => resolve('async-' + data));
            });

        };

    });

    it ('проверяем итерацию генератора', function (done) {
        let asyncRequestOk = this.asyncRequestOk;

        function * test() {
            let a = yield asyncRequestOk('user');
            let b = yield asyncRequestOk('name');

            return [a, b].join(':');
        }

        processGenerator(test())
            .then(result => expect(result).toEqual('async-user:async-name'))
            .then(done);
    });
});