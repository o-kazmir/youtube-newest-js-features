const {
    promise,
    resolve,
    reject
} = Promise.withResolvers()

setTimeout(() => {
    resolve("done");
}, 1000);

promise.then(console.log);