'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavods'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');

    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    thead.innerHTML = `
         <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
         </tr>
    `;

    this.el.appendChild(thead);
    this.el.appendChild(tbody);

    function render() {
        tbody.innerHTML = items.map(item => {
            let row = '';

            for (let key in item) {
                row += `<td>${item[key]}</td>`;
            }

            return `<tr>${row}</tr>`;
        }).join('');
    }

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {

        items = items.sort((a, b) => {
            let keyA = Object.keys(a)[column];
            let keyB = Object.keys(b)[column];

            if (desc) {
                return a[keyA] < b[keyB];
            } else {
                return a[keyA] > b[keyB]
            }

        });

        render();
    };

    render();
}

