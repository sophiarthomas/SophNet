// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const nodemon = require("nodemon");
// const Portfolio = require("./model/Portfolio")
import express from "express";
import cors from "cors";
import mongoose from "mongoose"; 
import nodemon from "nodemon"; 
import dotenv from "dotenv";
import userRouter from './routes/user.js';
import User from "./model/user.js";



dotenv.config()

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Middleware to allow cross-origin requests 
app.use(cors()); 

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI; 
if (!mongoUri) {
  throw new Error("MONGODB_URI is not defined in .env")
}
 mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));


// Create a new portfolio object 
const portfolio = new User({
  name: "Sophia Thomas", 
  email: "sophiart03@gmail.com", 
  age: 21, 
  hobbies: [
    "yoga", 
    "crocheting"
  ]
})

// await portfolio.save();  // will create duplicates 
// const firstPortfolio = await Portfolio.find({});
// console.log(firstPortfolio)
/**
 * Sub-routers for our main router, we should have one sub-router per "entity" in the application
 */

const Routes = (app) => {
  // Root URL
app.get("/", (req, res) => {
  res.send({ 
    // portfolio: {firstPortfolio},
    message: "Hello from backend!",
    message2:"Howdy ya'll my name is Sophia Thomas and I am a recent computer science graduate looking to a find SWE infrastrucutre role. Ever since hight school I have been interested in the rapid growth of tech and I decided I wanted to be apart of the development!  "
  }).status(200);
});

app.use('/user', userRouter)
}
Routes(app)

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
