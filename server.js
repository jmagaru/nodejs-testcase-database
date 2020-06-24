"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//parse request of content-type: application/json
app.use(bodyParser.json());

//parse request of content-type : application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// simple route
app.get("/",(req,res) => {
    res.json({message:"Welcome to the Jungle"});
});

require("./routes/testcase.routes")(app);

//set port , listen for request
app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})