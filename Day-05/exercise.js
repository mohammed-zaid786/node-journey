/* Exercise 2:- Read platform metadata,system architecture, and uptime using the core node:os module.[system info using node:os] */
const os = require("node:os");
console.log("Platform:", os.platform());  //it shows the os platform
console.log("Architecture:", os.arch());  //it shows system archietecture
console.log("Uptime:", os.uptime(), "seconds");  //it show how much time will running on system
/*op:- 
Platform: win32
Architecture: x64
Uptime: 401446.921 seconds
*/
// i used the core node:os module to read system info. i used os.platform() for the os,os.arch() for the system architecture, and os.uptime() to get how log the system has been running.




/*convert sec into hrs */
// const os = require("node:os");
// const seconds = os.uptime();
// const hours = Math.floor(seconds / 3600);
// const minutes = Math.floor(
//   (seconds % 3600) / 60
// );
// console.log("Platform:", os.platform());
// console.log("Architecture:", os.arch());
// console.log("Uptime:", `${hours}h ${minutes}m`); //op:- 111h 34m





/* Exercise 3:- Monitor real-time process heap alloactions with process.memoryUsage() [real time process heap monitoring] */
function showMemory() {
  const memory = process.memoryUsage();
  console.log(
    "Heap Used:",
    (memory.heapUsed / 1024 / 1024).toFixed(2), //currently  used js heap
    "MB"
  );
  console.log(
    "Heap Total:",
    (memory.heapTotal / 1024 / 1024).toFixed(2),   // v8 will allocate how much heap memory
    "MB"
  );
  console.log("----------------------");
}
showMemory();
/* op:- 
Heap Used: 7.08 MB
Heap Total: 11.54 MB
----------------------
*/

/* Real Time */
// function showMemory() {
//   const memory = process.memoryUsage();

//   const heapUsed =
//     (memory.heapUsed / 1024 / 1024).toFixed(2);

//   const heapTotal =
//     (memory.heapTotal / 1024 / 1024).toFixed(2);

//   console.log(
//     `Heap Used: ${heapUsed} MB | Heap Total: ${heapTotal} MB`
//   );
// }

// setInterval(showMemory, 1000); //showmemory func will run function every 1000ms = 1 sec so it behave like real time-mmonitoring
/* op:-
Heap Used: 4.21 MB | Heap Total: 8.13 MB
Heap Used: 4.23 MB | Heap Total: 8.13 MB
Heap Used: 4.24 MB | Heap Total: 8.13 MB
Heap Used: 4.25 MB | Heap Total: 8.13 MB
Heap Used: 4.24 MB | Heap Total: 8.13 MB
// it will print continuosly  ctrl+c to stop
*/
// i used process.memoryUsage() to monitor the node.js process heap.i converted the memory values from bytes to mb and used setInterval() to display the heap usage every second.