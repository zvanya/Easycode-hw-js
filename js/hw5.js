// Helper functions
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isarray#Polyfill
if (typeof Array.isArray === 'undefined') {
    Array.isArray = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// Helper functions end

// ******************* Функции высшего порядка ************************************************************************

// 1. Создать две функции и дать им осмысленные названия:
//    - первая функция принимает массив и колбэк (одна для всех вызовов)
//    - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
//
// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) → “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
//
// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки

function stringConversion(arr, callback) {
    
    let str = "New value: ";
    
    if (!Array.isArray(arr)) return false;
    
    for (let value of arr) {
        let newValue = callback(value);
        
        if (!newValue) return false;
        
        str += newValue;
    }
    
    if (str.slice(-2) === ", ") return str.substring(0, str.length - 2);
    
    return str;
}

function getUppFirstLetter(str) {
    
    if (typeof (str) !== "string") return false;
    
    // let newStr = str[0].toUpperCase();
    //
    // for (let i = 1; i < str.length; i++) {
    //     newStr += str[i];
    // }
    //
    // return newStr;
    
    return str[0].toUpperCase() + str.slice(1);
}

function getMultiplication10(value) {
    
    return isNumeric(value) ? value * 10 + ", " : false;
}

function getUserInfo(user) {
    
    if ("name" in user && "age" in user && typeof (user.name) === "string" && isNumeric(user.age))
        return user.name + " is " + user.age + ", ";
    else
        return false;
}

function getReverseString(str) {
    
    return typeof (str) === "string" ? str.split("").reverse().join("") + ", " : false;
}

let arr = ["my", "name", "is", "Trinity"];
console.log(stringConversion(arr, getUppFirstLetter));
arr = ["my", 15, "is", "Trinity"];
console.log(stringConversion(arr, getUppFirstLetter));

arr = [10, 20, 30];
console.log(stringConversion(arr, getMultiplication10));
arr = [10, "20", 30];
console.log(stringConversion(arr, getMultiplication10));
arr = [10, "20str", 30];
console.log(stringConversion(arr, getMultiplication10));

let users = [{age: 45, name: "Jhon"}, {age: 20, name: "Aaron"}];
console.log(stringConversion(users, getUserInfo));
users = [{age: 45, secondName: "Jhon"}, {age: 20, name: "Aaron"}];
console.log(stringConversion(users, getUserInfo));

arr = ["abc", "123"];
console.log(stringConversion(arr, getReverseString));
arr = ["abc", 123, "123"];
console.log(stringConversion(arr, getReverseString));

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым
//    аргументом массив (обязательно проверьте что передан массив) вторым аргументом callback
//    функция должна возвращать true или false в зависимости от результата вызова callback.
//    Callback должен принимать один элемент массива, его индекс в массиве и весь массив.

function every(arr, callback) {
    
    if (!Array.isArray(arr)) return false;
    
    let res = true;
    
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            res = false;
            break;
        }
    }
    
    return res;
}

function isGreater5(number) {
    return number > 5;
}

function isPositive(number) {
    return number > 0;
}

arr = [7, 12, 8, 32, 13];
console.log(`res = ${every(arr, isGreater5)}`);
arr = [11, 2, 13, 4, -3];
console.log(`res = ${every(arr, isGreater5)}`);
arr = [1, 12, 2, 32, 3];
console.log(`res = ${every(arr, isPositive)}`);
arr = [1, 12, 2, 32, -3];
console.log(`res = ${every(arr, isPositive)}`);

// ******************* Перебирающие методы ****************************************************************************

// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
//    каждый элемент которого будет хранить информацию о числе и его четности:
//    [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

function getArrayInfo(arr) {
    if (!Array.isArray(arr)) return false;
    
    return arr.map(function (value) {
        return {
            digit: value,
            odd: !!(value % 2)
        };
    });
}

console.log(getArrayInfo([1, 2, 3, 5, 8, 9, 10]));

// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

function isNoZeroContained(arr) {
    if (!Array.isArray(arr)) return 0;
    
    return !arr.some(function (value) {
        return value === 0;
    });
}

console.log(isNoZeroContained([12, 4, 50, 1, 0, 18, 40]));
console.log(isNoZeroContained([12, 4, 50, 1, 2, 18, 40]));
console.log(isNoZeroContained());

// 3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной
//    больше 3х букв. Если да - вернуть true

function checkElementLength(arr) {
    if (!Array.isArray(arr)) return 0;
    
    return arr.some(function (str) {
        return str.length > 3;
    });
}

console.log(checkElementLength(['yes', 'hello', 'no', 'easycode', 'what']));
console.log(checkElementLength(['yes', 'he', 'no', 'cod', 'wtf']));
console.log(checkElementLength());

// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения
//    в строке {буква: “a”, позиция_в_предложении: 1}:
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
//  {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
//  {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
// Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы.
// Например: [{char:"i",index: 1}, {char:"H",index:0}, {char:"!",index:2}] → “Hi!”
// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения строки

function compareObjects(a, b) {
    return a.index - b.index;
}

function getString(arr) {
    if (!Array.isArray(arr)) return 0;
    
    let sortedArr = arr.sort(compareObjects);
    
    return sortedArr.reduce(function (str, currObj) {
        // str += currObj.char;
        // return str;
        
        return str + currObj.char;
    }, "");
}


arr = [{char: "a", index: 12}, {char: "w", index: 8}, {char: "Y", index: 10}, {char: "p", index: 3}, {char: "p", index: 2},
    {char: "N", index: 6}, {char: " ", index: 5}, {char: "y", index: 4}, {char: "r", index: 13}, {char: "H", index: 0},
    {char: "e", index: 11}, {char: "a", index: 1}, {char: " ", index: 9}, {char: "!", index: 14}, {char: "e", index: 7}];

let str = getString(arr);
console.log(`string = ${str}`);

// ******************* Метод Sort *************************************************************************************

// 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
//    (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

function compareArrays(a, b) {
    return a.length - b.length;
}

function sortArray(arr) {
    if (!Array.isArray(arr)) return 0;
    // for (let elem of arr) {
    //     if (!Array.isArray(elem)) return false;
    // }
    
    return arr.sort(compareArrays);
}

console.log(sortArray([[14, 45], [1], ['a', 'c', 'd'], ""]));

// 2. Есть массив объектов:
//     [
//         {cpu: 'intel', info: {cores:2, cache: 3}},
//         {cpu: 'intel', info: {cores:4, cache: 4}},
//         {cpu: 'amd', info: {cores:1, cache: 1}},
//         {cpu: 'intel', info: {cores:3, cache: 2}},
//         {cpu: 'amd', info: {cores:4, cache: 2}}
//     ]
// Отсортировать их по возрастающему количеству ядер (cores).

function compareCpuObj(a, b) {
    return a.info.cores - b.info.cores;
}

function sortObjArr(arr) {
    if (!Array.isArray(arr)) return 0;
    
    return arr.sort(compareCpuObj);
}

arr = [{cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 5, cache: 4}},
    {cpu: 'amd', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 3, cache: 2}},
    {cpu: 'amd', info: {cores: 4, cache: 2}}];

newArr = sortObjArr(arr);

// 3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна
//    вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к
//    дорогим:
//     let products = [
//         {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//         {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//         {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//         {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
//     ];
//    filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

function filterCollection(products, min, max) {
    if (arguments.length < 3 || !Array.isArray(arr) || !isNumeric(min) || !isNumeric(max)) return 0;
    
    let filteredCollection;
    filteredCollection = products.filter(function (item) {
        return item.price >= min && item.price <= max;
    }).sort(function (a, b) {
        return a.price - b.price;
    });
    
    return filteredCollection;
}

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

let filtProd = filterCollection(products, 15, 30);