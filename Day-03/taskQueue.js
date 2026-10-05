/* PURPOSE: I created a simulated asynchronous task pipeline where three mock data sources are processed sequentially, and i log the alapsed time for each task. */
function delay(ms) {            //we can make delay function ms mean 1000 ms = 1 second, 2000 ms = 2 seconds, 500 ms = 0.5 second
    return new Promise((resolve) => {   //we can return a promise
        setTimeout(resolve, ms);        // ms miliseconds wait karo phir resolve() call. for example:-  delay(1000) means: wait 1000ms -> resolve() -> Promise fulfilled.
    });
}


// console.log("Start");
// delay(1000).then(() => {
//     console.log("1 second completed");
// });//op:- start/1 second completed.  [second line 1 sec baad hi aayegi]

/* delay(1000) -> Promise -> setTimeout -> 1 second -> resolve() -> .then().  
" Why did you create the delay functions?:- i created a reusable promise-based delay function so i can simulate asynchronous operations"  */


/* first mock data source */
// async function processSource1() {    //when it will call thrn source 1 started then await delay get 1 sec wait then source 1 completed
//     console.log("Source 1 started");
//     await delay(1000);
//     console.log("Source 1 completed")
// }
// processSource1();   // op- source 1 started/ source 1 completed second line appear after a sec
/* we study about async func and await uses are:- async func processSource1 () ke andar await use kar skte hai
await delay(1000); means is async func before going to next line wait for completing the promise */


/* Create source 2 */
// async function processSource2() {
//     console.log("Source 2 started");
//     await delay(1500);
//     console.log("Source 2 completed");
// }

/* Created Source 3 */
// async function processSource3() {
//     console.log("Source 3 started");
//     await delay(1000);
//     console.log("Source 3 completed");
// }

/* we use this function on behalf of these 3 function:- */
async function 
processSource(name, time, startTime) {
    console.log(`[${Date.now() - startTime} ms] ${name} started`);
    await delay(time);
    console.log(`[${Date.now() - startTime} ms] ${name} completed` );
}

//if we write 
// processSource("Source 1", 1000);  //op:- source1 started and take time and completed
//similarly
// processSource("Source 2", 1500); // 0p:- source2 started and take time and completed
// 

// async function runTaskQueue() {
// await processSource1();
// await processSource2();
// await processSource3();
// }
// runTaskQueue();        /* delete it replaced it from this
async function runTaskQueue() {
    const startTime = Date.now();
    try {
    await processSource("Source 1", 1000, startTime);
     await processSource("Source 2", 1500, startTime);
     await processSource("Source 3", 1000, startTime);
     console.log(
        `[${Date.now()- startTime}
        ms] All sources completed` );
} catch (error) {
    console.log("Pipeline failed:", error.message);
}}
runTaskQueue();  /* op:- 

Source 1 started
Source 1completed     source1 -> 1 sec
Source 2 started       source2 -> 1.5 sec
Source 2completed
Source 3 started       source 3  -> 1 sec
Source 3completed    
*/

/* output:- 
Source 1 started
Source 1 completed
Source 2 started
Source 2 completed
Source 3 started
Source 3 completed
*/
// Day 3 Mini Project: taskQueue
