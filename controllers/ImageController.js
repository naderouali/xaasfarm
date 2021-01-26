const router = require("express").Router();
let Image = require("../models/ImageModel");
const jwt = require("jsonwebtoken");
var shortId = require('shortid');



// const readIcon = async (req, res, next) => {
//     Icon.findById(req.params.owner)
//     .then(new Promise((resolve, reject) => {
//         s3.createBucket({
//             Bucket: BUCKET_NAME
//         }, function () {
//             s3.getObject(params, function (err, data) {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     console.log("Successfully dowloaded data from bucket");
//                     resolve(data);
//                 }
//             });
//         });
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// }

const readImage = async (req, res, next) => {

    const id = req.user._id;
    const image = await Image.findOne({ _id: id });

    if (!image) return res.json({
        success: false,
        message: "image-not-found"
    })

    console.log(image)

    return res.json({
        success: true,
        image: image
    })

}




module.exports = {
    readImage
}