// This. Задачи.

// 1. Создать объект, который описывает ширину и высоту
//    прямоугольника, а также может посчитать площадь фигуры:
//    const rectangle = {width:..., height:..., getSquare:...};

let rectangle = {
    width: 0,
    height: 0,
    getSquare() {
        //TODO: проверка width и height на отрицательные значения
        //TODO: Хотя, width и height должны бы задаваться через setWidth и setHeight и там должны быть проверки,
        //TODO: а св-ва width и height должны быть закрыты для внешнего доступа
        return this.width * this.height;
    }
};

// 2. Создать объект, у которого будет цена товара и его скидка, а также
//    два метода: для получения цены и для расчета цены с учетом скидки:
//    const price = {
//        price: 10,
//        discount: '15%',
//        ...
//    };
//    price.getPrice(); // 10
//    price.getPriceWithDiscount(); // 8.5

let price = {
    price: 10,
    discount: "15%",
    getPrice() {
       return this.price;
    },
    getPriceWithDiscount() {
        //TODO: проверка на то, что discount конвертируется в число и цена не отрицательная
        return this.price * (100 - parseFloat(this.discount)) / 100;
    }
};

// 3. Создать объект, у которого будет поле высота и метод "увеличить высоту на один".
//    Метод должен возвращать новую высоту:
//    object.height = 10;
//    object.inc(); // придумать свое название для метода
//    object.height; // 11;

let house = {
    height: 10,
    addFloor() {
        //TODO: проверка, что высота не отрицательная
        return ++this.height;
    }
};

// 4. Создать объект "вычислитель", у которого есть числовое свойство
//    "значение" и методы "удвоить", "прибавить один", "отнять один".
//    Методы можно вызывать через точку, образуя цепочку методов:
//    const numerator = {
//        value: 1,
//        double: function () {...},
//        plusOne: function () {...},
//        minusOne: function () {...},
//    }
//    numerator.double().plusOne().plusOne().minusOne();
//    numerator.value // 3

let numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function() {
        ++this.value;
        return this;
    },
    minusOne: function() {
        --this.value;
        return this;
    }
};

// 1. Создать объект с розничной ценой и количеством продуктов.
//    Этот объект должен содержать метод для получения общей стоимости
//    всех товаров (цена * количество продуктов)

let products = {
    price: 15,
    quantity: 10,
    getCost() {
        return this.price * this.quantity;
    }
};

// 2. Создать объект из предыдущей задачи. Создать второй объект,
//    который описывает количество деталей и цену за одну деталь.
//    Для второго объекта нужно узнать общую стоимость всех деталей, но
//    нельзя создавать новые функции и методы.
//    Для этого “позаимствуйте” метод из предыдущего объекта.

let potatos = {
  price: 5,
  quantity: 9
};

let potatosCost = products.getCost.call(potatos);

// 3. Даны объект и функция:
//    let sizes = {width: 5, height: 10},
//    getSquare = function () {return this.width * this.height};
//
//    Не изменяя функцию или объект, получить результат функции
//    getSquare для объекта sizes

let sizes = {width: 5, height: 10};
getSquare = function () {return this.width * this.height};

let square = getSquare.call(sizes);

// 4.
// let element = {
//     height: 25,
//     getHeight: function () {return this.height;}
// };
// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined
//
// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);