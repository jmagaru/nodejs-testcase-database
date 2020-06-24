"use strict";

module.exports = app =>{
    const testcase = require("../controllers/testcase.controller");
    // Create new customer
    app.post("/testcase",testcase.create);

    app.get("/testcase/:tc_id",testcase.findOne);
    
}