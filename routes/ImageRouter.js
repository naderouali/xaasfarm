const router = require("express").Router();

const verify = require("./TokenVerif");

const imageController = require("../controllers/ImageController");


router.get("/read", verify, imageController.readImage);




module.exports = router;
