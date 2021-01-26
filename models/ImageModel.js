const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImageSchema = new Schema(
    {
        name: { type: String, required: true, trim: true, minlength: 1 },
        url: { type: String, trim: true, minlength: 1 },
    },
    { timestamps: true }
);

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;