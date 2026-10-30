/* Module: small resusable piece of code that in a file and use in another file 
for eg:- maths.js [func add(a,b) { return a + b; }] then we get math.js in app.js
if we use module system: math.js add()  --> app.js use add()    that is modular programming. it help to easily managable code */


/* P-1 Common JS:- In traditional Node.js use single module system but in Common JS has two important things 
   (module.exports) & (require()) 
Common JS = Export with module.exports +  Import with require().
example:- math.js & app.js file  
math.js: add()subtract() ---> module.exports-> export
app.js: require("./math") ---> add()subtract()

CommonJs
Export:- module.exports
Import:- require()

*/  



/* P-2    ES Modules:- It is commonly used in modern Js [ES Module = export + import] */
/* we enable Es Module in a project the add { "type: "module" } in package.json */
/* Diffrence:-
Common Js: const { add } require("./math"); 
Es Module: import { add } from "./math.js";  //In ESM to import a local files it will imp to write extension
 
Common Js = require + module.exports
ESM = import + export

*/



/* P-3  What Is Node Package Manager npm? :- It is a system that install and manage the packages of  JS/NODE.js project.
* Packages: Another developer reusable code/library that will use in our project.
*  we want chalk in our project instead of written a code[npm install chalk] npm package  will download and manage   */



/* P-4   (npm init -y):- It will added package.json automatically in our project & package.json is like a identity card + instructions inside a project
like project name,version,scripts,dependencies,dev dependencies,module typr etc
*/



/* P-5   (node_modules):- When we install [npm install chalk] then npm download a package usually node_module/package.json/package-lock.json/... here actual code of installed packages. we can't commit node_modules so  we write .gitignore (node_modules)*/



/* P-6 (package-lock.json):- when we install [npm install chalk] it will update or create package-lock.json 
* package.json: It will show which packages needed to our project
* package-lock.json: Excatly which one dependency tree/version/resolved pavkage used in it. it will lock exact installation state.
* Real-life Eg:- we say pizza in a restaurant like (package.json) and your friend write exact recipe like (chees,sauce,base,quantity) this is package.json like concept.  */



/* P-7  what is dependencies:- If your application is directly depends on package like ["dependencies"; { "express": "..."}] then it called dependencies.
simple- To run the production application for its require packages = dependencies
*/



/* P-8  devDependencies:- some packages needs on only development time like[ testing,linting, development tools, formatting etc.] and this type packages in it called devDependencies.
install: (npm install --save-dev chalk)  inshort: (npm install -D chalk)  we install chalk on behave of chalk.*/



/* P-9   Custom npm scripts:- In Package.json like
"scripts": {
"start": "node" index.js",
"dev": "node --watch index.js" 
}
*then (npm start):- actually run node index.js & (npm run dev):- run node --watch index.js
*Actually:
npm start
     ↓
package.json
     ↓
scripts
     ↓
"start": "node index.js"
     ↓
node index.js

*similarly:
npm run dev
      ↓
"dev": "node --watch index.js"
      ↓
Node starts in watch mode
*/
