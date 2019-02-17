// Helper functions
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
// Helper functions end


// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
//    function Component(tagName) {
//        this.tagName = tagName || 'div';
//        this.node = document.createElement(tagName);
//    }
//    Пример вызова:
//        const comp = new Component('span');

class Component1 {
    constructor(tagName = "div") {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
}

// 2. Реализовать конструктор и методы в ES6 синтаксисе:
//    function Component(tagName) {
//        this.tagName = tagName || 'div';
//        this.node = document.createElement(tagName);
//    }
//    Component.prototype.setText = function (text) {
//        this.node.textContent = text;
//    };

class Component2 {
    constructor(tagName = "div") {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
    
    setText(text = "") {
        this.node.textContent = text;
    }
}

// 3. Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить,
//    вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки
//    текущего числа с которым производятся вычисления.

class Calc {
    constructor(value = 0) {
        this._value = value;
    }
    
    get value() { return Math.round(this._value * 100) / 100; }
    set value(value) { this._value = value; }
    
    plus(value = 0) {
        this._value += value;
    }
    
    minus(value = 0) {
        this._value -= value;
    }
    
    multiply(value = 0) {
        this._value *= value;
    }
    
    divide(value = 1) {
        this._value /= value;
    }
    
    pow(value = 1) {
        this._value = Math.pow(this._value, value);
    }
}


const c1 = new Calc(1);
