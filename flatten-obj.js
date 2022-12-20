let obj = {
    name: "naman",
    address: {
        city: "ahmedabad",
        country: "india"
    }
}

let obj1={
    name: "naman",
    address: {
        city: "ahmedabad",
        country: "india",
        street:{
            pincode:"2343",
            sector:"2111"
        }
    }
}
console.log(obj);

function flatten(obj, parent, res = {}) {

    for (let prop in obj) {
        let key = parent ? parent + "_" + prop : prop;
        if (typeof obj[prop] === 'object') {
            flatten(obj[prop], key, res)
        } else {
            res[key] = obj[prop];
        }
    }

    return res;
}

console.log(flatten(obj));

console.log(flatten(obj1));