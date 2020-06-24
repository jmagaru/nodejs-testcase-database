"use strict";

const Testcase = require("../models/testcase.model");

// Create and Save new testcase
exports.create = (req,res) =>{
    // Validate request should have request body
    if(!req.body){
        res.status(400).send({
            message : "Content should not be empty!"
        })
    }

    // Create Testcase object
    const testcase = new Testcase ({
        step_num: req.body.step_num,
        tc_id: req.body.tc_id,
        step_desc: "Step : "+req.body.step,
        step_expect: req.body.expect
    });

    // Save testcase in the DB
    Testcase.create(testcase,(err,data)=>{
        if(err){
            res.status(500).send({
                message : err.message || "Some error occurred while creating the Testcase."
            });
        }
        else res.send(data);
    });
}

// Find single testcase
exports.findOne = (req,res) =>{
    Testcase.findById(req.params.tc_id, (err,data) =>{
        if(err){
            if(err.kind === 'not found'){
                res.status(404).send({
                    message: `Not found Testcase Id : ${req.params.tc_id}.`
                });
            }else{
                res.status(500).send({
                    message: "Error retrieving Testcase id "+req.params.tc_id
                });
            }
        }else{
            res.send(data)
        }
    })
}