// 1. Найти параграф и получить его текстовое содержимое (только текст!)

let pText = document.body.querySelector("p").textContent;
console.log(`pText = ${pText}`);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию
//    (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
/**
 *
 * @param {node} node
 * @returns {object}
 */
const getNodeInfo = (node) => {
    if (!node) return false;

    // let nodeType;
    // switch (node.nodeType) {
    //     case 1:
    //         nodeType = "element node";
    //         break;
    //     case 3:
    //         nodeType = "text node";
    //         break;
    //     case 8:
    //         nodeType = "comment node";
    //         break;
    //     default:
    //         nodeType = "other type node";
    // }

    return {
        type: node.nodeType,
        name: node.nodeName,
        childNodesCount: node.childNodes.length
    };
};

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка:
//    getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
/**
 *
 * @param {element} ul
 * @returns {array}
 */
const getTextFromUl = (ul) => {
    if (!ul || ul.tagName !== "UL") return false;
    let aList = Array.prototype.slice.call(ul.querySelectorAll("a"));
    return aList.map((a) => {return a.textContent});
};

let ul = document.body.querySelector("ul");
let aList = getTextFromUl(ul);

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-”
//    (вложенные теги должны остаться). Конечный результат:
//    -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

// https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach

let pNode = document.body.querySelector("div article p");

let newP = "";
pNode.childNodes.forEach((node) => {
    newP += node.nodeType === 3 ? "-text-" : node.outerHTML;
});

pNode.innerHTML = newP;
