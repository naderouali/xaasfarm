const router = require("express").Router();
const verify = require("./TokenVerif");

const userController = require("../controllers/UserController");

//validation
// const schema ={
//   email: Joi.string().min(1).required().email()
// }


// router.get("/", verify, (req, res) => {
//     User.find()
//         .then((users) => res.json(users))
//         .catch((err) => res.status(400).json("Error: " + err));
// });

router.post("/register", userController.register)
router.post("/login", userController.login)




router.post("/profile", verify, userController.profile);


module.exports = router;
