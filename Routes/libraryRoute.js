const express = require("express");
const app = express();
const LibraryController = require("../LibraryController/library");
const bodyParser = require("body-parser");

app.use(bodyParser.json([]));

app.get("/AllBooks", LibraryController.GetAllBooks);
app.post("/CreateBook", LibraryController.CreateBook);
app.get("/getCategory/:category", LibraryController.getCategory);
app.get("/getTitle/:title", LibraryController.getTitle);
app.get("/getAuthor/:author", LibraryController.getAuthor);

module.exports = app;
