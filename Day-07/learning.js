//            STEP - 1 PATH
/* What is Path? :- Address of a file or a folder in a Computer  
* eg: \users\ASUS\Desktop\project\notes.txt  here notes.txt-> is a path of file
* In window-> \ & linux-> /
* suppose: create a path in JS;
* const folder = "project";
* const file = "notes.txt";
* const filePath = folder + "/" + file;
* console.log(filePath);
* op:- project/notes.txt  so nodes.js will provide [node:path] it handle the correct path automatically.
* 
* path Module:- built in module in nodejs. [import: const path = require("node:path");]
* In modern ES module syntax [import path from "node:path";] we use Common JS setup for current learning [const path = require("node:path");]
*/



/* path.join():- suppose:
const folder = "notes";
const file = "hello.md" // we create notes/hello.md Use- */
// const path = require("node:path");
// const folder = "notes";
// const file = "hello.md";
// const filePath = path.join(folder, file);
// console.log(filePath);

//op:- notes\hello.md  [cross-platform path handling]
//path.join() -> multiple path parts -> proper path.
//eg; path.join("project", "notes", "day7", "hello.md",);   result; project/notes/day7/hello.md




/* path.resolve():- It can resolve the path from current working directory to make absolute path */
// const path = require("node:path");
// const filePath = path.resolve("notes", "hello.md");
// console.log(filePath);

//op:- C:\Users\ASUS\Cepialabs\node-journey\Day-07\notes\hello.md
/* Relative path:- notes/hello.md   &   Absolute path:- C:\Users\ASUS\Cepialabs\node-journey\Day-07\notes\hello.md */
/* join()  --> combine thr parts  /  resolve()  -->  creating a exact/absolute locations.  */




/* path.extname():- To find the extension of file */
// const path = require("node:path");
// const fileName = "notes.md";
// const extension = path.extname(fileName);
// console.log(extension);

//op:- .md   AnotherExample;


// const path = require("node:path");

// console.log(path.extname("photo.jpg"));
// console.log(path.extname("app.js"));
// console.log(path.extname("data.json"));
// console.log(path.extname("index.html"));

//op:- .jpg /.js / .json /.html

/* path.join() - it can join multiple multiple part in safe join. /  path.resolve() - it will create absolute path   /  path.extname()- it will give extrension of path. */










//          STEP-2 
/* NODE.JS fs/promises (we can learn how to create, delete,read and update files and folder in node.js)
*what is fs :- It is a file system in a computer inside its files/folder here work with these folder and files we can use fs module in NODE.js
* eg:- Create file -> Read file -> Update file -> Delete file -> Create folder -> Read folder.
* why fs/promises:- In a node.js fs has multiple ways here we use [node:fs/promises]  import;
* const fs = require("node:fs/promises"); here not use [const fs = require ("fs")] but we use  [const fs = require("node:fs/promises");] here operations are Promised-based-asynchronous.
*/

/* 1- writefile():- It will create file and the data on  it.    example:- fs.write(file name, data)   / writeFile()  -> new file=create  ->  existing file -> overwrite   
*  2- readFile():- we can write a file after it will read it
*  3- appendFile():- it will add something on in hello.txt file
* summary: writeFile()-> it will create /write and it will overwrite the existiong content.
* append():- It will added data in the end of existing content.
* readFile():- read file data. 
*/

/* mkdir:- it will create folder {Make Directory} 
*  Nested folders:- create folder inside folder   [data/user/notes]
* unlink():- it will delete the file.
*  readdir():- it will shows what is in the folder.*/




/* important concept:- if fill not exist then we write it then it will show error [await fs.readFile("abc.txt", "utf8");] and not handle properly it will crash it */
/* so we use try { // risky operation } catch(error) { // for error handling}. */
/* example:- const fs = require("node:fs/promises");

async function main() {
  try {
    const data = await fs.readFile("abc.txt", "utf8");

    console.log(data);
  } catch (error) {
    console.log("File could not be read.");
  }
}

main(); 

if abc.txt will not present then it will show [File could not be read.] it will handle program. 
*/

/*  writefile() -> write in file ->   readFile() -> read in file ->  appendFile() -> add something on end of the file   
  mkdir() -> create folder   -> unlink() -> file delete   readdir -> read contents in the folder.

  */