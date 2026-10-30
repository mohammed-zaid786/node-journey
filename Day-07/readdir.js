const fs = require("node:fs/promises");

async function main() {
  const files = await fs.readdir("notes");

  console.log(files);
}

main();

//op:- it will show space like [] because notes will empty.
//readdir -> what is in the folder -> list of names.