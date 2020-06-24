const sql = require("../db");


// constructor 
const Testcase = function(testcase){
    this.tc_id = testcase.tc_id;
    this.step_no = testcase.step_num;
    this.step_desc = testcase.step_desc;
    this.step_expect = testcase.step_expect;
}

Testcase.create = (newTestcase, result) => {
    sql.query("INSERT INTO tc_steps SET ?",newTestcase,(err,res) => {
        if(err) {
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("created testcase: ",{ id: res.insertId, ...newTestcase});
        result(null,{id:res.insertId, ...newTestcase});
    });

}

Testcase.findById = (tcid, result) => {
    sql.query(`SELECT * from tc_steps WHERE tc_id = ${tcid}`,(err,res)=>{
        if(err) {
            console.log("error: ",err);
            result(err,null);
            return;
        }
        if(res.length){
            console.log("found testcase: ",res);
            result(null,res);
            return
        }
        result({kind:"not found"},null)
    });
}

module.exports = Testcase;