// 1. По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в
//    атрибуте data-text у кнопки.

const btnMsg = document.getElementById("btn-msg");
btnMsg.addEventListener("click", (e) => {alert(e.target.dataset.text);});

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши
//    покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

btnMsg.addEventListener("mouseenter", (e) => {e.target.style.cursor = "pointer"; e.target.classList.add("bg-red");});
btnMsg.addEventListener("mouseleave", (e) => {e.target.style.cursor = "auto"; e.target.classList.remove("bg-red")});

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

const sTag = document.getElementById("tag");
const sTagText = sTag.textContent;
document.addEventListener("click", (e) => {
    sTag.textContent = `${sTagText} ${e.target.tagName}`;
});

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item +
//    порядковый номер Li по списку, т.е Item 3, Item 4 и т.д

const ul = document.querySelector("ul");
const btnGenerate = document.getElementById("btn-generate");
btnGenerate.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(li);
});

// 5. Из проекта todos реализовать редактирование задачи. (На занятии в конце второй части было пояснение).



// 6. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none.
//    При клике на dropdown-item должен отображаться блок dropdown-menu который вложен
//    именно в тот dropdown-item на котором произошел клик. При повторном клике на этот же
//    dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item
//    уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.

let drDwnItem = Array.prototype.slice.call(document.querySelectorAll(".dropdown-item"));
let drDwnMenu = Array.prototype.slice.call(document.querySelectorAll(".dropdown-menu"));

drDwnMenu.forEach((item) => {
    item.addEventListener("click", (e) => {e.stopPropagation();});
});

drDwnItem.forEach((item) => {
    item.addEventListener("click", (e) => {
        let ulMenu, divMenu;
        switch (e.target.tagName) {
            case "SPAN":
                ulMenu = e.target.parentElement.parentElement;
                divMenu = Array.prototype.slice.call(ulMenu.querySelectorAll(".dropdown-menu")).filter((item) => {
                    return item.previousElementSibling.textContent !== e.target.textContent;
                });
                divMenu.forEach((div) => {div.classList.add("d-none")}); //на всякий случай, хотя в divMenu должен быть только один элемент
                e.target.parentElement.querySelector(".dropdown-menu").classList.toggle("d-none");
                break;
            case "LI":
                ulMenu = e.target.parentElement;
                divMenu = Array.prototype.slice.call(ulMenu.querySelectorAll(".dropdown-menu")).filter((item) => {
                    return item.previousElementSibling.textContent !== e.target.querySelector("span").textContent;
                });
                divMenu.forEach((div) => {div.classList.add("d-none")});
                e.target.querySelector(".dropdown-menu").classList.toggle("d-none");
                break;
        }
    });
});