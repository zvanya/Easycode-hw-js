// Деструктурирующее присваивание. Задачи.

// 1. Используя rest оператор и деструктуризацию, создать функцию, которая
//    принимает любое количество аргументов и возвращает объект,
//    содержащий первый аргумент и массив из остатка:
//    func(‘a’, ‘b’, ‘c’, ‘d’) →
//    {
//        first: ‘a’,
//        other: [‘b’, ‘c’, ‘d’]
//    }

function parseArrayToObj (...rest) {
    const [first, ...other] = rest;
    return {first, other};
}

function parseArrayToObj_v2 (...rest) {
    const [first] = rest;
    return {first, other: rest.slice(1)};
}

let obj = parseArrayToObj('a', 'b', 'c', 'd');
let {first: fst, other: r} = parseArrayToObj_v2('a', 'b', 'c', 'd'); //fst === "a", r === ['b', 'c', 'd']

// 2. Организовать функцию getInfo, которая принимает объект вида
//    { name: ..., info: { employees: ..., partners: [ … ] } }
//    и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две
//    компании из массива employees:
//    const organisation = {
//        name: 'Google',
//        info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing'] }
//    };
//    getInfo(organisation); →
//    Name: Google
//    Partners: Microsoft Facebook

function getInfo({name = "Unknown", info: {employees, partners}}) {
    // console.log(`Name: ${!name ? "Unknown" : name}`);
    console.log(`Name: ${name}`);
    console.log(`Partners: ${partners[0]}, ${partners[1]}`);
}

let organisation = {
    name: 'Google',
    info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing'] }
};
getInfo(organisation);

organisation = {
    info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing'] }
};
getInfo(organisation);