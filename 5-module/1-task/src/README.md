## Функция highlight##

Напишите функцию highlight, которая для каждой строки tr таблицы:
- Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status
- Проставит аттрибут hidden, если такого атрибута нет вообще
- Проставит класс male/female, в зависимости от содержимого ячекйки Gender
- Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18

```javascript
'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
}
```

Таблицу, которую нужно расскрашивать, можно посмотреть в файле index.html.

