const fs = require("node:fs/promises");
async function main() {
  await fs.writeFile("hello.txt", "Hello Node.js");
  console.log("File created successfully!");
}

main();

//op:- File created successfully! 
//it will create hello.txt in day-07 and open hello.txt it shows Hello Node.js      (this is actual file system operation)