describe("4-module-1-task", function() {

    let friends = [
        {
            firstName: 'Artsiom',
            lastName: 'Mezin'
        },
        {
            firstName: 'Ilia',
            lastName: 'Kantor'
        },
        {
            firstName: 'Christopher',
            lastName: 'Michael'
        }
    ];

    it('функция должна возвращать HTML список', function() {
        let ul = makeFriendsList(friends);

        expect(ul && ul.constructor).toEqual(HTMLUListElement, 'Результат вызова функции не HTMLUListElement');
    });

    it('должно быть равно число элментов в списке и число объектов в массиве', function() {
        let ul = makeFriendsList(friends);
        let lis = ul && ul.querySelectorAll('li');

        expect(lis.length).toEqual(friends.length, 'Отличается длина списка и массива данных');
    });

    it (`проверяем содержимое списка`, function () {
        let ul = makeFriendsList(friends);
        let lis = ul && ul.querySelectorAll('li');

        lis.forEach(function (li, index) {
            let actualFirstName = li.innerHTML.includes(friends[index].firstName);
            let actualLastName = li.innerHTML.includes(friends[index].lastName);

            expect(actualFirstName, `Элемент номер ${index} не содержит firstName`);
            expect(actualLastName, `Элемент номер ${index} не содержит lastName`);
        });

    });





});