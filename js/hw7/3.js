// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
//    <ul>
//      <li><a href="#">Link1</a></li>
//      ...
//      <li class=”new-item”>item 5</li>
//      <li class=”new-item”>item 6</li>
//    </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

let ul = document.body.querySelector("ul");
let liCount = ul.children.length;
let arrLi = [
    document.createElement("li"),
    document.createElement("li"),
    document.createElement("li"),
    document.createElement("li"),
];

arrLi.forEach((li) => {
    li.classList.add("new-item");
    li.textContent = "item " + (liCount++ + 1);
    ul.appendChild(li);
});

// 2. Создать элементы strong и добавить их в конец ссылок, которые находятся внутри списка ul (в
//    каждую ссылку один - strong).

let liA = document.body.querySelectorAll("li a");

//если, как было в первоначальном задании, то решение такое:
liA.forEach((a) => {
    let strong = document.createElement("strong");
    strong.textContent = " strong";
    a.appendChild(strong);
});

//если надо было текст лишек поместить внутрь тега strong, то решение такое:
liA.forEach((a) => {
    a.innerHTML = `<strong>${a.textContent}</strong>`;
});

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте
//    сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

let myImg = document.createElement("img");
myImg.src = "http://placekitten.com/g/200/300";
myImg.alt = "эти милые котейки";

//document.body.insertBefore(myImg, document.body.firstChild);
document.body.prepend(myImg);

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент
//    установить класс green

let mark = document.body.querySelector("mark");
mark.classList.add("green");
// mark.textContent += "green"; // так делать некорректно, потому как перезатрется html разметка (если она есть)
//mark.appendChild(document.createTextNode("green"));
mark.append("green");

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let liList = document.body.querySelectorAll("ul li");

let liListSort = Array.prototype.slice.call(liList).sort((liNext, liPrev) => {
    if (liPrev.textContent > liNext.textContent) return 1;
    if (liPrev.textContent < liNext.textContent) return -1;
    return 0;
});

ul.innerHTML = "";

liListSort.forEach((li) => {
    ul.appendChild(li);
});