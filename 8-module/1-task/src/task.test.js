describe("8-module-1-task", function() {

    it ('проверям что при создании таблицы содержит корректный head', function () {
        let table = new SortableTable([{
            name: 'Ilia',
            age: 25,
            salary: '1000',
            city: 'Petrozavods'
        }]);

        expect(table.el.querySelectorAll('thead').length).toEqual(1);
        expect(table.el.querySelectorAll('thead td').length).toEqual(4);
    });

    it (`проверяем, что при создании таблица создает элементы в том порядке
    в котором они перечислены в передаваемом массиве`, function () {

        let table = new SortableTable([
            {
                name: 'Artem',
                age: 30,
                salary: 10000,
                city: 'London'
            },
            {
                name: 'Vasiliy',
                age: 170,
                salary: 34,
                city: 'Moscow'
            },
            {
                name: 'Ilia',
                age: 25,
                salary: 1000,
                city: 'Petrozavods'
            }
        ]);

        let rows = table.el.querySelectorAll('tbody tr');

        expect(rows.length).toEqual(3);
        expect(rows[0].cells[0].innerText).toEqual('Artem');
        expect(rows[1].cells[0].innerText).toEqual('Vasiliy');
        expect(rows[2].cells[0].innerText).toEqual('Ilia');

    });

    it ('провяерм сортировку имени по алфавитному порядку', function () {
        let table = new SortableTable([
            {
                name: 'Artem',
                age: 30,
                salary: 10000,
                city: 'London'
            },
            {
                name: 'Ilia',
                age: 25,
                salary: 1000,
                city: 'Petrozavods'
            }
        ]);

        table.sort(0);

        let rows = table.el.querySelectorAll('tbody tr');

        expect(rows.length).toEqual(2);
        expect(rows[0].cells[0].innerText).toEqual('Artem');
        expect(rows[1].cells[0].innerText).toEqual('Ilia');
    });


    it ('провяерм сортировку имени в обратном порядке', function () {
        let table = new SortableTable([
            {
                name: 'Artem',
                age: 30,
                salary: 10000,
                city: 'London'
            },
            {
                name: 'Ilia',
                age: 25,
                salary: 1000,
                city: 'Petrozavods'
            }
        ]);

        table.sort(0, true);

        let rows = table.el.querySelectorAll('tbody tr');

        expect(rows.length).toEqual(2);
        expect(rows[0].cells[0].innerText).toEqual('Ilia');
        expect(rows[1].cells[0].innerText).toEqual('Artem');
    });

    it ('провяерм сортировку зарпалты по возрастарнию', function () {
        let table = new SortableTable([
            {
                name: 'Artem',
                age: 30,
                salary: 10000,
                city: 'London'
            },
            {
                name: 'Ilia',
                age: 25,
                salary: 100,
                city: 'Petrozavods'
            }
        ]);

        table.sort(2);

        let rows = table.el.querySelectorAll('tbody tr');

        expect(rows.length).toEqual(2);
        expect(rows[0].cells[0].innerText).toEqual('Ilia');
        expect(rows[1].cells[0].innerText).toEqual('Artem');
    });

});