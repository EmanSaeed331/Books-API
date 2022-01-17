var express = require('express');
var router = express.Router();
var storeController = require('../controller/storeController')


router.get("/store",storeController.getStoreList);
router.post("/store/save",storeController.saveStore);

module.exports = router