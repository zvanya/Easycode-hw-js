// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей,
//    метод “получить количество этажей” и метод “установить количество этажей”).
//    Создайте наследников этого класса:
//        классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование
//    У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество
//    этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
//    У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить
//    количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 *
//    количествоМагазинов}
//    От каждого класса создать экземпляр (дом, торговый центр)

function Building(name = "emptyName", floorsCount = 10) {
    this.name = name;
    this.floorsCount = floorsCount;
    
    this.getFloorsCount = function () {
        return this.floorsCount;
    };
    
    this.setFloorsCount = function (count) {
        this.floorsCount = count;
    };
}

function House(name, floorsCount, flatPerFloor = 1) {
    Building.apply(this, arguments);
    this.flatPerFloor = flatPerFloor;
    
    this.getFloorsCount = function() {
        return {floors: this.floorsCount, flats: this.floorsCount * this.flatPerFloor};
    }
}

function Plaza(name, floorsCount, shopPerFloor = 1) {
    Building.apply(this, arguments);
    this.shopPerFloor = shopPerFloor;
    
    this.getFloorsCount = function() {
        return {floors: this.floorsCount, shops: this.floorsCount * this.shopPerFloor};
    }
}


const house = new House("house1", 5, 9);
const plaza = new Plaza("plaza1", 3, 11);