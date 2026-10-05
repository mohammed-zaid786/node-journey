/* Promise:- promise future Result (order->not available->but itn will say soon available) 
const pizza = new
Promise((resolve, reject) => {
    resolve("Pizza delivered");
    });
    resolve() = success
    reject() = failure
  */  
   const order = new Promise((resolve, reject) => {

    resolve("Pizza delivered");

});

order.then((message) => {
    console.log(message);
});//op:- pizza delivered

/* flow:- promise->resolve()->.then()->result. */


/* Promise with Delay */
const order2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Pizza delivered");
    }, 3000);

});

console.log("Order placed");

order.then((message) => {
    console.log(message);
});

console.log("Waiting for pizza...");//op:- Order placed/waiting for pizza... after 3 sec later  Pizza delivered.


/* 3 States of Promise:-
Promise-> Fulfilled, Rejected. 
pending-> fulfilled
pending->rejected
*/


/* 1:- async :- aysnc func always return promise */
async function getData() {
    return "Data received";
}
getData().then((data) => {   //.then() is used to retrived inside data.
console.log(data); 
});//op:- Data received.


/* 2:- await  :- it can wait for result of promise on that async flow of func.   */
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 3000);
    });
}
async function main() {
    console.log("Starting");
    const data = await
    getData();
    console.log(data);
    console.log("Finished");
}
main();

//op:- starting(immediately) /n after 3 sec; data received/finished.
//flow:- main() -> starting -> getData() -> await(3sec) -> Data received -> Finished
//async:-async fynction():- it is promised based and const data = await getData() :- whenever result will not come that it will not go the next line


/* 3:- try/catch :- if suppose API will  fail so handle the error: try for risky code and catch(error) for error handling. (try-> working-> success[yes so moving to next] -> No-> Catch-> handle error) */
async function getData() {
    try {
        const data = await Promise.reject("Server error");
        console.log(data);
    } 
    catch (error) {
        console.log("Error:", error);
    }
}
getData(); //op:- Error: Server error.


/* 4:-  finally: it will execute in both cases success or failure.  */
async function getData() {
    try { 
        console.log("Fetching data...");
        const data = await
        Promise.resolve("Data received");
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Request completed");
    }
}
getData();//op:- fetchingdata/data received/request completed.
/* if it failure */
async function getData() {
    try {
        await Promise.reject("Server failed");
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Request completed");
    }
}
getData();// op:- Error: server failed/request completed.

//we use try-catch-finally. try fetch the data, catch if server will fail then it will show  Error: Server failed and finally show the request will completed it will execute on both cases it shows request will end.


/* Sequential execution & Parallel execution. */
/* suppose:- Sequence executetion:
Api 1 -> 2 sec, Api 2 -> 3 sec, Api 3 -> 4 sec we write;
const a = await api1();
const a = await api2();
const a = await api3(); 

flow:- api 1 ->  2sec, api 2 -> 3sec, api 3 -> 4 sec
total = 9 sec
for eg: login -> user Id -> user profile -> user orderss (we use sequential here second task will need of first task here sequence is imp)

Suppose:- parallel execution:
api1 -> 2 sec, api2 -> 3 sec, api3 -> 4 sec.so all 3 api  are independent all start together take approx 4 sec to execute.

Sequential -> dependent
parallel -> independent

*/


/* 5- Promise.all() :- it is a major tool of parallel execution. */
function task1() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Task 1 completed");
        }, 2000);

    });

}

function task2() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Task 2 completed");
        }, 3000);

    });

}

function task3() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Task 3 completed");
        }, 4000);

    });

}

async function main() {

    console.time("Total");

    const results = await Promise.all([
        task1(),
        task2(),
        task3()
    ]);

    console.log(results);

    console.timeEnd("Total");

}

main();
//op:- [ 'Task 1 completed', 'Task 2 completed', 'Task 3 completed' ]    Total: 4.017s
/* formula promise.all:- Promise.all([ p1,p2,p3 ]) means all promise result but if one api is fail the await Promise.all([...]) will reject.
example:- 
// async function main() {
//     try {
//         const results = await Promise.all([
//             Promise.resolve("API 1 success"),
//             Promise.reject("API 2 failed"),
//             Promise.resolve("API 3 success")
//         ]);
//         console.log(results);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }
// main();
output :- Error: API 2 failed.
*/


/* 6-  Promise.allSettled() :- if we have all API result rather it will failed. use[Promise.allSettled()] */
async function main() {
    const results = await Promise.allSettled([
        Promise.resolve("API 1 Sucess"),
        Promise.reject("API 2 failed"),
        Promise.resolve("API # success")
    ]);
    console.log(results);
}
main();
//op:-   { status: 'fulfilled', value: 'API 1 Sucess' },/ { status: 'rejected', reason: 'API 2 failed' },/{ status: 'fulfilled', value: 'API # success' }
/* Promise.all(): one failure -> whole operation rejects but Promise.allSettled(): one failure -> still give me everyone`s result. */


/* 7- Promise.race() :- multiple promise will race which one is firstly settled so it will shows result. */
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 won");
        }, 3000);
    });
}
function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2 won");
        }, 1000);
    });
}
function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 3 won");
        }, 2000);
    });
}
async function main() {
    const result = await Promise.race([  // its show the result of that will settle firstly
        task1(),
        task2(),
        task3()
    ]);
    console.log(result);
}
main();
//output:- Task 2 won because it will take less time to compare with t1 and t3. and in Promise.race is settle in rejection so race will reject it 
/* for example :-
const result = await Promise.race([
    Promise.reject("Failed quickly"),
    new Promise(resolve =>
        setTimeout(() => resolve("Success"), 2000)
    )
]); op:- failed quikly  */
/* summary:-
Promise.all(): all result but one reject it will reject
Promise.allSettled(): all final status but failure is allowed
Promise.race: first will settled than it will execute but first reject will also win 
*/