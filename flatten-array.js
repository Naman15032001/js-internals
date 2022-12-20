// input [1,2,3,[4,5,[6,7]]] , [[[[Nan],undefined]]]]

//output [1,2,3,4,5,6,7,Nan,undefined]

//let inputArr = [ 1 , 2 , 3 , [4 , 5 , [6 , 7]]]

let inputArr = [1, 2, 3, [4, 5, [6, 7]],
    [
        [
            [
                [NaN], undefined
            ]
        ]
    ]
]

// console.log(Array.isArray(inputArr[3]));

// console.log(Array.isArray(inputArr[0]))

function flattenArray(inputArr, res = []) {

    for (let i = 0; i < inputArr.length; i++) {
        const element = inputArr[i];

        if (Array.isArray(element)) {
            flattenArray(element, res)
        } else {
            res.push(element)
        }

    }

    return res;
}

console.log(flattenArray(inputArr));