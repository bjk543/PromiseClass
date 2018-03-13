
var AnimalES6 = require("./AnimalES6");


var legsCountSymbol = Symbol();
class InsectES6 extends AnimalES6 {
    constructor(name) {
        super(name);
        this[legsCountSymbol] = 0;
    }

    get legsCount() {
        return this[legsCountSymbol];
    }

    set legsCount(value) {
        if (value < 0) {
            console.log("We do not support nether or interstellar insects");
        }

        this[legsCountSymbol] = value;
    }

    doSomething() {
        super.doSomething();
        console.log("And I have " + this[legsCountSymbol] + " legs!");
    }
}

var spiderES6 = new InsectES6("Spider");
spiderES6.legsCount = 8;
spiderES6.doSomething();
