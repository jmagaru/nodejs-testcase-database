const sql = require("../db");

// constructor 
const Customer = function(customer){
    this.email = customer.email;
    this.name = customer.name;
    this.active = customer.active;
}

Customer.create = (newCustomer, result) => {
    sql.query("INSERT INTO customers SET ?",newCustomer,(err,res) => {
        if(err) {
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("created customer: ",{ id: res.insertId, ...newCustomer});
        result(null,{id:res.insertId, ...newCustomer});
    });

}

Customer.findById = (customerId, result) => {
    sql.query(`SELECT * from customers WHERE id = ${customerId}`,(err,res)=>{
        if(err) {
            console.log("error: ",err);
            result(err,null);
            return;
        }
        if(res.length){
            console.log("found customer: ",res[0]);
            result(null,res[0]);
            return
        }
        result({kind:"not found"},null)
    });
}

module.exports = Customer;