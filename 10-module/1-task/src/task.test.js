describe("10-module-1-task", function() {

    it ('проверям удаление строки', function () {
        let table = new ClearedTable([{
            id: 1,
            name: 'Ilia',
            age: 25,
            salary: '1000',
            city: 'Petrozavods'
        }]);

        table.el.querySelector('a').dispatchEvent(new Event('click', {bubbles: true}));
        expect(table.el.querySelectorAll('tbody tr').length).toEqual(0);
    });

    it ('проверяем, что клик работает только по <a>', function () {
        let table = new ClearedTable([{
            id: 1,
            name: 'Ilia',
            age: 25,
            salary: '1000',
            city: 'Petrozavods'
        }]);

        table.el.querySelector('tbody tr').dispatchEvent(new Event('click', {bubbles: true}));
        expect(table.el.querySelectorAll('tbody tr').length).toEqual(1);
    });

    it ('провеяерм что при удалении, передаются данные об удаляемом объекте в метод onRemoved', function () {
        let info = {
            id: 1,
            name: 'Ilia',
            age: 25,
            salary: '1000',
            city: 'Petrozavods'
        };

        let table = new ClearedTable([ info ]);

        spyOn(table, 'onRemoved');
        table.el.querySelector('a').dispatchEvent(new Event('click', {bubbles: true}));

        expect(table.onRemoved).toHaveBeenCalled();
        expect(table.onRemoved).toHaveBeenCalledWith(1);
    });

});