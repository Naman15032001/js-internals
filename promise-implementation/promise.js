const states = {
    RESOLVED: 'resolved',
    PENDING: 'pending',
    REJECTED: 'rejected',
}

class MyPromise {

    #state = states.PENDING;
    #thenCallbacks = [];
    #catchCallbacks = [];
    #acceptedBind = this.#accepted.bind(this)
    #rejectedBind = this.#rejected.bind(this)
    #value;

    constructor(cb) {
        try {
            cb(this.#acceptedBind, this.#rejectedBind)
        } catch (e) {
            this.#rejected(e);
        }
    }

    #accepted(data) {


        
        queueMicrotask(() => {

            console.log("here1",data instanceof MyPromise);

            if (this.#state !== "pending") {
                return;
            }

            if (data instanceof MyPromise) {
                data.then(this.#acceptedBind, this.#rejectedBind)
                return;
            }

            this.#state = states.RESOLVED;
            this.#value = data;

            this.#runnCallbacks();

        })


    }

    #runnCallbacks() {

        if (this.#state === states.RESOLVED) {
            this.#thenCallbacks.forEach((thencb) => thencb(this.#value));
            this.#thenCallbacks = [];
        }

        if (this.#state === states.REJECTED) {
            this.#catchCallbacks.forEach((catchCb) => catchCb(this.#value));
            this.#catchCallbacks = [];
        }
    }

    #rejected(data) {

        queueMicrotask(() => {

            if (this.#state !== "pending") {
                return;
            }

            if (data instanceof MyPromise) {
                data.then(this.#acceptedBind, this.#rejectedBind)
                return;
            }

            if(this.#catchCallbacks.length===0){
                throw new UnCaughtPromiseException(data);
            }

            this.#state = states.REJECTED;
            this.#value = data;

            this.#runnCallbacks();

        })


    }

    then(thencb, catchCb) {

        return new MyPromise((resolve, reject) => {

            this.#thenCallbacks.push((result) => {

                if (thencb == null) {
                    resolve(result);
                    return;
                }

                try {
                    resolve(thencb(result))
                } catch (err) {
                    reject(err);
                }

            })

            this.#catchCallbacks.push((result) => {

                if (catchCb == null) {
                    reject(result);
                    return;
                }

                try {
                    resolve(catchCb(result))
                } catch (err) {
                    reject(err);
                }

            })

            this.#runnCallbacks();

        })



        /*if (thencb !== null) {
            this.#thenCallbacks.push(thencb);
        }

        if (this.catchCb) {
            this.#catchCallbacks.push(catchCb);
        }*/

        // this.#runnCallbacks();

    }

    catch(cb) {
        return this.then(null, cb);
    }

    finally(cb) {

        return this.then(result=>{
            cb();
            return result;
        },result=>{
            cb();
            return result;
        })

    }


}

module.exports = MyPromise;

class UnCaughtPromiseException extends Error{

    constructor(error){
        super(error)
        this.stack = `(in promise) ${error.stack}`
    }
}

let p = new MyPromise((resolve, reject) => {

    resolve('naman');

});

// let p1 = new Promise((resolve, reject) => {

//     resolve('naman');

// });

console.log(p);
// console.log(p1,"original");
let ans = p.then(data => {
    console.log(data);
    //const xx=y;
    return "returned value"
}).then(data=>{
    console.log(data);
}).catch(e=>{
    console.log(e,"lloll");
})

setTimeout(()=>{
    console.log(ans);
},3000)

/*

    return new Promise((resolve,reject)=>{


    })

*/

