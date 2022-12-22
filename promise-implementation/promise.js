const states = {
    RESOLVED: 'resolved',
    PENDING: 'pending',
    REJECTED: 'rejected',
}

class MyPromise {

    #state = states.PENDING;
    #thenCallbacks = [];
    #catchCallbacks = [];
    #value;

    constructor(cb) {
        try {
            cb(this.#accepted, this.#rejected)
        } catch (e) {
            this.#rejected(e);
        }
    }

    cb() {

    }

    #accepted(data) {

        this.#state = states.RESOLVED;
        this.#value = data;

        if (this.#state !== "pending") {
            return;
        }

        this.#runnCallbacks();
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

        if (this.#state !== "pending") {
            return;
        }

        this.#state = states.REJECTED;
        this.#value = data;

        this.#runnCallbacks();
    }

    then(thencb, catchCb) {
        if (thencb !== null) {
            this.#thenCallbacks.push(thencb);
        }

        if (this.catchCb) {
            this.#catchCallbacks.push(catchCb);
        }

        this.#runnCallbacks();

    }

    catch(cb) {
        this.then(null, cb);
    }

    finally() {

    }


}

module.exports = MyPromise;

let p = new Promise((resolve, reject) => {

    resolve('naman');


})

console.log(p);

p.then(data => {
    console.log(data);
})

