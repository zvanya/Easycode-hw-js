// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом
//    “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть
//    объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”:
//    класс “Админ” и класс “Гость”.
//    У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
//    true/false, должно быть скрытым). Свойства определяются в момент вызова конструктора.
//     У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату
//    (например, одну неделю от момента регистрации).
//    У классов-наследников метод “получить информацию” должен так же содержать информацию о
//    дополнительных свойствах (“суперАдмин” и “срокДействия”)

/**
 *
 * @param {String} name
 * @param {String} reg
 * @constructor
 */
function User(name = "User1", reg = "1970-01-01") {
    this.name = name;
    this.reg = reg;
}
User.prototype.getInfo = function() {
    return {name: this.name, reg: this.reg};
};

/**
 *
 * @param {String} name
 * @param {String} reg
 * @constructor
 */
function Admin(name, reg) {
    User.apply(this, arguments);
    this._superAdmin = false;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.getInfo = function() {
    const info = User.prototype.getInfo.apply(this, arguments);
    info.superAdmin = this._superAdmin;
    return info;
};

/**
 *
 * @param {String} name
 * @param {String} reg
 * @param {String} validDate
 * @constructor
 */
function Guest(name, reg, validDate = "1 week") {
    User.apply(this, arguments);
    this.validDate = validDate;
}
Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

Guest.prototype.getInfo = function() {
    const info = User.prototype.getInfo.apply(this, arguments);
    info.validDate = this.validDate;
    return info;
};


const admin = new Admin("admin", "2019-01-01");
const guest = new Guest("guest", "2019-02-02", "2 week");
