const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemon = require("nodemon");

require("dotenv").config();

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


app.post('/', (req, res) => {
  res.send('Got a POST request')
})
app.get('/user', (req, res) => {
  res.json({
    name: 'Sophia Thomas', 
    first_name: 'Sophia',
    last_name: 'Thomas'
  })
})
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

/**
 * Sub-routers for our main router, we should have one sub-router per "entity" in the application
 */

// Root URL
app.get("/", (req, res) => {
  res.json({ 
    message: "Hello from backend!",
    message2:"xoxoxoxoxoxo "
  }).status(200);
});
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
