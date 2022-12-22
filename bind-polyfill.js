let obj = {
    name: "naman",
    log1(msg) {
        console.log(`${msg} ${this.name}`);
    }
}

function log(msg) {
    console.log(`${msg} ${this.name}`);
}

//let myFunc3 = log.bind(this, "hello");

//console.log(myFunc3());


 // let myFunc1 = obj.log1.bind(obj, "hello");






Function.prototype.myBind = function (context , ...args) {

    // console.log(...args);

    let fncontext = this;

    const paramsArray = [...args];

    //console.log(context, ...args , "naman");

    return function () {

        fncontext.apply(context, paramsArray)

    }


}


let myFunc = log.myBind(obj,"hello");

myFunc();

//let myFunc1 = obj.log1.myBind(obj, "hello");

//myFunc1();