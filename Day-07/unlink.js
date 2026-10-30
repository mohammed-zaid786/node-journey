const fs = require("node:fs/promises");

async function main() {
  await fs.unlink("hello.txt");

  console.log("File deleted successfully!");
}

main();

//op:- File deleted successfully [hello.txt will delete after run this]