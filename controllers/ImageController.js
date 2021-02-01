const router = require("express").Router();
let Image = require("../models/ImageModel");
const jwt = require("jsonwebtoken");
var shortId = require('shortid');


const readImages = async (req, res, next) => {

    const id = req.user._id;
    Image.find({})
        .then((doc) => {
            // console.log(doc)
            return res.json({
                success: true,
                images: doc
            })

        }).catch(err => {
            return res.json({
                success: false,
                message: "mongoose-error"
            })
        })

}




module.exports = {
    readImages
}