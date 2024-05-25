const express = require("express");
const mongoose = require("mongoose");
const User = require("./model");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());


mongoose
  .connect("mongodb+srv://Premtheja:20EG106157@premtheja.o9xjdko.mongodb.net/Portfolio")
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

  app.post("/Createuser",(req,res)=>{
    User.create(req.body)
    .then(newUser => res.json(newUser)) 
    .catch(err=>res.json(err))
  });


app.listen(port, () => console.log(`The server is listening on port ${port}`));