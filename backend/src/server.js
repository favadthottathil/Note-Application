// initialization

const express = require('express');  // object for express

const app = express();

const mongoos = require('mongoose');

const Note = require('./model/note');
// const note = require('./model/note');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mongodbpath = "mongodb+srv://favad:favad123@cluster0.rv4t7io.mongodb.net/notesdb";

mongoos.connect(mongodbpath).then(function(){  

 

// Home Route (/)

// App Routea

app.get("/", function (req, res) {

    const response = { message : "API Works!"};
    res.json(response);

});

const noteRouter = require('./routes/note');

app.use("/notes", noteRouter);
app.post("/note", function (req, res) {
      
    const response = { message : "API Works!"};
    res.json(response);

});



});

// staring the server on a port

const PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
    console.log("server Started at port: " + PORT);
})