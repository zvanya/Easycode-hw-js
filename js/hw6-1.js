// **************************************************************************************************************
// Зная структуру html, с помощью изученных
// методов получить (в консоль):

// 1. head
const head = document.head;
console.log(head);

// 2. body
const body = document.body;
console.log(body);

// 3. все дочерние элементы body и вывести их в консоль
const bodyChildren = body.children;
console.log(bodyChildren);

for (let i = 0; i < bodyChildren.length; i++) {
    console.log(bodyChildren[i].tagName);
}

for (let child of document.body.children) {
    console.log(child);
}

// 4. первый div и все его дочерние узлы
// 4a. вывести все дочерние узлы в консоль
const firstDiv = body.querySelector("div").childNodes;
console.log(firstDiv);

// 4b. вывести в консоль все дочерние узлы, кроме первого и последнего
for (let i = 1; i < firstDiv.length-1; i++) {
    console.log(firstDiv[i]);
}

const firstDivChildNodes = Array.prototype.slice.call(firstDiv);
console.log(firstDivChildNodes.filter((elem, index, arr) => index !== 0 && index !== arr.length - 1));

// **************************************************************************************************************
