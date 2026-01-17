const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect(
  "mongodb+srv://pkumar15917_db_user:Priyesh12345@cluster0.ab9pecn.mongodb.net/mernTask1?retryWrites=true&w=majority"
)
.then(() => {
  console.log("MongoDB Atlas connected");
})
.catch((err) => {
  console.log("MongoDB connection error:", err.message);
});

// Simple API
app.get("/api/message", (req, res) => {
  res.json({
    text: "MERN backend connected with MongoDB Atlas successfully"
  });
});

// Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
