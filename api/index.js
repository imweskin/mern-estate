import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("conntected to MongoDB !");
}).catch((error) => {
    console.log("could not connect to MongoDB : ", error);
});

const app = express();

app.listen(3000, () => {
    console.log("server is running on port 3000 !!!");
});