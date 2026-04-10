const mongoose = require("mongoose");

// Define the schema of the movie resource t be stored in the db.

const movieSchema = new mongoose.Schema({
// write the properties related to movie.
  name: {
    type: String,
    required: true
  },
  desription: {
    type: String,
    require: true
  },
  casts: {
    type: [String],  // it is a array of strings
    required: true
  },
  trailerUrl: {
    type: String,
    required: true
  },
  language: {
    type: [String],
    required: true,
    default: "English"
  },
  releaseDate: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  releaseStatus: {     //if movie is not yet released or movie is released
    type: String,
    required: true,
    default: "RELEASED"
  },
    
},{timestamps: true});  // it will give automatically createdAt and updatedAt.
    
const Movie = mongoose.model("Movie", movieSchema);  //creates a new model
module.exports = Movie;   //returning the model