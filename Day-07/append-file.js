const fs = require("node:fs/promises");

async function main() {
  await fs.appendFile("hello.txt", "\nThis is Day 7.");

  console.log("Data appended successfully!");
}

main();

//op:- Data appended successfully!   [it will add on hello.txt]