## Качество кода, тесты, объекты ##

### Чтение ###

* [Объекты как ассоциативные массивы](http://learn.javascript.ru/object)
* [Объекты: перебор свойств](http://learn.javascript.ru/object-for-in)
* [Объекты: передача по ссылке](http://learn.javascript.ru/object-reference)
* [Преобразование объектов: toString и valueOf](https://learn.javascript.ru/object-conversion)

### Дополнительно ###

* [Деструктуризация](https://learn.javascript.ru/destructuring)
* [Управление памятью](http://learn.javascript.ru/memory-management)

### Задачи ###

* Задачи на методы объекта
  * [Первый объект](https://learn.javascript.ru/task/hello-object)
  * Написать функцию isObject (ради `typeof null === 'object'`)
  * [Определите, пуст ли объект](https://learn.javascript.ru/task/is-empty)
  * [Умножьте численные свойства на 2](https://learn.javascript.ru/task/multiply-numeric)
  * [Безопасный доступ к полю объекта](https://marinatells.github.io/playground/#-L8W1APXHe1kgBcMzDPI)

* Передача по ссылке
  * Функция swap, которая меняет местами значения полей двух объектов
  * [Вывести односвязный список](https://learn.javascript.ru/task/output-single-linked-list)

* self/that/this
  * [Поправить метод](https://plnkr.co/edit/qDqXkkkRShKRPbqPvyw9?p=info)
  * [user1.sayHello(user2)](https://marinatells.github.io/playground/#-L94CJUjXhOtZTqP1lEn);

* Реализовать объект user с методами isValid, login, sayHello (по сути доделать [этот пример](https://plnkr.co/edit/qDqXkkkRShKRPbqPvyw9?p=info))

* Сравнение объектов (deepEqual с использованием shallowEqual)
  * [Реализовать deepEqual](http://burlakilia.github.io/playground/#-KzeP63A3JH2s8E6qpg3)
  * Реализовать `Object.assign`
  * [Реализовать deepClone](http://burlakilia.github.io/playground/#-Kzh62GPKy2cciyO_21x) (для тестов будет нужен deepEqual)
  * [Пример решения](https://plnkr.co/edit/qGkhVdlsCN3nQLkDpdZu?p=preview)
  * Со звездочкой: посчитать глубину рекурсии функции deepEqual
    * варианты: через глобальную переменную, через передачу аргумента, через deepClone.depth = 0

* Преобразование объектов к примитивным типам
  * Сложить два объекта друг с другом, со строкой, с числом (Symbol.toPrimitive, this)
  * [Сумма произвольного количества скобок](https://learn.javascript.ru/task/sum-many-brackets)

### Итог ###

Модель юзера через объект с валидацией