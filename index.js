const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const env = require("dotenv");
env.config();
const app = express();
const Movie = require("./models/movie.model");

//  res --> it is sent from the client.
// res --> when you are going to send to the client when req is completed.

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
  res.send("Route Working");
});

app.get('/home', (req, res) => {
  return res.json({
    success: true,
    message: "Fetched Home"
  });
});


app.listen(process.env.PORT, async() => {
  console.log(`Server is running on PORT ${process.env.PORT}`);

  // call db
    try{
  await mongoose.connect(process.env.DB_URL);
  console.log("Successfully connect to mongo");

  // await Movie.create({
  //   name: "Dhurandar",
  //   description: "Action Movie",
  //   casts: ["Ranveer Singh","Akshay Khanna", "Sanjay Dutt", "Saumya Tandon", "Sara Arjun", "Rakesh Bedi"],
  //   director: "Aditya Dhar",
  //   trailerUrl: "https://www.youtube.com/watch?v=BKOVzHcjEIo",
  //   language: "Hindi",
  //   releaseDate: "05-12-2025",
  //   releaseStatus: "RELEASED"
  // });

  } catch(err){
  console.log("Not able to connect mongo",err);
  }
});