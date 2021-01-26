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
//const iconRouter = require("./routes/IconRouter.js");
// const missionsRouter = require("./routes/missions.route");
// const photosRouter = require("./routes/photos.route");

//routes middlewares
app.use("/api/user", userRouter);
//app.use("/api/icon", iconRouter);
// app.use("/api/profile", missionsRouter);
// app.use("/photos", photosRouter);


// app.use(express.static(__dirname + '/client/build'));
// app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/client/build/index.html')))

//listening to server
app.listen(port, () => {
    console.log(`Server is Running on port: ${port}`);
});
