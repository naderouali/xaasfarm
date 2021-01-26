const router = require("express").Router();
const verify = require("./TokenVerif");

const userController = require("../controllers/UserController");


router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/profile", verify, userController.profile);


module.exports = router;
