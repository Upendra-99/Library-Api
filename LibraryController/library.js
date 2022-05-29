const BookModel = require("../Models/libraryModel");

const GetAllBooks = async (req, res, next) => {
  const response = await BookModel.find({});
  res.json({ message: "Done", data: response });
};

const CreateBook = async (req, res, next) => {
  let bookData = req.body;
  let payload = { ...bookData, Availability: true };
  await BookModel.insertMany([payload]);
  res.json({ status: "Success", message: "Book Successfully Created" });
};

const getCategory = async (req, res, next) => {
  let category = req.params.category;
  //   console.log(category);

  let response = await BookModel.find({ Category: category });
  if (response.length == 0) {
    res.json({ message: "failed" });
    return;
  }
  res.json({ status: "Success", data: response });
};
const getTitle = async (req, res, next) => {
  let title = req.params.title;
  //   console.log(category);

  let response = await BookModel.find({ Title: title });
  if (response.length == 0) {
    res.json({ message: "failed" });
    return;
  }
  res.json({ status: "Success", data: response });
};
const getAuthor = async (req, res, next) => {
  let author = req.params.author;
  //   console.log(category);

  let response = await BookModel.find({ Author: author });
  if (response.length == 0) {
    res.json({ message: "failed" });
    return;
  }
  res.json({ status: "Success", data: response });
};

module.exports = { GetAllBooks, CreateBook, getCategory, getTitle, getAuthor };
