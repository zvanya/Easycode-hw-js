// 1. Создать функцию, которая принимает два элемента.
//    Функция проверяет, является ли первый элемент родителем для второго:
//    isParent(parent, child);
//    isParent(document.body.children[0], document.querySelector('mark'));
//    // true так как первый див является родительским элементом для mark
//    isParent(document.querySelector('ul'), document.querySelector('mark'));
//    // false так ul НЕ является родительским элементом для mark

/**
 * isParent - Функция проверяет, является ли второй элемент потомком первого
 * @param {element}  parent
 * @param {element}  child
 * @returns {boolean}
 */

// Вариант 1
function isParent(parent, child) {
    
    if (child.parentElement === null) return false;
    
    if (child.parentElement === parent) {
        return true;
    } else {
        return isParent(parent, child.parentElement);
    }
}

// Вариант 2
// function isParent(parent, child) {
//
//     let newChild = child;
//
//     do {
//         if (newChild.parentElement === null) return false;
//
//         if (newChild.parentElement === parent) return true;
//
//         newChild = newChild.parentElement;
//     } while (true);
// }

let a;
a = isParent(document.body, document.querySelector('article'));
console.log(`isParent(parent, child) = ${a}`);
a = isParent(document.querySelector('ul'), document.querySelector('mark'));
console.log(`isParent(parent, child) = ${a}`);
a = isParent(document.body.children[0], document.querySelector('mark'));
console.log(`isParent(parent, child) = ${a}`);
a = isParent(document.querySelector('article'), document.body);
console.log(`isParent(parent, child) = ${a}`);


// 2. Получить список всех ссылок, которые не находятся внутри списка ul

let aList = Array.prototype.slice.call(document.querySelectorAll("a")).filter((elem) => elem.parentNode.tagName !== "LI");

// 3. Найти элемент, который находится перед и после списка ul

let ulBefor = document.querySelector("ul").previousElementSibling;
let ulAfter = document.querySelector("ul").nextElementSibling;

// 4. Посчитать количество элементов li в списке

let liCount = document.querySelector("ul").children.length;

// 5. В коде с занятия написать функцию по редактированию задачи.
// Файл todo_app.js строка 78

// 6. Подумать и улучшить функцию generateId();
// Вариант 1. Файл todo_app.js строка 54
const generateId = () => {
    const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    return "ssssssssss".replace(/s/g, () => uniqueValues[Math.floor(Math.random() * uniqueValues.length)]);
};

// Вариант 2
// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
// https://gist.github.com/jed/982883
// function generateId() {
//     return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
//         (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//     )
// }
