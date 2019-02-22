// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию”
//    (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов
//    (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
//    “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих
//    экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод
//    “получить информацию” должен учитывать и добавленное вами новое свойство.
//     Задача на переопределение метода у экземпляров класса.

function Furniture(name = "table", price = 70) {
    this.name = name;
    this.price = price;
}
Furniture.prototype.getInfo = function() {
    return `name: ${this.name}, price: ${this.price}`;
};


function OfficeFurniture(name, price, isTableExist = false) {
    Furniture.apply(this, arguments);
    this.isTableExist = isTableExist;
}
OfficeFurniture.prototype.constructor = OfficeFurniture;
OfficeFurniture.prototype.getInfo = function () {
    console.log(`${Furniture.prototype.getInfo.apply(this, arguments)}, table: ${this.isTableExist}`);
};


function HomeFurniture(name, price, isChairExist = true) {
    Furniture.apply(this, arguments);
    this.isChairExist = isChairExist;
}
HomeFurniture.prototype.constructor = HomeFurniture;
HomeFurniture.prototype.getInfo = function () {
    console.log(`${Furniture.prototype.getInfo.apply(this, arguments)}, chair: ${this.isChairExist}`);
};


const f1 = new OfficeFurniture("t1", 100, true);
f1.getInfo();

const f2 = new HomeFurniture("t2", 150, false);
f2.getInfo();
