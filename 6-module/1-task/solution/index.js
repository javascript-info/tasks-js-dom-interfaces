'use strict';

const MS_IN_DAY = 86400000;

function daysInMonth (month, year) {

    if (month < 0) {
        // Если по вычеслениям нам нужен месяц из предыдущего года
        year -= 1;
        month = 11 + month;
    }

    return new Date(year, month, 0).getDate();
}

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
    let cursor = new Date(Date.now());

    let hours = dt.getUTCHours();
    let minutes = dt.getUTCMinutes();
    let sec = dt.getUTCSeconds();

    let days = when.getUTCDate() - cursor.getUTCDate();
    let months = when.getUTCMonth() - cursor.getUTCMonth();
    let years = when.getUTCFullYear() - cursor.getUTCFullYear();

    let result = [];

    if (sec) {
        result.push(`${sec} сек.`);
    }

    if (minutes) {
        result.push(`${minutes} мин.`);
    }

    if (hours) {
        result.push(`${hours} ч.`);
    }

    if (days > 0) {
        result.push(`${days} д.`);
    } else if (days) {
        // TODO идея в том, что мы можем находится в середине месяца
        // и у нас будет не целый месяц а всего лишь половина
        days *= -1;
        result.push(`${daysInMonth(when.getUTCMonth() - 1, when.getUTCFullYear()) - days} д.`);
        months -= 1;
    }

    if (months > 0) {
        result.push(`${months} мес.`);
    } else {
        // если конец года
        months = 11 + months;
        years -= 1;
    }

    if (years > 0) {
        result.push(`${years} г.`)
    }

    return result.reverse().join(', ');
}