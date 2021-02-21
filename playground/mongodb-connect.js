const MongoClient = require("mongodb").MongoClient();

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
        return console.log("Unable to connect to database");
    }

    console.log("Connecting Successful");
    db.close();
});