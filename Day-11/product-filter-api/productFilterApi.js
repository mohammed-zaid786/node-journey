const express = require("express");

const app = express();

app.use(express.json());

// Sample products
const products = [
  {
    id: 1,
    name: "Laptop",
    category: "electronics",
    price: 50000
  },
  {
    id: 2,
    name: "Mobile",
    category: "electronics",
    price: 20000
  },
  {
    id: 3,
    name: "Headphones",
    category: "accessories",
    price: 1500
  },
  {
    id: 4,
    name: "Keyboard",
    category: "accessories",
    price: 1000
  },
  {
    id: 5,
    name: "Tablet",
    category: "electronics",
    price: 25000
  }
];

// 1. Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// 2. Search and filter products
app.get("/api/products/search", (req, res) => {
  const category = req.query.category;
  const keyword = req.query.keyword;
  const rawMaxPrice = req.query.maxPrice;
  const sort = req.query.sort || "asc";

  let result = [...products];

  // Filter by category
  if (category) {
    result = result.filter(
      (product) =>
        product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Search by product name
  if (keyword) {
    const searchText = keyword.toLowerCase();

    result = result.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText)
    );
  }

  // Filter by maximum price
  if (rawMaxPrice !== undefined) {
    const maxPrice = Number(rawMaxPrice);

    if (!Number.isFinite(maxPrice) || maxPrice < 0) {
      return res.status(400).json({
        error: "Please enter a valid maximum price"
      });
    }

    result = result.filter(
      (product) => product.price <= maxPrice
    );
  }

  // Sort products by price
  if (sort !== "asc" && sort !== "desc") {
    return res.status(400).json({
      error: "Sort must be asc or desc"
    });
  }

  result.sort((a, b) => {
    if (sort === "desc") {
      return b.price - a.price;
    }

    return a.price - b.price;
  });

  // Pagination
  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 10);

  if (
    !Number.isInteger(page) ||
    page < 1 ||
    !Number.isInteger(limit) ||
    limit < 1 ||
    limit > 100
  ) {
    return res.status(400).json({
      error: "Page must be positive and limit must be between 1 and 100"
    });
  }

  const total = result.length;
  const offset = (page - 1) * limit;

  const paginatedProducts = result.slice(
    offset,
    offset + limit
  );

  res.json({
    page: page,
    limit: limit,
    total: total,
    totalPages: Math.ceil(total / limit),
    products: paginatedProducts
  });
});

// 3. Get a single product by ID
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      error: "Product ID must be a positive integer"
    });
  }

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return res.status(404).json({
      error: "Product not found"
    });
  }

  res.json(product);
});

// 4. Add a new product
app.post("/api/products", (req, res) => {
  const { name, category, price } = req.body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof category !== "string" ||
    !category.trim() ||
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price < 0
  ) {
    return res.status(400).json({
      error: "Name, category and a valid non-negative price are required"
    });
  }

  const newProduct = {
    id: Math.max(0, ...products.map((item) => item.id)) + 1,
    name: name.trim(),
    category: category.trim(),
    price: price
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    product: newProduct
  });
});

// Start server
app.listen(3000, () => {
  console.log("Product API running on port 3000");
});