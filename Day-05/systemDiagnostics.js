/* Project:- system Diagnostics CLI: it is a command line tool that shows basic health info about computer. [os,cpu architecture, cpu cores,ram,free ram, system uptime,Node process memory,exit status] */

const os = require("node:os");    //import node:os

// Command-line argument
const args = process.argv.slice(2);       //Take command-line argument

// Check command
if (args[0] !== "--info") {
  console.error("Usage: node sysinfo.js --info");
  process.exit(1);
}

// System information
console.log("==============================");
console.log("      SYSTEM DIAGNOSTICS");
console.log("==============================");

console.log("OS          :", os.platform());     //get os
console.log("Architecture:", os.arch());         //Get archietecture
console.log("CPU Cores   :", os.cpus().length);  //Get cpu cores

const totalRAM = os.totalmem() / 1024 / 1024 / 1024;   //Get total RAM 
const freeRAM = os.freemem() / 1024 / 1024 / 1024;     //Get free RAM

console.log("Total RAM   :", totalRAM.toFixed(2), "GB");
console.log("Free RAM    :", freeRAM.toFixed(2), "GB");

const uptime = os.uptime();                        //System uptime

const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);

console.log(
  "Uptime      :",
  `${hours}h ${minutes}m`
);

// Node process memory
const memory = process.memoryUsage();              //Memory of Node Process

console.log(
  "Heap Used   :",
  (memory.heapUsed / 1024 / 1024).toFixed(2),
  "MB"
);

console.log("==============================");
console.log("Status      : OK");

process.exit(0);                    //Exit Status









/*systemDiagnostics.js --info 
 op:- 
==============================
      SYSTEM DIAGNOSTICS
==============================
OS          : win32
Architecture: x64
CPU Cores   : 8
Total RAM   : 15.28 GB
Free RAM    : 7.29 GB
Uptime      : 114h 46m
Heap Used   : 5.44 MB
==============================
Status      : OK
*/