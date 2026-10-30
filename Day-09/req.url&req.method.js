/* suppose we enter URL in a browser :

http://localhost:4000/api/health

inside request: (req.url) here it value (/api/health)  & (req.method) here it value (GET)
if client will sent POST/api/users then  [req.url = /api/users  req.method = POST]









res.writeHead():- It sets the response status code and headers 
eg- res.write(200, {"content-Type": "application/json"});   here 200=ok, content-type=response in json format.




res.end():- It will finish the response we can send response body in it.
eg- res.end(JSON.stringify({ message: "Hello"}));   op:- {"message":"Hello"} and stringify() will that convert javascript object in JSON text.












Incoming POST body - understanding of chunks:- 
eg:-
 const body = [];                                 // Create a empty array here we store incoming chunks.

req.on("data", (chunk) => {                       // Here body chunk will come and callback will runs
  body.push(chunk);                               // save that chunk into array
});

req.on("end", () => {                             //here whole request body will received than callback will runs
  const text = Buffer.concat(body).toString();    //buffer- add all chunks & tostring- collected bytes wwill convert into text
  console.log(text);                              // print complete body in a terminal
});     
*/