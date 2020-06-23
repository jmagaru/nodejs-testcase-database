"use strict";

const mysql = require("mysql");
const dbconfig = require("./db.config");

// Create Connnection to the database
const connection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
});

// open Mysql Connection
connection.connect(error => {
    if(error) throw error;
    console.log("Successfully connected to the database.");
    }
);

module.exports = connection;