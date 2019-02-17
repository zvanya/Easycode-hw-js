// Helper functions
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isarray#Polyfill
if (typeof Array.isArray === 'undefined') {
    Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getRandomInt(min, max) {
    if (isNumeric(min) && isNumeric(max))
        return Math.floor(Math.random() * (max - min)) + min;
    else
        return false;
}
// Helper functions end

// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать
//    их произведение: multiply(1,2,3) = 6 (1*2*3)
//    Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
    const err = [0, "one of arguments is't a number"];
    let res = 1;
    
    if (!arguments.length) return err[0];

    for (let elem of arguments) {
        if (!isNumeric(elem)) {
            return err[1];
        } else if (elem === 0){
            return 0;
        } else {
            res *= elem;
        }
        
        // либо еще вариант (мне больше нравится):
        // if (isNumeric(elem) && elem !== 0) {
        //     res *= elem;
        // } else if (!isNumeric(elem)){
        //     return err[1];
        // } else {
        //     return 0;
        // }
    }
    
    return res;
}

console.log("multiply(1, 2, 3, 4, 5) = " + multiply(1, 2, 3, 4, 5));
console.log("multiply(-1, 2, 3, 4, 5) = " + multiply(-1, 2, 3, 4, 5));
console.log("multiply(1, 2, 3, 4, \"5\") = " + multiply(1, 2, 3, 4, "5"));
console.log("multiply() = " + multiply());
console.log("multiply(1, 2, 3, 4, \"5str\") = " + multiply(1, 2, 3, 4, "5str"));

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
//    reverseString(‘test’) // “tset”.

function reverseString(str) {
    
    return typeof(str) === "string" ? str.split("").reverse().join("") : false;
    
    // if (typeof(str) !== "string") return false;
    //
    // return str.split("").reverse().join("");
}

console.log("reverseString(\"tset\") = " + reverseString("tset"));
console.log("reverseString(547) = " + reverseString(547));
console.log("reverseString() = " + reverseString());

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
//    где каждый символ разделен пробелом и заменен на юникод-значение символа:
//    getCodeStringFromText(‘hello’) // “104 101 108 108 111”
//    подсказка: для получения кода используйте специальный метод

function getCodeStringFromText(str) {
    const err = [-1, -2];
    let arr = [];
    
    if (typeof(str) !== "string") return err[0];
        
    if (!str.length) return err[1];
    
    for (let i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i));
    }

    return arr.join(" ");
}

console.log("getCodeStringFromText(\"hello\") = " + getCodeStringFromText("hello"));
console.log("getCodeStringFromText(\"hello \") = " + getCodeStringFromText("hello "));
console.log("getCodeStringFromText(5) = " + getCodeStringFromText(5));
console.log("getCodeStringFromText(\"\") = " + getCodeStringFromText(""));

// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить, что
//    число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с
//    переданным числом если они совпали то возвращает “Вы выиграли”, если нет то “Вы не угадали,
//    ваше число 8, а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function guessNumber(n) {
    let randomNumber;
    
    if (!isNumeric(n)) return false;

    if (n <= 0 || n > 10) return `Вы ввели ${n}. Введите число в диапазоне от 1 до 10`;

    if (n % 1 !== 0) return "Введите целое число!";
    
    randomNumber = getRandomInt(1, 11);
    
    if (n === randomNumber) {
        return "Вы выиграли!";
    } else {
        return `Вы не угадали. Ваше число: ${n}, а выпало число ${randomNumber}.`;
    }
}

console.log("guessNumber(5) = " + guessNumber(5));
console.log("guessNumber(\"5\") = " + guessNumber("5"));
console.log("guessNumber(10) = " + guessNumber(10));
console.log("guessNumber(5.1) = " + guessNumber(5.1));
console.log("guessNumber(0) = " + guessNumber(0));
console.log("guessNumber(-5) = " + guessNumber(-5));
console.log("guessNumber(15) = " + guessNumber(15));
console.log("guessNumber(\"5str\") = " + guessNumber("5str"));

// 5. Создать функцию, которая принимает число N и возвращает массив, заполненный числами от 1 до N:
//    getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(n) {
    const err = ["Вы ввели не число. Введите число больше нуля", "Число должно быть больше нуля"];
    let arr = [];
    
    if (!isNumeric(n)) return err[0];

    if (n <= 0) return err[1];

    for (let i = 0; i < n; i++) {
        arr.push(i+1);
    }
    
    return arr;
}

console.log("getArray(11) = " + getArray(11));
console.log("getArray(0) = " + getArray(0));
console.log("getArray(-11) = " + getArray(-11));
console.log("getArray(\"7\") = " + getArray("7"));
console.log("getArray(\"7str\") = " + getArray("7str"));

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
//    doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(arr) {
    
    return Array.isArray(arr) ? arr.concat(arr) : false;
    
    // let newArr = arr.slice(0, arr.length);
    //
    // for (let elem of arr) {
    //     newArr.push(elem);
    // }
    // return newArr;
}

console.log("doubleArray([1, 2, 3]) = " + doubleArray([1, 2, 3]));
console.log("doubleArray([1, 2, \"35\", null]) = " + doubleArray([1, 2, "35", null]));
console.log("doubleArray() = " + doubleArray());

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого
//    массива первый элемент, а возвращает массив из оставшихся значений:
//    changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
    
    let arr = [];
    
    if (!arguments.length) return 0;
    
    for (let elem of arguments) {
        if (!Array.isArray(elem)) return false;
    
        let tmpArr = [];
    
        tmpArr = elem.concat();
        tmpArr.shift();
    
        arr.push(tmpArr);
    }
    
    return arr;
}

console.log(`changeCollection([1, 2, 3], [4, 5, 6], [7, 8, 9]) = ${changeCollection([1, 2, 3], [4, 5, 6], [7, 8, 9])}`);
console.log("changeCollection([\"1\", 2, 3], [4, \"5\", 6], [\"7\", \"8\", 9]) = " + changeCollection(["1", 2, 3], [4, "5", 6], ["7", "8", 9]));
console.log("changeCollection([1, 2, 3], 4, 5, 6, [7, 8, 9]) = " + changeCollection([1, 2, 3], 4, 5, 6, [7, 8, 9]));
console.log(`changeCollection([1, 2, 3], ["a", "b", "c"]) = ${changeCollection([1, 2, 3], ["a", "b", "c"])}`);
console.log(`changeCollection([1, 2, 3]) = ${changeCollection([1, 2, 3])}`);
console.log("changeCollection() = " + changeCollection());

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и
//    значение на которое хочу проверять. Проверять, что все аргументы переданы. Возвращать новый
//    массив с пользователями соответсвующими указанным параметрам.
//    funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

function getUsers(users, property, value) {
    
    if (arguments.length < 3 || !Array.isArray(users) || typeof(property) !== "string") return false;
    
    let newUsers = [];
    
    for (let user of users) {
        if (property in user && user[property] === value) { // здесь можно сделать  нестрогое сравнение user[property] == value, чтоб при property = "age" и value = 24 поиск отрабатывал корректно
            newUsers.push(user);
        }
    }
    
    return newUsers;
}

let users = [
    {name: "Denis", age: "25", gender: "male"},
    {name: "Yura", age: "25", gender: "male"},
    {name: "Sasha", age: "23", gender: "male"},
    {name: "Tanya", age: "24", gender: "female"},
    {name: "Ivan", age: "21", gender: "male"},
    {name: "Anya", age: "24", gender: "female"},
];

let property = "age";
let value = "24";
let newUsers = getUsers(users, property, value);
let newUsers2 = getUsers(users, "");
let newUsers3 = getUsers(users, "", "");