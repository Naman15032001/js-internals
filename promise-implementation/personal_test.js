const MyPromise = require('./promise');;

let myPromise = new MyPromise((resolve)=>{
    console.log("into my promise");
    resolve("naman");
})

let myPromise1 = new Promise((resolve)=>{
    console.log("into my promise");
    resolve("naman");
})

let ans = myPromise1.then((data)=>{
    console.log("intside then callback");
    //return "hellopp"
    return new Promise((resolve,reject)=>{
        resolve("return")
    })
}).then((data1)=>{
    console.log("second ",data1 instanceof Promise);
})


// let ans = myPromise1.then((data)=>{
//     console.log("intside then callback");
//     return "hellopp"
//     return new Promise((resolve,reject)=>{
//         resolve("return")
//     })
// })

console.log(ans);
setTimeout(() => {
    console.log(ans instanceof Promise);
}, 2000);


// myPromise.then((data)=>{
//     console.log(data);

//    // return new MyPromise((resolve)=>resolve("data1"));
//     return "returned"
// }).then((data1)=>{
//     console.log(data1)
// })


