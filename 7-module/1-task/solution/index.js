'use strict';

/**
 * Функция декоратор makeLogging(fn, log), для функции fn
 * возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.
 * @param {Function} fn - декорируемая функция
 * @param {Array} log - массив для записи логов
 * @return {Function}
 */
function makeLogging(fn, log) {
    let count = 0;

    return function (...args) {
        log[count] = args;
        count += 1;

        return fn.apply(this, args);
    }

}