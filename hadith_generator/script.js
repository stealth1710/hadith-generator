const express = require("express");
const app = express();
const http = require("http");
const mongoose = require("mongoose");
const Hadith = require("./models/hadith");
const uri = "mongodb://localhost:27017/hadiths";
const cors = require("cors")


app.use(cors());

// Connect to MongoDB
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Optional: Listen for connection errors after initial connection
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Define a test route
app.get("/", (req, res) => {
  res.send("<h1>Bismillah</h1>");
});
app.get("/hadiths", async (req, res) => {
    try {
      const hadiths = await Hadith.find(); // Retrieve all documents
      res.json(hadiths);
    } catch (error) {
      res.status(500).json({ message: "Error fetching hadiths", error });
    }
  });

app.get("/hadiths/random", async (req, res) => {
    try {
      const randomHadith = await Hadith.aggregate([{ $sample: { size: 1 } }]); // Fetch one random document
      res.json(randomHadith[0]); // Return the first (and only) result
    } catch (error) {
      res.status(500).json({ message: "Error fetching random hadith", error });
    }
  });

app.get("*",(req,res)=>{
    res.status(404)
    res.send("<h1>404 not found</h1>")
})
// Start the Express server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});