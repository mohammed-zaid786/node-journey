const express = require("express");       //import express package in our code

const app = express();                    // express create apploication 

app.get("/api/items/:id", (req, res) => {  // it execute the callback were client ask request from GET.
  const id = req.params.id;

  res.json({                              // server sends JSON response
    message: "Item found",
    id: id
  });
});

app.listen(3000, () => {                    // server will start on 3000 port
  console.log("Server running on port 3000"); 
});

// op:- {
//   "message": "Item found",
//   "id": "102"
// }               Route : id -> req.params.id  [want item can exactly i want]
