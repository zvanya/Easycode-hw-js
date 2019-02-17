// 1. Создать функцию, которая возвращает промис.
//    Функция принимает два аргумента - время, через которое промис должен выполниться,
//                                      значение, с которым промис будет выполнен.
//    function promiseCreator(...) {...}
//    const prom = promiseCreator(500, 'Ok!');
//    prom.then(console.log);
//    // Ok!

/**
 *
 * @param {Number} ms
 * @param {String} value
 */
function promiseCreator(ms, value) {
    return new Promise((res) => {
        setTimeout(() => {
            res(value);
        }, ms);
    });
}

// 2. Создать класс, который производит экземпляр со следующими свойствами:
//    - promise - промис, который создается во время запуска конструктора;
//    - reject - метод, при выполнении которого promise реджектится;
//    - resolve - метод, при выполнении которого promise резолвится.
//        class Prom {...}
//    const inst = new Prom();
//    inst.promise.then(data => console.log(data));
//    inst.resolve('test');
//    → test

class Prom {
    constructor(){
        this.promise = new Promise((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        })
    }
}

const inst = new Prom();
inst.promise
    .then(data => console.log(data));
inst.resolve("test");