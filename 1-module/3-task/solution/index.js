'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let segments = str.match(/(-|\+)?[\d]+(\.[\d]+)?/ig) || [];

    segments = segments.map(str => parseFloat(str));

    return {
        min: Math.min(...segments),
        max: Math.max(...segments)
    };

}

