/*
* How Express Handles Server Request?
-suppose we open a website on a browser or API call from frontend.
eg; Ur applications receives these req are-
'GET /users- Server decides req is valid or not, logged it or not, get data to user and return the error
      client /frontend(GET /user send request) -> Middleware1(logger-records url and req time) -> Middleware2(Authentication-check req allowed or not) ->Route handler(it will make response) -> Response to Client(200 ok users data)
'In this process middleware is functions thats works between req and response.









*What is Middleware?
-It is a function that execute between client req and final response.(it will check or modify,sends response or send control to next middleware)
 eg; express middleware has mainly three arguments:
    functiom myMiddleware(req, res, next)
     {  //Do some work
       next();
    }
*req- Info thats send from the clients [req.method,req.url,req.headers,req.params]
*res- To send the response to client  [res.send("hello"), res.json({message: "success"}), res.status(200)]
*next- Forward the control(it tell to express to go next matching middleware or handler) [next()]


*middleware- It works not only logging it also perfrom authentication, validation, req timing, CORS handling and error handling










*next()