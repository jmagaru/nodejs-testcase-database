"use strict";

const Testcase = require("../models/testcase.model");
const { statistics } = require("../db");

// Create and Save new testcase
exports.create = (req,res) =>{
    // Validate request should have request body
    if(!req.body){
        res.status(400).send({
            message : "Content should not be empty!"
        })
    }
    
    const steps = req.body.steps
    let queryParam = []
    for (let i = 0; i < steps.length; i++){
        const step = steps[i];
        const step_num = step.step_num;
        const step_desc = step.step;
        const step_expect = step.expect;
        let param = [ req.body.tc_id, step_num, step_desc, step_expect ]
        queryParam.push(param);
    }


    // Save testcase in the DB
    Testcase.create([queryParam],(err,data)=>{
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