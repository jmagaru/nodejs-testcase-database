var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://cuebot:cuebot123@cluster0.bf0nx.mongodb.net/tcdb?retryWrites=true&w=majority";
const client = new MongoClient(url,{useUnifiedTopology: true});
var mongo = require('mongodb');

client.connect(function(err, db) {
  if (err) throw err;
  var dbo = db.db("tcdb");
  var myobj = [
    {
        
        "header_id": new mongo.ObjectID("60116d999008cb0e10fb229a") ,
        "step_no": "13",
        "step_desc": "Test Add Data using JS",
        "step_data": "",
        "step_expected": "Test Add Data using JS"
      }
  ];
  dbo.collection("steps").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    // Getting the inserted ID
    console.log("Object ID: " + res.insertedIds[0]);
    db.close();
  });
});


