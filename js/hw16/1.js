// 1. Есть класс Planet
//      function Planet(name) {
//          this.name = name;
//          this.getName = function () {
//              return 'Planet name is ' + this.name;
//          }
//      }
//
//    Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
//    принимать, кроме name, название спутника (satelliteName). Переопределите метод
//    getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
//    дополнительный текст 'The satellite is' + satelliteName.
//    Например:
//     var earth = new PlanetWithSatellite('earth', 'moon');
//     earth.getName(); // 'Planet name is earth. The satellite is moon’


function Planet(name = "Mars") {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatellite(name, satelliteName = "satt1") {
    Planet.apply(this, arguments);

    this.satelliteName = satelliteName;
    let parentGetName = this.getName;
    
    this.getName = function () {
        return `${parentGetName.call(this)}. The satellite is ${this.satelliteName}`;
    }
}

var earth = new PlanetWithSatellite('earth', 'moon');

earth.getName();