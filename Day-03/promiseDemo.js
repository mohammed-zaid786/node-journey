const promise = new Promise((resolve,
     reject) => {
    resolve("Task completed successfully");
});
promise.then((result) => {
    console.log(result);
}); //op- task completed successful

/* we understand 3 things now
1- new Promise(...)   create promise
2-  resolve ("Task completed successful")   promise were successful
3- .then(...)     result were succesfully handle. */