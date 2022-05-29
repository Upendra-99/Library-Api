const express = require("express");
const app = express();
const LibraryController = require("../LibraryController/library");
const bodyParser = require("body-parser");

app.use(bodyParser.json([]));

// to get list of all books;
app.get("/AllBooks", LibraryController.GetAllBooks);

// to add a book in library;
app.post("/CreateBook", LibraryController.CreateBook);

// to fetch info based on category name;
app.get("/getCategory/:category", LibraryController.getCategory);

// to fetch info based on Book name;
app.get("/getTitle/:title", LibraryController.getTitle);

// to fetch info based on Author name;
app.get("/getAuthor/:author", LibraryController.getAuthor);

// to order a book using book_id;
app.get("/orderBook/:bookId", LibraryController.orderBook);

// to ruturn a book using book_id;
app.get("/returnBook/:bookId", LibraryController.returnBook);

// to track status of the book like available in store, ordered for reading or returned;
app.get("/trackStatus/:bookId", LibraryController.trackStatus);

module.exports = app;
