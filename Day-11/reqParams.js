const express = require("express");

const app = express();

app.get("/api/items", (req, res) => {
  const category = req.query.category || "all";     //if category will not found it show all
  const sort = req.query.sort || "asc";             //asc used for asending order and desc for descending order. it will sort products acc to its price. [asc- will give cheap product first & desc- will give expensive product first.]

  res.json({
    message: "Query received",
    category: category,
    sort: sort
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/* we used query parameters in as; product search, filterring,sorting, pagination, search keywords and optional conditions. In route condition after ? so [req.query] */

// op:-  http://localhost:3000/api/items?category=mobile&sort=desc
// {
//   "message": "Query received",
//   "category": "mobile",
//   "sort": "desc"
// }

// op2:-  http://localhost:3000/api/items
// {
//   "message": "Query received",
//   "category": "all",
//   "sort": "asc"
// }