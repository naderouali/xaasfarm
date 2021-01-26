const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstname: { type: String },
        lastname: { type: String },
        email: {
            type: String,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            minlength: 1,
        },
        birthday: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
