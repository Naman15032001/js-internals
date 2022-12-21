// console.log("start");

// // const id = setTimeout(()=>{
// //     console.log("set timeout");
// // },3000);

// let idx = 1;

// const id = setInterval(() => {
//     console.log("set interval calling");
//     idx++;
//     if (idx == 3) {
//         clearInterval(id)
//     }
// }, 3000);

// console.log(id);

// console.log("after");

// polyfill of setInterval using setimeout

// setInterval( cb , delay );

// clearInterval(id);


//let idx=0;


/*function increaseIdx(){
    idx++;
    console.log("namm",idx);
    return idx;
}*/
function setIntervalPolyfill() {

    let id = 0;

    let myObj = {}

    function mySetInterval(cb, delay, ...args) {

        let myIntervalId = id++;

        console.log(myIntervalId, "xx");

        function repeat() {

            //console.log(myIntervalId, "naman2");

            myObj[myIntervalId] = setTimeout(() => {
                cb(...args);

                if (myObj[myIntervalId]) {
                    repeat()
                }

            }, delay)



        }

        repeat();

        return myIntervalId;

    }

    function myclearInterval(id) {
        clearTimeout(myObj[id])
        delete myObj[id];
    }

    return {
        mySetInterval,
        myclearInterval,
    }
}

let {
    mySetInterval,
    myclearInterval
} = setIntervalPolyfill();


console.log(mySetInterval, myclearInterval);

let intervalId = mySetInterval(cb, 2000);

console.log("naman1", intervalId);

let intervalId2 = mySetInterval(cb2, 2000);

console.log("naman2", intervalId2);

let count = 0;

function cb() {
    console.log("my set interval is running");
    count++;
    if (count == 3) {
        myclearInterval(intervalId);
    }
}

let count2 = 0;

function cb2() {
    console.log("my set interval 2 is running");
    count2++;
    if (count2 == 3) {
        myclearInterval(intervalId2);
    }
}