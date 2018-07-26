## Функция наследование (extendClass) ##

До наступления эры Ecma 6 были очень популярны функции, которые
помогают разработчикам выполнить наследования не задумываясь
о том как оно работает, именно такой метод я вам и предлагаю реализовать

Пример кода
```javascript
function extendClass(Main, Parent) {
    // здесь ваш код наследования
}

function Animal() {
}

Animal.prototype.walk = function () {}


function Rabbit() {
}

// вызов функции, которая выполняет наследование
extendClass(Rabbit, Animal);

Rabbit.prototype.jump = function () {}

let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Animal);

console.log(typeof rabbit.walk === 'function');
console.log(typeof rabbit.jump === 'function');

```
