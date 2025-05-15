const mongoose = require("mongoose");

// Define the schema for Hadiths
const HadithSchema = new mongoose.Schema({
  text_en: { type: String, required: true },
  text_ar: { type: String, required: true },
  narrator: { type: String, required: true },
  book: { type: String, required: true },
  chapter: { type: String, required: true },
  reference: { type: String, required: false },
},{collection: "Hadiths"});

// Create the model
const Hadith = mongoose.model("Hadith", HadithSchema);

module.exports = Hadith;
