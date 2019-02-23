// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию”
//    (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов
//    (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
//    “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих
//    экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод
//    “получить информацию” должен учитывать и добавленное вами новое свойство.
//     Задача на переопределение метода у экземпляров класса.

/**
 *
 * @param {String} name
 * @param {Number} price
 * @constructor
 */
function Furniture(name = "table", price = 70) {
    this.name = name;
    this.price = price;
}
Furniture.prototype.getInfo = function() {
    return {name: this.name, price: this.price};
};


const officeFurniture = new Furniture('OfficeTable', 75);
officeFurniture.isTableExist = true;

homeFurniture.getInfo = function() {
    const info = Furniture.prototype.getInfo.call(this);
    info.isTableExist = this.isTableExist;
    
    return info;
};

const homeFurniture = new Furniture('Chair', 35);
homeFurniture.isChairExist = true;

homeFurniture.getInfo = function() {
    const info = Furniture.prototype.getInfo.call(this);
    info.isChairExist = this.isChairExist;
    
    return info;
};
