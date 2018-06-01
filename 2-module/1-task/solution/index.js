/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
    let result = {};

    if (typeof obj !== 'object') {
        return obj;
    }

    for (let key in obj) {

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            result[key] = clone(obj[key]);
        } else {
            result[key] = obj[key];
        }

    }

    return result;
}