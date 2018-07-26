## Функция processGenerator(fn) ##

Написать функцию *processGenerator*, которая будет принимать на
вход функцию генератор и выполнять в ней асинхронный код.

```javascript

function request(url) {

    return new Promise(resolve => {
        setTimeout(() => resolve('done-' + url));
    });

}

function * asyncFunction () {
    let user = yield request('hello');
    let profile = yield request('world);

    return user + ':' + profile;
}


processGenerator(asyncFunction())
    .then(result => console.log(result)); // done-hello:done-world
```

!! Важным условием является то, что все асинхронные функции, должны возвращать Promise.