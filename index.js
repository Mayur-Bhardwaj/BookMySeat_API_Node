const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const env = require("dotenv");
env.config();
const app = express();

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
  } catch(err){
  console.log("Not able to connect mongo",err);
  }
});