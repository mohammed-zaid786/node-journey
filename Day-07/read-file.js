const fs = require("node:fs/promises");

async function main() {
    const data = await
    fs.readFile("hello.txt", "utf8");
    console.log(data);
    
}
main();

//op:- Hello Node.js
/* utf8 :- file in computer in form of bytes/data  but we want in  readable text so we can utf8 mean read file in string/text format. */