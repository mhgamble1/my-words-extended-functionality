const express = require("express");

// wordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /word.
const wordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the words.
wordRoutes.route("/word/").get(function (req, res) {
  let db_connect = dbo.getDb("employee");
  db_connect
    .collection(process.env.CURRENT_DB_NAME)
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single word by id
wordRoutes.route("/word/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: req.params.id };
  db_connect
    .collection("vocab")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new word.
wordRoutes.route("/word/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    // person_name: req.body.person_name,
    // person_position: req.body.person_position,
    // person_level: req.body.person_level,

    word: req.body.word,
    source: req.body.source,
    language: req.body.language,
    datetime: req.body.datetime,
  };
  db_connect.collection("vocab").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a word by id.
wordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      // person_name: req.body.person_name,
      // person_position: req.body.person_position,
      // person_level: req.body.person_level,

      word: req.body.word,
      source: req.body.source,
      language: req.body.language,
      datetime: req.body.datetime,
    },
  };
  db_connect
    .collection("vocab")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a word
wordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("vocab").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});

module.exports = wordRoutes;