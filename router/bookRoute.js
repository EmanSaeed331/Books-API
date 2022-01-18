var express = require('express');
var router = express.Router();
var bookController = require('../controller/bookController')


router.get("/books",bookController.getBookList);
router.get("/book/details/:bookId",bookController.getBookDetails);
router.post("/book/save",bookController.saveBook);

module.exports = router