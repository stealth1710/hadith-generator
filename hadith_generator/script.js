const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Hadith = require("./models/hadith");


const cors = require("cors")
require("dotenv").config();

app.use(cors());
const uri = process.env.MongoURI;
// Connect to MongoDB
mongoose
  .connect(uri)
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

app.get("/hadiths/random", async (req, res) => {
  try {
    const randomHadith = await Hadith.aggregate([{ $sample: { size: 1 } }]);

    if (!randomHadith || randomHadith.length === 0) {
      return res.status(404).json({ message: "No hadiths found." }); //  safe fallback
    }

    res.json(randomHadith[0]); // ✅ safe to access
  } catch (error) {
    console.error("Error fetching random hadith:", error); //  log for debugging
    res.status(500).json({ message: "Error fetching random hadith", error: error.message });
  }
});


app.get("*",(req,res)=>{
    res.status(404)
    res.send("<h1>404 not found</h1>")
})
// Start the Express server
const PORT =  3001|| process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});