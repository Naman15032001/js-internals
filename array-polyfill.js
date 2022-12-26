Array.prototype.myMap = function (cb) {

    let newArray = [];

    let arr = this;

    for (let i = 0; i < arr.length; i++) {

        newArray[i] = cb(arr[i]);
    }

    return newArray;

}

let arr = [1, 2, 3, 4, 5];

let narr = arr.myMap((val) => val * 2);

console.log(narr);

Array.prototype.myFilter = function (cb) {

    let newArray = [];

    let arr = this;

    for (let i = 0; i < arr.length; i++) {

        if (cb(arr[i]) === true) {
            newArray.push(arr[i]);
        }
    }

    return newArray;

}

let arr1 = [1, 2, 3, 4, 5];

let narr1 = arr.myFilter((val) => val % 2 === 0);

console.log(narr1);

Array.prototype.myReduce = function (cb, acc) {

    let rvalue = 0;

    for (let i = 0; i < arr.length; i++) {

        rvalue = cb(rvalue,arr[i])

        console.log(rvalue);
    }

    return rvalue;
}

let arr2 = [1, 2, 3, 4, 5];

let ans = arr.myReduce(((val, acc) => val - acc), 0);

let ans2 = arr.reduce(((val, acc) => val - acc), 0);

console.log(ans);

console.log(ans2);

