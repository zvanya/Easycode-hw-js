// ****************************************************************************************************************************************
// 1. Записать в виде switch case следующее условие:

// if (a === "block") {
//     console.log("block")
// } else if (a === "none") {
//     console.log("none")
// } else if (a === "inline") {
//     console.log("inline")
// } else {
//     console.log("other")
// }

// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

let a = "none";

switch (a) {
    case "block" :
        console.log("block");
        break;
    case "none" :
        console.log("none");
        break;
    case "inline" :
        console.log("inline");
        break;
    default :
        console.log("other");
}

// ****************************************************************************************************************************************
// 2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора. Задачи перечисляю ниже
//
// 2.1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let visibility = "hidden";
visibility = visibility === "hidden" ? "visible" : "hidden";

// 2.2. Используя if, записать условие:
//       если переменная равна нулю, присвоить ей 1;
//       если меньше нуля - строку “less then zero”;
//       если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let k = 3;
k === 0 ?
    k = 1 :
    k < 0 ?
        console.log("less then zero") : k *= 10;

// 2.3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
//       Написать условие если возраст машины больше 5 лет то нужно свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};

car.needRepair = car.age > 5 ? ( console.log("Need Repair"), true ) : false;

// ****************************************************************************************************************************************
// 3.1 На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
//     будут в верхнем регистре. Использовать for или while.

let line = "i am in the easycode";
let newLine = "";

for (let i = 0; i < line.length; i++) {
    if (i === 0 || line[i - 1].charCodeAt(0) === 32) {
        newLine += line[i].toUpperCase();
    } else {
        newLine += line[i];
    }
}

console.log(line);
console.log(newLine);

// 3.2 Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй и т.д.)

let s1 = "tseb eht ma i";
let s2 = "";

for (let i = s1.length-1; i >= 0 ; i--) {
    s2 += s1[i];
}

console.log(s2);

// 3.3 Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1.
//     С помощью циклов вычислить факториал числа 10. Использовать for of.

// ----------- w/o array. for -----------
let n = 10;
let f = 1;

for (let i = 2; i <= n ; i++) {
    f = f * i;
}
console.log(`${n}! = ${f}`);

// ----------- array. for of ------------ https://learn.javascript.ru/array
let numbers = [];
let factorial = 1;
for (let i = 0; i < n; i++) {
    numbers[i] = i + 1;
}

for (let n of numbers) {
    factorial = factorial * n;
}
console.log(`factorial = ${factorial}`);

// 3.4 На основе строки “JavaScript is a pretty good language” сделать новую строку,
//     где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let str = " JavaScript  is  a pretty good   language   ";
let newStr = "";

if (str[0] !== " ") {
    newStr += str[0].toUpperCase();
}

for (let i = 1; i < str.length; i++) {
    if (str[i] !== " " && str[i-1] === " ") {
        newStr += str[i].toUpperCase();
    } else if (str[i] !== " ") {
        newStr += str[i];
    }
}

console.log(str);
console.log(newStr);

// 3.5 Найти все нечетные числа от 1 до 15 включительно и вывести их в консоль. Использовать for of.

// ----------- w/o array. for -----------
let min = 1;
let max = 15;

for (let i = min; i <= max ; i++) {
    if (i % 2) console.log(i);
}

// ----------- array. for of ------------ https://learn.javascript.ru/array
let arr = [];
let newArr = [];

for (let i = 0; i < 15; i++) {
    arr[i] = i + 1;
}

for (let item of arr) {
    if (item % 2) newArr.push(item);
}

console.log(newArr);

// 3.6 Дан объект:
//     let list = {
//         name: "denis",
//         work: "easycode",
//         age: 29
//     }
//     Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
    name: "denis",
    work: "easycode",
    age: 29
};

for (let key in list) {
    if (typeof(list[key]) === "string") {
        list[key] = list[key].toUpperCase();
    }
}
console.log(list);
