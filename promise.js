var Promise = require('bluebird');


var delay = function (s) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, s);
    });
};

delay().then(function () {
    console.log(1); // 顯示 1
    return delay(1000); // 延遲ㄧ秒
}).then(function () {
    console.log(2); // 顯示 2
    return delay(1000); // 延遲一秒
}).then(function () {
    console.log(3); // 顯示 3
    return delay(1000); // 延遲一秒
})



class myClass {

    constructor(name, pipeline) {
        this.name = name;
    }

    do_this() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("did do_this " + this.name);
                resolve(this);
            }, 2000);
        })
    }
 
    do_that() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("did that " + this.name);
                resolve(this);
            }, 1000);
        })
    }

    do_both() {
        // return this.do_this().then(this.do_that.bind(this)); 
        // return this.do_this().then(x => this.do_that(x));
        return this.do_this()
        .then(() => this.do_that())
        .then(() => this.do_this2())
        .then(() => this.do_that2())
        //return this.do_that2().then(this.do_that); //bad
    }
}

new myClass("myobj").do_both(); 