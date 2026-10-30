const express = require("express");

const app = express();

// Here is the middleware that passes JSON body
app.use(express.json());

app.post("/api/users", (req, res) => {     //it handle post request it used to submit the data in the server.
  const name = req.body.name;
  const age = req.body.age;

  res.json({                               //server send JSON response to the client.
    message: "User data received",
    name: name,
    age: age
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


/* op:- {
    "message": "User data received",
    "name": "Rahul",
    "age": 22
} 

we send body in post request; 
{ "name": "Rahul",
   "age":  22 }
   
   */