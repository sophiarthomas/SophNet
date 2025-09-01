const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemon = require("nodemon")

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // allow all origins 
app.use(express.json());

// Connect to MongoDB
// const mongoUri = process.env.MONGODB_URI; 
// // if (!mongoUri) {
// //   throw new Error("MONGODB_URI is not defined in .env")
// // }
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.json({ 
    message: "Hello from Express backend!",
    message2:"xoxoxoxoxoxo "
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
