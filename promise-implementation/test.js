const MyPromise = require('./promise');;

let myPromise = new MyPromise((resolve)=>{
    console.log("into my promise");
    resolve("naman");
})

myPromise.then((data)=>{
    console.log(data);
})