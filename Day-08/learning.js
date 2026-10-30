/* What is EVENT?:- event occurs[new register login] -> event is emitted[user registered] ->[welcome email, save record, send notification] 
* formula = event-kya hua? / listener-hone par kya karna hai? / emitter-event ko trigger karna.     */

/* node.js eventemitter:- const EventEmitter = require("node:events");
* require()- use any module in our code.
*node:events- node.js build in event module.
* EventEmitter:- In that Class that we can create our event emitter.


Form Object:-    const EventEmitter = const require("node:events");
               const myEmitter = new EventEmitter();


* myEmitter:- it can trigger the event.
               */





/* CONCEPT TO UNDERSTAND */
/* readFile:- if we have 500 mb log file it can read full file and data should be available form of variable.
eg:- 
    const fs = require("node:fs");
fs.readFile("server.log", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});


* stream:- stream fill will not wait whole data untill data will come it will divide into chunks and it will process.
eg:- 500MB file -> chunk1 / chunk2 / chunk3
advantage:- it will effecientlyb process big files, it will take less memory.


* chunk:- small part of data  that stream will read or process.
* buffer:- temporary area where binary data will store  in node.js file streams chunks are called buffer.
example:- 
 const fs = require("node:fs");

const stream = fs.createReadStream("server.log");

stream.on("data", (chunk) => {
    console.log("Received chunk:", chunk.length, "bytes");
});

*  file = full book
*  chunk = sinle page pf book
*  buffer = placed where temporary data will stored.








* pipeline():- readable stream[read file]  -> transform stream[data clean]   -> writable stream[write file]  if we read file,clean data and write clean data another file. */
