// console.log("A");
// console.log("B");
// console.log("C");  //js execute the instruction above to below

/* STEP 1:- Synchronous :- after a complete a task then it will move to other one by one and first work is not complete so it will not move to the next */
// console.log("start");
// console.log("middle");
// console.log("end"); // one by one o/p start,middle,end.


/* STEP 2:- Single Thread in JS-  means at a time in flow of execution of js it execute a single piece of code */
// console.log("A");  //eg
// for (let i = 0; i < 100000;
//     i++) {

//     }
// console.log("B");   // A--> long loop---> B.  B will not come untill loop were not complete.


/* STEP 4:- What is Blocking :- 
eg:-  while(true) {}   //it will not finish where callstack were busy so thats why js code will not execute. JS code can block the call stack  */


/* STEP 5:- call stack :- it just like stack of plate like last in first out   */
// function first() {   //eg
//     second();    
// }
// function second() {
//     console.log("Inside second");
// }
// first();
// console.log("Done");  // op- inside second and done. call stacks keeps track of the JavaScript functions that currently being executed.
/* first() call inside the first second() call then second complete after second first complete. */


/* STEP 6:- Asynchronous JavaScript */
// console.log("Start");
// setTimeout(() => {
//     console.log("Timer Finished");
// }, 2000);
// console.log("End");// op- start/end/timer finished. because setTimeout() js ko block karke 2 sec wait nhi karata.



/* STEP 7:- setTimeout actual idea.
* javaScript--> setTimeout()--> Timer handling--> meanwhile Javascript perform the next code
so basically,
start--> setTimeout starts--> End--> timer Ready--> callback later executes--> Timer finshed   */


/* STEP 8:-  Task Queue :- it show which callback are ready and which one is waiting.
FLOW:-      setTimeout callback --> Task queue --> Event loop --> Call stack Empty? --> yes --> Callback executes.   */
// setTimeout (() => {
//     console.log("Timer");
// }, 0);
// console.log("Hello");  // even 0 ms ke baad bhi timer callback synchronous code se pehle execute nhi hoga.


/* STEP 9:- Event Loop:-
Remember 3 things Call Stack, Task Queue, Event Loop. simple way Call Stack:- right now who was doing work?, Task Queue:- which call back are ready and which was waiting?, Event Loop:- call stack is free? if yes so send the ready call back for execution.  */


/* STEP 10:- Microtask Queue:- microtask queue has a sehdule and this enter  promise and promise callback like
.then(...)
.catch(...)   */
// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("3");
// });
// console.log("4");// op:- 1/4/3/2. firstly synchronous code 1/4 and the promise microtask 3 and then timer task 2.
/* synchronous code --> microtask --> Task.      normal code -> promise microtask -> timer task */


/* STEP 11:-  What is CallBack:- a  function passed to another function to be called later  */
// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// greet("Virat", function () {
//     console.log("Welcome");
// });// op:- hello virat/ welcome. here function(){ console.log("Welcome");} is callback

/* Real Life Call Back
Restaurant:- order something -> kitchen -> pizza ready -> inform to customer. it just like call back concept inform to customer (future action). */



/* STEP 12:- Callback Hell:- 
suppose: Get user -> Get orders -> Get payment -> Get result */
// getUser((user) => {
//   getOrders(user, (orders) => {
//     getPayment(orders, (payment) => {
//       console.log(payment);
//     });
//   });
// }); // nesting were increase so that is called callback hell or nested callback. it is hard to read and maintain. so we use promise and async await to avoid this callback hell.


/* STEP 13:- Promises:- it is a object which represent the eventual completion or failure of an asynchronous operation. 
it is object that represet the future result  */
/* Real Life Example:- suppose you order pizza and you wait for it. so the pizza is promise and you wait for it. if pizza is ready then you get it otherwise you wait for it. */

/* STEP 14:- Promise States:- 1. Pending:- initial state, neither fulfilled nor rejected. 2. Fulfilled:- meaning that the operation completed successfully. 3. Rejected:- meaning that the operation failed. */
/* pending -> success -> fulfilled.
   pending -> failure -> rejected.  */



   







   /* STEP 15:- resolve():-  */
// const promise = new Promise((resolve, reject) => {
// resolve("Hello Zaid");
// });
// promise.then((result) => {
//   console.log(result);
// }); // op:- hello zaid
/* resolve() -> success -> fullfilled -> .then()  */


/* STEP 16:- reject():-  */
// const promise = new Promise((resolve, reject) => {
//   reject("Something went wrong");
// });

// promise.catch((error) => {
//   console.log(error);
// });// op- something went wrong. here reject("something went wrong"); means promise will fail. pending -> rejected.
/* reject() -> failure -> rejected -> .catch()   */


/* STEP 17:- .then():- */
// const promise = Promise.resolve("Data received");
// promise.then((data) => {
//   console.log(data);
// }); //op- data received. .then() basic work it define the result after successful promise


/* Promise Chaining:- we add multiple .then()    */
// Promise.resolve(10)
//   .then((number) => {
//     return number + 5;
//   })
//   .then((number) => {
//     return number * 2;
//   })
//   .then((number) => {
//     console.log(number);
//   });//op- is 30  first 10+5=15, second 15*2=30.  [.then() return something that gives the next .then()   line 155 to 157  ]


/* STEP 18:- .catch() */
// Promise.reject("Network error")  //eg 1
// .catch((error) =>  {
//    console.log("Error:", error);
// });// op- error: network error. [means: promise -> rejected -> .catch() -> error handled]

// Promise.resolve(10)  //eg 2
//   .then((number) => {
//     return number * 2;
//   })
//   .then((number) => {
//     throw new Error("Something failed");
//   })
//   .catch((error) => {
//     console.log("Caught:", error.message);
//   });// op- caught: something failed [ here second.then() was error that handle .catch() ]


/* STEP 19:- .finally() (it commom works after successful or failure ) */
// Promise.resolve("Success")
//   .then((result) => {
//     console.log(result);
//   })
//   .finally(() => {
//     console.log("Finished");
//   });//op- success/failure.

  //with failure:
//   Promise.reject("Failed")
//   .catch((error) => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("Finished");
//   });//op- error: failed /finished.

// real life eg:- loading -> api request -> success or error -> loading OFF

/*  CONNECT ALL TOGETHER     [step 15 to 19 ] */
// Promise.resolve("User data received")     //successful promise (pending-> fulfilled)
//   .then((data) => {                       // user data received
//     console.log("Step 1:", data);

//     return "Orders received";             // it send the next .then() value
//   })
//   .then((orders) => {                     // order received
//     console.log("Step 2:", orders);

//     return "Payment successful";          // sends .then() 
//   })
//   .then((payment) => {                     /// send third .then()
//     console.log("Step 3:", payment);
//   })
//   .catch((error) => {                      //if error hota to yaha aajata
//     console.log("Error:", error);
//   })
//   .finally(() => {                        // processed finished
//     console.log("Process finished");
//   });// output- step1 data received / step 2 order received / step 3 payment successful /processs finished.