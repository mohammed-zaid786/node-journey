//P-1
/* What is Node.js:- basically it is a JavaScript runtime environment in simple(its a environment that runs JS outside the browser 
  HERE 3 IMP PLAYER IN NODE.JS:- V8 = JavaScipt worker, Event Loop = traffic controller, libuv = it is a system thats manage os works, Thread Pool = workers of background task */

/* V8 JavaScript Engine */
/* v8 it is a google JavaScript engine it execute Js code  for eg:-
const a = 10;
const b = 20;
console.log(a + b);     // v8 execute js .
*/

/* What is LIBUV:- it help the node to manage asynchronous input and event-driven operations.(it is a helper of js its basically background worker of node.js that handle slow works)
eg:- console.log("1. shop opened");
setTimeout(() => {
  console.log("3. libhuv finished slow work  after 2 sec like helper");
  }, 2000);
  console.log("2. serving next customers - not waiting");
  // output:- 1. shop opened / serving next customer / helper libhuv (line 1 is libhuv is the bg worker inside node.js that handles all slow task like files,networks,timers,so that node.js nvr  get blocked thats why node.js is fast ) 
  */

/* Thread Pool:- libuv has a team of 4 workers.this team called thread pool
[node.js is single threaded, so it cannot do heavy tasks like file reading itself. for that , libuv has a team of 4 workers.that team is called thread pool] 
why 4 workers only:- to save memory and resources.
eg:- // We ask to read 5 files at once
fs.readFile('file1')
fs.readFile('file2')
fs.readFile('file3')
fs.readFile('file4')
fs.readFile('file5') // This one will wait
*/

/* V8 -> can run Js, Event Loop -> it coordinate the works, libuv -> provide asynchronous input machinery, ThreadPool -> it handle the blocking-style background work */




//P-2 
/* Event Loop:- 
suppose:
console.log("A");   //for eg
setTimeout(() => {
  console.log("B");
  }, 0);
  console.log("C");
// expected op:- A/B/C but Actual op:- A/C/B because
console.log("A")-> js executes immediately / setTimeout(...)-> time is registered / console.log("C")-> executes immediately / event loop later handles timer-> B
*/
/* Real Life Eg:- chef=Js thread, Manager=Event loop, kitchen/bg workers= libuv/os mechanisms.
*chef will execute single  js task at a time.
*if customer says- my order is prepared at 20 min. chef will not stay till 20 min it will take handle work to next customer.it is asynchronous idea.
*PHASES OF IMP EVENT LOOP:- timers-> poll i/p-> check setImmwdiate-> close-> repeat.
*Timers: setTimeout() / setInterva() related callbacks.
*poll: it imp phases that process input events.
*check: setImmediate() callbacks.
*close: close callbacks of closed resources.
*/




//P-3
/* NODE GLOBALS:- globals are built in variables in node.js that are available everywhere without importing (basically node.js provided free tools without require that are globals[process, __dirname, __filename, global this] )*/
//1:- Process: it gives info about the currently running node process, such as platform,archietecture,node version and processID.
console.log(process.platform);     //os it gives os info which one is use.
console.log(process.arch);       //computer
console.log(process.version);     //Node.js
console.log(process.pid);         //os provide ID every running program
/* op:- 
win32   
x64
v24.21.0
*/

//2:- __dirname: that gives the current files's directory path.
console.log(__dirname);   // it provide path where current js file on its folder(directory/folder)
/*op:- C:\Users\ASUS\Cepialabs\node-journey\Day-05 */

//3:- __filename: that gives the complete path of current file
console.log(__filename); // it provide complete path of currnt  JavaScript file.(file)
/* op:- C:\Users\ASUS\Cepialabs\node-journey\Day-05\learning.js */

//4:- globalThis: globalThis provides access to the global environment in Node.js
console.log(globalThis === global);
/* op:- true */  // mean in node glbal and globalThis has refers insame global environment.

//CM:- In browser: window/doc/localstorage and Node.js: window/doc.  (browser is webPAGE enivronment ande node somputer/server environment.)




//P-4
/* process.argv : to read command-line arguments.(input from the terminal) */
const name = process.argv[2];  
console.log("Hello", name);
/* op:- Hello ASUS means terminal give ASUS program will read it */




//P-5
/* process.env: it is used for environment variables and access configuration.(it can take configuration values from comp/environment) */
console.log(process.env.NODE_ENV);
console.log(process.env.PORT);
/* op:- if values is set than it will provide otherwise it show undefined */

/* argv VS env :- 
process.argv:it will provide value through user command;
(node app.js ASUS) here process.argv[2] -> ASUS.
process.env:value comes from environment/configuration.
(NODE_ENV=production) here process.env.NODE_ENV -> production
argv = Argument  & env = Environment
*/




//P-6
/* process.exit(): it is used to explicitly terminate the Node.js process.exit code 0 represent the successful completion and non-zero code just like 1, indicate failure. */
console.log("Start");
process.exit(0);
console.log("End");
/* op:- start but end will not print because process.exit(0) will terminate the Node.js process.
process.exit(0) -> succesful completion / process.exit(1) -> Error/failure
*/




//P-7 
/* node:os [os modules gives information about the operating system] isme all info abt comp */
const os = require("node:os");
console.log(os.platform());     //op:- win32
console.log(os.arch());         //op:- x64
console.log(os.cpus().length);   //op:- 8
console.log(os.totalmem());     // op:- 16407719936
console.log(os.uptime());       //op:- 399461.406 it provide how much sec computer will running

// const os = require("node:os");     //totalmem() provide memory in bytes and it convert into gb
// const totalRAM =
//   os.totalmem() / 1024 / 1024 / 1024;
// console.log(totalRAM.toFixed(2), "GB"); //op:- 15.28 GB

// const os = require("node:os");      // it provide free Ram
// const freeRAM =
//   os.freemem() / 1024 / 1024 / 1024;
// console.log(freeRAM.toFixed(2), "GB");   //op:- 7.19 GB

// const os = require("node:os");   // it can readable the seconds
// const seconds = os.uptime();
// const hours = Math.floor(seconds / 3600);
// const minutes = Math.floor(
//   (seconds % 3600) / 60
// );
// console.log(`${hours}h ${minutes}m`);   //op:- time in hours and min.




//P-8 
/* process.memoryUsage(): its monitor the current Node.js process memory usage. */
const memory = process.memoryUsage();
console.log(memory);
/* op:-  rss: 34742272,
  heapTotal: 6070272,
  heapUsed: 4255424,
  external: 1659623,
  arrayBuffers: 137503
*/

/* it shows value in bytes */
// const memory = process.memoryUsage();
// const heapUsed =
//   memory.heapUsed / 1024 / 1024;
// console.log(heapUsed.toFixed(2), "MB"); //op:- 7.01 MB

/* heapTotal */
// const memory = process.memoryUsage();
// const heapTotal =
//   memory.heapTotal / 1024 / 1024;
// console.log(heapTotal.toFixed(2), "MB");  //op:- 11.29 MB

/* heapUsed and heapTotal: example;
capacity of room = heapTotal(v8 will how much memory will allocate) & current things on Room = heapUsed (how much memory will used) */