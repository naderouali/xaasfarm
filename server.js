const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//connect to db
const uri = process.env.MONGODB_URL;

console.log(uri)

mongoose.connect(uri || "mongodb://localhost/xaasfarm", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongoDB DB connection established successfully");
});

//import routes
const userRouter = require("./routes/UserRouter.js");
const imageRouter = require("./routes/ImageRouter.js");

//routes middlewares
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);


app.use(express.static(__dirname + '/client/build'));
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/client/build/index.html')))

//listening to server
app.listen(port, () => {
    console.log(`Server is Running on port: ${port}`);
});
