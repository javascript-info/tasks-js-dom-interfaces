## Компонент Сортируемая табилца (SortableTable) ##

В этом задании мы вам предлагаем сделать компонент, который реализует
сортируемую таблицу для заранее опредленной структуры данных.

Пример структуры:
```javascript
let rows = [
    {
        name: 'Ilia',
        age: 25,
        salary: 1000,
        city: 'Petrozavodsk'
    },
    {
        name: 'Vasya',
        age: 14,
        salary: 1500,
        city: 'Moscow'
    }
];
```

Для успешного прохождения тестов, вам нужно поддержать следующую структуру в html:
```html
<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ilia</td>
            <td>25</td>
            <td>1000</td>
            <td>Petrozavodsk</td>
        </tr>
        ...
    </tbody>
</table>
```

Данный компонент предпологается использовать следующим образом:
```javascript
let table = new SortableTable(rows);
let container = document.querySelector('.result');

container.appendChild(table.el);

table.sort(0); // Отсортирует созданую таблицу по первой колонке (Name)
table.sort(0, true); // Отсортирует созданую таблицу по первой колонке (Name) в обратном порядке
```

PS в самом простом варианте эту задачу можно решить без стилей и кастомизации,
но для правктики рекомендуется разметить это таблицу в соответствии с БЭМ и
привести ее в порядок с помощью CSS.