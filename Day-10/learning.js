/* what API & Server: 

*API- API is interface through api one software get data and functionality from another software.

example:- suppose we create online book store here (user can see book list, user can see featured book and any system will check if it is working or not)
In that req will answer we a have a server [client (browser/app)sends req] -> [express.js server(it understand the req & select the route)] -> [JSON response(client received the data)]

eg- Client req (GET/books)
 {
  "books": [
    {
      "id": 1,
      "title": "Node.js Basics",
      "price": 399
    }
  ]
}




*DIFF B/W NODE.JS & EXPRESS.JS:
-Node.js: Js outside the browser like environment our computer run in server-side.  eg- node server.js
-Express.js: web framework based on Node.js than help to make easily routes and HTTP responses.   eg- app.get('/book',...) 
*/










/* what is app.listen() & port:-
eg- suppose in at a time in our comnputer here multiple computer runs together & port is a number that help to send the network traffic to the right application.
*localhost- own computer.
*3000- port number of a server.
*http://localhost:3000- our computer has 3000 accessible port [   app.listen(3000, () => { console.log("server started");});  it means express server has accept request on port 3000 ]
* every time port will change in code used [const PORT = process.env.PORT || 3000;] here process.env- it take port value from environment & ||3000- if usuable will not find it will used default value 3000 
* ${PORT}- It is a template literals.








*what is routing:- It can decide which code will execute on the basis of URL and HTTP methods.
forexample- GET/books(get all books), GET/books/featured(only take featured books), GET/api/system-status(it tells status of the server)
          POST/books(take add new books), PUT/books/1(Update book ID 1),  DELETE/books/1(delete ID 1 book).
*url and method combined together it will help to identify the request.     

*app.get: Read the data
eg- app.get("/books", (req, res) => {res.send("All books");});       //if we open /books in browser it will response all book open.

*app.post: Create the data
eg- app.post("/books", (req, res) => {res.send("New book request received");});   //POST work to create a new data.

*app.put()- Update the data
eg- app.put("/books/1", (req, res) => {res.send("Book 1 update request received");});    //it used to replace or update the any resources but actual update that modify the codes.

*app.delete()- Delete the data
eg- app.delete("/books/1", (req, res) => {res.send("Book 1 delete request received");});   //it main purpose to delete the resources.

*GET=read, POST=create, PUT=update/replace, DELETE=remove. it is common convention in real applications exact behaviour depends on API designed.












* What is Response helpers: [res.send(), res.join(), res.status()] server work has not only receive request also it sends the useful response.

*res.send()- It is used for to send the text or other supported response type.
eg-app.get("/hello", (req, res) => { res.send("Hello from Express");});          //op:- Hello from express

*res.json()- It will serialize javaScript object into JSON response and set appropriate JSON content type header as usally [application/json;charset=utf-8]
eg-app.get("/student", (req, res) => {
  res.json({
    name: "Rahul",
    course: "Node.js",
    day: 10
  });
});
//op:- {
  "name": "Rahul",
  "course": "Node.js",
  "day": 10
}

*res.status(): It shows  here 404 status code that tells requested resources were not found in it.
eg- app.get("/not-found", (req, res) => {
  res.status(404).send("Resource not found");
});
-200: ok [request successful]
-201: created  [resource will create]
-400: bad request [problem in request]
-404: not found [resources will not found]
-500: Internal Server Error [unexpected problem in a server]












* Response chaining:

eg-
res.status(200).json({                         //res.status it will set status. & .json(...) send json response. Client were received status and response body body both. so res.stats.json were write in a single statement.

  success: true,
  message: "Books fetched successfully"
});                                                 //here it called response chain.












* (node --watch) through hot-reloading: normally we start server with node.js and change the code and running process will not load new code server will manually restart.
In ModernNode.js used built-in watch mode:- [node --watch server.js]   // then now file will save node.js detect the changes and restart the process. 
// 












/* what is Express:  */


// const express = require("express");                  //import express package

// const app = express();                               //const app- application in app variables & express-create application

// app.get("/", (req, res) => {                          //it create route for GET request.[req-info from client site & res-way to send response to client]
//     res.send("Hello! My Express server is working."); //res.send- send response to client 
// });

// app.listen(3000, () => {                               //app.listen- start server with specified port
//   console.log("Server is running on port 3000");
// });*/





























/* CONCEPT TO UNDERSTAND */ /*

1-   app.use(express.json());-  It is a middleware it is a function that works on between request and final route handler [express.json- parse incoming JSON request body & req.body- for read data.]
eg- client sent post request

{ 
"title: "learn express",
"author": "Nagarjun gupta",
"price": 450
}
//In after  express JSON middleware [console.log(req.body.title);     op:- learn express]





2-    Diffrence b/w req and response:-
req= It has url parameters , query values, headers and parsed body information.
res= It sends the status code, headers and response body.







3- book.filter():-  filter() it will check the item of array and return new array  item that satisfy the condition 
for eg [{ id: 1, featured: true} , { id: 2, featured: true}, { id: 3, featured: false} ] after filter [ { id: 1, featured: true}, { id: 2, featured: true}] it means without delete the original array new list will come.


4- req.params.id:- it is a route paramete in url that converts to req.params.id string "2".number() in 2.

5- find():- to find particular book in id,  findIndex():- find array index of book,  push():- new book will add in the end of array,  splice{}:- remove book from the array. */

