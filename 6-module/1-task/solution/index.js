'use strict';

const MS_IN_DAY = 86400000;

/**
 * Функция возвращает строкой, сколько времени осталоьс до события
 * @param {Date} when - дата события
 * @return {string}
 */
function getBeforeTime(when) {
    let rest = when - Date.now();

    if (rest <= 0) {
        return 'событие завершилось';
    }

    let dt = new Date(rest);
    let years = dt.getFullYear() - 1970;
    let month = dt.getMonth();
    let days = dt.getUTCDate();
    let hours = dt.getUTCHours();
    let minutes = dt.getUTCMinutes();
    let sec = dt.getUTCSeconds();

    let result = [];

    if (rest <= MS_IN_DAY) {
        days -= 1;
    }

    if (years) {
        result.push(`${years} г.`)
    }

    if (month) {
        result.push(`${month} мес.`);
    }

    if (days) {
        result.push(`${days} д.`);
    }

    if (hours) {
        result.push(`${hours} ч.`);
    }

    if (minutes) {
        result.push(`${minutes} мин.`);
    }

    if (sec) {
        result.push(`${sec} сек.`);
    }

    return result.join(', ');
}