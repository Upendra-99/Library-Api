const BookModel = require("../Models/libraryModel");
const TrackModel = require("../Models/trackBookModel");

const GetAllBooks = async (req, res, next) => {
  try {
    const response = await BookModel.find({});
    res.json({ message: "Done", data: response });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const CreateBook = async (req, res, next) => {
  try {
    let bookData = req.body;

    let payload = { ...bookData, Availability: true };

    let response = await BookModel.insertMany([payload]);

    await TrackModel.insertMany([
      {
        bookId: response[0]._id,
        trackingData: [],
      },
    ]);

    res.json({ status: "Success", message: "Book Successfully Created" });
  } catch (error) {
    res.status(400).json({ status: "Failed" });
  }
};

const getCategory = async (req, res, next) => {
  try {
    let category = req.params.category;

    let response = await BookModel.find({ Category: category });
    if (response.length == 0) {
      res.json({ message: "failed" });
      return;
    }
    res.status(200).json({ status: "Success", data: response });
  } catch (error) {
    res.status(400).json({ status: "Failed" });
  }
};
const getTitle = async (req, res, next) => {
  try {
    let title = req.params.title;

    let response = await BookModel.find({ Title: title });
    if (response.length == 0) {
      res.json({ message: "failed" });
      return;
    }
    res.json({ status: "Success", data: response });
  } catch (error) {
    res.status(400).json({ status: "Failed" });
  }
};
const getAuthor = async (req, res, next) => {
  try {
    let author = req.params.author;

    let response = await BookModel.find({ Author: author });
    if (response.length == 0) {
      res.json({ message: "failed" });
      return;
    }
    res.json({ status: "Success", data: response });
  } catch (error) {
    res.status(400).json({ status: "Failed" });
  }
};

const orderBook = async (req, res, next) => {
  try {
    let bookId = req.params.bookId;

    let payload = {
      status: "ordered",
      timeStamp: `${new Date()}`,
    };

    let response = await TrackModel.updateOne(
      { bookId: bookId },
      { $push: { trackingData: payload } }
    );
    await BookModel.updateOne(
      { _id: bookId },
      { $set: { Availability: false } }
    );
    let response2 = await BookModel.findOne({ _id: bookId });
    res.json({
      status: "success",
      message: `${response2.Title} has been ordered`,
    });
  } catch (error) {
    res.status(400).json({ status: "Failed" });
  }
};

const returnBook = async (req, res, next) => {
  try {
    let bookId = req.params.bookId;
    let payload = {
      status: "returned",
      timeStamp: `${new Date()}`,
    };

    let response = await TrackModel.updateOne(
      { bookId: bookId },
      { $push: { trackingData: payload } }
    );
    await BookModel.updateOne(
      { _id: bookId },
      { $set: { Availability: true } }
    );
    let response2 = await BookModel.findOne({ _id: bookId });
    res.json({
      status: "success",
      message: `${response2.Title} has been returned`,
    });
  } catch (error) {
    res.status(400).json({ status: "Failed" });
  }
};

const trackStatus = async (req, res, next) => {
  try {
    let bookId = req.params.bookId;
    let response = await TrackModel.find({ bookId: bookId });
    console.log(response);
    res.json({ status: true, data: response[0].trackingData });
  } catch (error) {
    res.status(400).json({ status: "Failed" });
  }
};

module.exports = {
  GetAllBooks,
  CreateBook,
  getCategory,
  getTitle,
  getAuthor,
  orderBook,
  returnBook,
  trackStatus,
};
