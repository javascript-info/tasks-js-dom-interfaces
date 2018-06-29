'use strict';

/**
 * Функция выполняет наследование
 * @param {Function} Main - класс который должен стать наследником
 * @param {Function} Parent - родительский класс
 */
function extendClass(Main, Parent) {
    // подробнее см здесь http://learn.javascript.ru/class-inheritance#%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%B4-%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F
    Main.prototype = Object.create(Parent.prototype);
    Main.prototype.constructor = Main;
}

