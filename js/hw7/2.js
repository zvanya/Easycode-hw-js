let body = document.body;

// 1. Найти в коде список ul и добавить класс “list”

body.querySelector("ul").classList.add("list");

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

body.querySelector("ul ~ a").id = "link";

// 3. На li через один (начиная с самого первого) установить класс “item”

body.querySelectorAll("ul li").forEach((li, i) => {
    if (!!!(i%2)) {
        li.classList.add("item");
    }
});

// 4. На все ссылки в примере установить класс “custom-link”

body.querySelectorAll("a").forEach((a) => {a.classList.add("custom-link")});