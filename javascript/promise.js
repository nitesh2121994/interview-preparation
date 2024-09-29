const promisePolifill = new PromisePolyfill((resolve, reject) => {
    setTimeout(() => {
        resolve('error')
    }, 2000)
}).then(res => console.log(res))
    .catch(err => console.error(err))



function PromisePolyfill(excecutor) {

    let onResolve,
        onReject,
        isFullfilled,
        isRejected,
        isCalled,
        value;

    function resolve(val) {
        isFullfilled = true;
        value = val;
        if (typeof onResolve === 'function') {
            onResolve(value);
            isCalled = true;
        }
    }
    function reject(val) {
        isRejected = true;
        value = val;
        if (typeof onReject === 'function') {
            onReject(value);
            isCalled = true;
        }
    }

    function reject(value) {
        onReject(value);
    }

    this.then = function (callback) {
        onResolve = callback;
        if (isFullfilled && !isCalled) {
            onResolve(value);
            isCalled = true;
        }
        return this;
    }

    this.catch = function (callback) {
        onReject = callback;
        if (isRejected && !isCalled) {
            onReject(value);
            isCalled = true;
        }
        return this;
    }


    excecutor(resolve, reject);
}


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 1')
    }, 2000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise 2')
    }, 2000)
});

function PromiseAllPolyfill(promises) {

    return new Promise((resolve, reject) => {
        const results = [];
        if (!promises.length) {
            resolve(results);
            return;
        }

        let pending = promises.length;
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                results[index] = res;
                pending--;

                if (pending === 0) {
                    resolve(results);
                }
            }, reject)
        })
    })
}

PromiseAllPolyfill([promise1, promise2])
.then(res=> console.log(res))
.catch(err=> console.error(err))