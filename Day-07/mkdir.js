const fs = require("node:fs/promises");

async function main() {
  await fs.mkdir("notes");

  console.log("Folder created successfully!");
}

main();

//op:- Folder created successfully [it will create folder in day-07 as 'notes']