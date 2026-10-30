/* Client-Server Architecture */
/* client:- Is a apllication or device that want something from the server.
example- open google in chrome, see profile in mobile app,login in website & weather details in weather app.

* Server:- Is a program or a computer that receives client request and share response.
examples- check login details, send user profile data , share products list & It ensure the applications works properly.

*Request- If we open a url in a browser and browser ensure the server it is right application  this called request.
*Response- server will provide answer is called response.
*/











/* HTTP Protocol:- It is a set of rules of HTTP that defines how client sends request & how server response.
eg:- if person sends a parcel so it will follow address & delivery rules.

*HTTP- Rules of communication.
*URL- Address of which resource that can be access.
*port- Entry Point to Reach the server. 
example:- http://localhost:4000/api/health
http://- protocol
localhost- current computer
4000- port number[not fixed http rule]
/api/health- request path


*  IMP PARTS OF HTTP REQUEST: [Method,URL,Headers,Body]
*Method- It will Say to the server which type of action client will perform.
-Get: Retrive Data [see user list]
-POST: Send Data or Create resources [create new user]
-PUT: Replace the resources/ update it [replace profile details]
-PATCH: Specific part will update in resources [only user name change]
-DELETE: Delete the Resources [remove user]

*URL- Where request will sent (for eg we have two routes in a server)
-/api/health: to check the server.
-/api/users: Its for users.           (both are in a single server but url path is different)

*HEADERS: extra information (it will send meta data of request)

*BODY:  Actual data (here the type of data that can be send with request)











/*  HTTP RESPONSE (how server will answer)  
* Here 3 imp Parts of Servers of response.(it will shows the response category)

*Status Code: It is a number that tell what is going with request.
-200 OK: Request complete successfully.
-201 CREATED: New Resources Will Created.
-400 BAD REQUEST: Pronlem in request.
-404 NOT FOUND: Requested route or resources will not found.
-500 INTERNEL SERVER ERROR: unexpected problem in a server. 

*Response Header: Server will sends response with headers.
eg- HTTP/1.1 200 Ok     /   content-type: application/json   (here 200 ok will ensures request will successful & content type says response body in JSON format)


*Reponse Body/Payload: In body has a actual result. {"statu": "ok", "message": "server is running"} it is payload of response.










/*  NODE.JS HTTP Module (Built in module already in node.js is called native module. don't install npm package for used it here HTTP is a node.js built in module)
*http build-in module in node.js- we create http servers for use it, received request, read request method and URL & send response status, headers and body.
* difference b/w native node.js HTTP & Express are:
* Native Node.js HTTP- const http =require("node:http");    [it give low level control so many works manually like routing, body parsing and response handling.]
* EXPRESS- const express = require("express");              [It gives convinient tools for routing and middleware and repititive task are simplify] 
*/

















