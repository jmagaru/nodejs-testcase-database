"use strict";

module.exports = app =>{
    const customers = require("../controllers/customer.controller");
    // Create new customer
    app.post("/customers",customers.create);

    app.get("/customers/:customerId",customers.findOne);
    
}