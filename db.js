"use strict";

const {MongoClient} = require('mongodb');

const connection = async function (){
    const uri = "mongodb+srv://cuebot:cuebot123@cluster0.bf0nx.mongodb.net/tcdb?retryWrites=true&w=majority";


    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log ("Database connection : SUCCESS")

        // Make the appropriate DB calls
        //await  listDatabases(client);

    } catch (e) {
        console.error(e);
        await client.close();
    }
}

//const mysql = require("mysql");
//const dbconfig = require("./db.config");

// Create Connnection to the database
//const connection = mysql.createConnection({
  //  host: dbconfig.HOST,
  //  user: dbconfig.USER,
  //  password: dbconfig.PASSWORD,
   // database: dbconfig.DB
//});

// open Mysql Connection
//connection.connect(error => {
  //  if(error) throw error;
   // console.log("Successfully connected to the database.");
   //}
//);

module.exports = connection;