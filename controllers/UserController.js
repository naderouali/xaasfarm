const router = require("express").Router();
let User = require("../models/UserModel");
const bcrypt = require("bcrypt");
//const Joi = require('@hapi/joi');
const jwt = require("jsonwebtoken");


const register = async (req, res, next) => {
    //validate data
    //const validation = Joi.validate(req.body, schema);

    //checking if email exists already in DB
    console.log(req.body);
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist)
        return res.status(400).send("Cette e-mail est déjà enregistré, essayer de se connecter");
    console.log(req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = hashedPassword;
    const birthday = Date.parse(req.body.birthday);

    const newUser = new User({ firstname, lastname, email, password, birthday });

    newUser
        .save()
        .then(() => res.json({ newUser: newUser._id }))
        .catch((err) => {
            console.log(err)
            res.status(400).json("Error: " + err)
        });
}


const login = async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Cette e-mail n'est pas enregistrée, essayer de créer un compte");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("wrong password");
    else {
        //create and assign a jwt
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: 2400 * 60 * 60 });
        console.log(token);
        res.header("auth-token", token).send(token);
    }

}

const profile = async (req, res, next) => {

    const id = req.user._id;
    const user = await User.findOne({ _id: id });

    if (!user) return res.json({
        success: false,
        message: "user-not-found"
    })

    // console.log(user)

    return res.json({
        success: true,
        user: user
    })

    //const emailuser = User.findbyOne({ email: req.iduser });
}

module.exports = {
    register, login, profile
}