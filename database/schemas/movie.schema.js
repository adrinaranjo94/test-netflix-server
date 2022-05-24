const mongoose = require("mongoose");
const Schema = mongoose.Schemas;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  poster_path: {
    type: String,
    required: true,
    trim: true,
  },
  overview: {
    type: String,
    required: true,
    trim: true,
  },
  adult: {
    type: Boolean,
  },
  backdrop_path: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = MovieSchema;
