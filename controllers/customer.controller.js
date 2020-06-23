"use strict";

const Customer = require("../models/customer.model");

// Create and Save new customer
exports.create = (req,res) =>{
    // Validate request should have request body
    if(!req.body){
        res.status(400).send({
            message : "Content should not be empty!"
        })
    }

    // Create Customer object
    const customer = new Customer ({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    // Save customer in the DB
    Customer.create(customer,(err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Some error occurred while creating the Customer."
            });
        }
        else res.send(data);
    });
}

// Find single customer
exports.findOne = (req,res) =>{
    Customer.findById(req.params.customerId, (err,data) =>{
        if(err){
            if(err.kind === 'not found'){
                res.status(404).send({
                    message: `Not found Customer Id : ${req.params.customerId}.`
                });
            }else{
                res.status(500).send({
                    message: "Error retrieving Cusotmer id "+req.params.customerId
                });
            }
        }else{
            res.send(data)
        }
    })
}