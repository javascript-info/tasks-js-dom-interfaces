## Функция showSalary(data,age) ##

Функция обрабатывает данные и выводит зарплаты пользователей, у которых
возраст моложе или равен второму параметру.

Данные `data` представляют собой массив из пользоватлей, где
каждый пользователь представлен объектом, содержащим следующие обязательные поля:

```json
{
        "balance": "$1,825.65",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": "Golden Branch",
        "gender": "male",
        "greeting": "Hello, Golden Branch! You have 7 unread messages.",
        "favoriteFruit": "banana"
}
```

Реализуйте функцию, которая будет возвращать список пользователей в формате


```text
Golden Branch, $1,825.65
Duncan Randall, $1,490.15
```