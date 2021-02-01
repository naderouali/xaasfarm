const router = require("express").Router();

const verify = require("./TokenVerif");

const imageController = require("../controllers/ImageController");


router.post("/read/all", verify, imageController.readImages);




module.exports = router;
