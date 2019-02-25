const x = function x(val1) {
    return (val2) => { return val1 + val2};
};
console.log(x(1)(7));


const path = require('path');
console.log(`path = ${path.resolve(__dirname)}`);


class Planet {
    constructor(name = "Mars") {
        this.name = name;
        
        this.f1 = function() {
            console.log(this.name);
        }
    }
    
    getName() {
        return 'Planet name is ' + this.name;
    }
}

const p1 = new Planet("earth");
p1.f1();