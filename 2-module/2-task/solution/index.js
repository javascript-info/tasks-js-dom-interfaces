/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
    let results = [];

    let next = function (obj, path) {

        for (let key in obj) {

            if (obj[key] === value) {
                results.push(`${path}.${key}`)
            } else if (typeof obj[key] === 'object' && obj[key] !== null){
                next(obj[key], `${path}${path ? '.' : ''}${key}`);
            }

        }

    };

    next(obj, '');

    if (!results.length) {
        return null;
    } else if (results.length === 1) {
        return results[0];
    } else {
        return results;
    }

}