function mySetTimeOutPolyfill() {

    let id = 0;

    let map = {}

    function mySetTimeout(cb, delay, ...args) {

        id++;

        map[id] = id;

        //console.log(map);

        let start = Date.now();

        function repeat() {

            if (!map[id]) return;
            if (Date.now() > start + delay) {
                cb.apply(this, args);
            } else {
                process.nextTick(function () {
                    repeat();
                });
            }
        }

        repeat()

        return id;
    }

    function myClearTimeout(timeoutId) {
        delete map[timeoutId]
    }


    return {
        mySetTimeout,
        myClearTimeout
    }
}

let { mySetTimeout, myClearTimeout } = mySetTimeOutPolyfill();

console.log("1");

mySetTimeout(() => {
    console.log("HELLOO");
}, 5000)

console.log("2");