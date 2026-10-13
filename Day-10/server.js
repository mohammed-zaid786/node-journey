const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON request bodies
app.use(express.json());

// Initial bookstore collection
let books = [
  {
    id: 1,
    title: "Node.js Basics",
    author: "Rahul sharma",
    price: 399,
    featured: true
  },
  {
    id: 2,
    title: "Express.js Guide",
    author: "Mukesh Verma",
    price: 499,
    featured: true
  },
  {
    id: 3,
    title: "JavaScript Fundamentals",
    author: "Yuvraj Singh",
    price: 299,
    featured: false
  }
];

// GET: all books
app.get("/books", (req, res) => {
  res.status(200).json({
    success: true,
    count: books.length,
    books: books
  });
});

// GET: featured books
// Keep this route before /books/:id
app.get("/books/featured", (req, res) => {
  const featuredBooks = books.filter((book) => book.featured);

  res.status(200).json({
    success: true,
    count: featuredBooks.length,
    books: featuredBooks
  });
});

// GET: system status
app.get("/api/system-status", (req, res) => {
  res.status(200).json({
    success: true,
    status: "running",
    service: "Bookstore Catalog API",
    port: PORT
  });
});

// POST: add a new book
app.post("/books", (req, res) => {
  const { title, author, price, featured = false } = req.body;

  if (
    typeof title !== "string" ||
    !title.trim() ||
    typeof author !== "string" ||
    !author.trim() ||
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price < 0 ||
    typeof featured !== "boolean"
  ) {
    return res.status(400).json({
      success: false,
      message: "Provide a title, author, non-negative numeric price and optional boolean featured value."
    });
  }

  const newBook = {
    id: books.length
      ? Math.max(...books.map((book) => book.id)) + 1
      : 1,
    title: title.trim(),
    author: author.trim(),
    price,
    featured
  };

  books.push(newBook);

  res.status(201).json({
    success: true,
    message: "Book added successfully",
    book: newBook
  });
});

// PUT: update a book
app.put("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((item) => item.id === id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      success: false,
      message: "Book ID must be a positive integer"
    });
  }

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book not found"
    });
  }

  const { title, author, price, featured } = req.body;

  if (
    (title !== undefined &&
      (typeof title !== "string" || !title.trim())) ||
    (author !== undefined &&
      (typeof author !== "string" || !author.trim())) ||
    (price !== undefined &&
      (typeof price !== "number" ||
        !Number.isFinite(price) ||
        price < 0)) ||
    (featured !== undefined && typeof featured !== "boolean")
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid book fields"
    });
  }

  if (title !== undefined) book.title = title.trim();
  if (author !== undefined) book.author = author.trim();
  if (price !== undefined) book.price = price;
  if (featured !== undefined) book.featured = featured;

  res.status(200).json({
    success: true,
    message: "Book updated successfully",
    book
  });
});

// DELETE: remove a book
app.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      success: false,
      message: "Book ID must be a positive integer"
    });
  }

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Book not found"
    });
  }

  const deletedBook = books.splice(bookIndex, 1)[0];

  res.status(200).json({
    success: true,
    message: "Book deleted successfully",
    book: deletedBook
  });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Bookstore API running at http://localhost:${PORT}`);
});