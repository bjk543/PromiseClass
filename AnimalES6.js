var ageSymbol = Symbol();

class AnimalES6 {
    constructor(name) {
        this.name = name;
        this[ageSymbol] = 0;
    }

    get age() {
        return this[ageSymbol];
    }

    set age(value) {
        if (value < 0) {
            console.log("We do not support undead animals");
        }

        this[ageSymbol] = value;
    }

    doSomething() {
        console.log("I'm a " + this.name);
    }
}

var lionES6 = new AnimalES6("Lion");
lionES6.doSomething();
lionES6.age = 5;

module.exports = AnimalES6