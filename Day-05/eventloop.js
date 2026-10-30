console.log("1 - Start");

setTimeout(() => {
    console.log("2 - Timer");
}, 0);

setImmediate(() => {
    console.log("3 - Immediate");
});

console.log("4 - End");
/* output:- 
1 - Start
4 - End
2 - Timer
3 - Immediate
*/ 
//asynchronus code will complete first.

/* process.nextTick() & Promise. */
// console.log("A");

// Promise.resolve().then(() => {
//     console.log("B");
// });

// process.nextTick(() => {
//     console.log("C");
// });

// console.log("D");
/* op:- Program Files\nodejs\node.exe .\Day-05\eventloop.js
A
D
C
B
*/ //synchronous code -> ,microtask related work -> event loop phases.