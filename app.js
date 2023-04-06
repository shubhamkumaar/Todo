// jshint esversion:6

const Parse = require("parse/node");
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

//
Parse.initialize("jJjVTHQQMefRUu5FyWus14gUcl3JCDkb76wAC8bW","AbRFT8VNmpZD2cNYcoZPHOGTWm01h1tYaMH3nzyk");
Parse.serverURL = 'https://parseapi.back4app.com/'

const app = express();
const inputs = ["Buy Food", "Cook Food", "Eat Food"];
const workItems =  [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("Public"));

app.get("/", function(req, res) {

const day = date.getDate();
  res.render("list", {listTitle: day,newListItems: inputs});
});



app.post("/", function(req, res) {

  const input = req.body.Input;
  if(req.body.list === "work"){
      workItems.push(input);
      res.redirect("/work");
  }else {

    inputs.push(input);
    res.redirect("/");
  }


  // async function saveF() {
  //   //Create your Parse Object
  //   let inputs = new Parse.Object('inputs');
  //   inputs.set("username",req.body.Input);
  //
  //   try {
  //     //Save the Object
  //     let result = await inputs.save();
  //     alert('New object created with objectId: ' + result.id);
  //   } catch (error) {
  //     alert('Failed to create new object: ' + error.message);
  //   }
  // }
});

app.get("/work", function(req,  res){
  res.render("list", {listTitle:"work List", newListItems:workItems});
});

app.post("/work", function(req, res){
  const item = req.body.Input;
  workItems.push(item);
  res.redirect("/work");
})


app.listen(3000, function() {
  console.log("Server started");
})






// App ID  jJjVTHQQMefRUu5FyWus14gUcl3JCDkb76wAC8bW

// Js key AbRFT8VNmpZD2cNYcoZPHOGTWm01h1tYaMH3nzyk
