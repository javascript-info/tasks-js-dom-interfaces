## Функция showSalary(data,age) ##

Функция обрабатывает данные и выводит зарплаты пользователей, у которых
возраст больше чем переданный вторым параметром.

Каждый пользователь представлен следующими обязательными полям

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