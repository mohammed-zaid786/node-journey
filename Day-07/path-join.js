const path = require("node:path");
const folder = "Day-07";
const subFolder = "notes";
const file = "hello.md";
const filePath = path.join(folder,subFolder,file);

console.log("File Path:");
console.log(filePath);

//op:- File Path:
// Day-07\notes\hello.md