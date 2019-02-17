// Helper functions
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isarray#Polyfill
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
// Helper functions end


// 1. Создать конструктор для производства автомобилей. Конструктор должен принимать марку
//    автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и
//    второй метод, который возвращает год производства машины (год текущий минус возраст
//    машины, использовать Date для получения текущего года)
//    var lexus = new Car(‘lexus’, 2);
//    lexus.получитьМарку(); // “Lexus”
//    lexus.получитьГодВыпуска(); // 2014 (2016-2);
//    Марка машины всегда должна возвращаться с большой буквы!

function Car(model = "_MODEL_", age = 0) {
    if (typeof (model) === "string") this.model = model;
    else this.model = "_MODEL_";
    
    this.age = !isNumeric(age) ? 0 : age;
    
    this.getModel = function() {
        return this.model.trim()[0].toUpperCase() + this.model.slice(1);
    };
    
    this.getProductionYear = function() {
        return (new Date()).getFullYear() - this.age;
    };
}

// 2. Написать конструктор, который умеет элементарно шифровать строки (например, сделать из
//    строки строку-перевертыш, или заменить все символы их цифровым представлением, или
//    любой другой метод). Конструктор при инициализации получает строку и имеет следующие
//    методы:
//     a. показать оригинальную строку
//     b. показать зашифрованную строку
//    Строки не должны быть доступны через this, только с помощью методов.

function StringEncoder(str = "") {
    
    let _str = "";
    
    if (typeof (str) === "string") _str = str;
    else if (isNumeric(str)) _str = str.toString();
    else _str = "";
    
    this.getString = function() {
        return _str;
    };
    
    this.getEncodeString = function() {
        return _str.split("").reverse().join("");
    };
}