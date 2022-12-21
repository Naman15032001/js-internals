let inputObj = {
    past: [{
        day: 31
    }, {
        month: 12
    }, {
        year: 2020
    }],
    present: [{
        day: 1
    }, {
        month: 1
    }, {
        year: 2021
    }],
}

// function deepClone(inputObj, par, res = {}) {

//     console.log(inputObj);

//     for (let key in inputObj) {

//         if(Array.isArray(inputObj[key])){
//             res[par]=[];
//             deepClone(inputObj[key],key,res)
//         }else if(typeof inputObj[key] ==='object'){
//             res[par]={};
//             deepClone(inputObj[key],key,res)
//         }else{
//             res[par]=inputObj[key];
//         }
        

//     }

//     return res;

// }


function deepClone1(inputObj) {

    let res = Array.isArray(inputObj) ? [] : {};

    if(typeof inputObj !=='object'){
        return inputObj;
    }

    for (let key in inputObj) {
        res[key]= deepClone1(inputObj[key])
    }

    return res;

}

console.log(deepClone1(inputObj));