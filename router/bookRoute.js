var express = require('express');
var router = express.Router();
var storeController = require('../controller/bookController')


router.get("/books",storeController.getBookList);
router.get("/book/details/:bookId",storeController.getBookDetails);
router.post("/book/save",storeController.saveBook);

module.exports = router