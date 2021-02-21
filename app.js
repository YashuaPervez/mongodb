//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");


const client = new MongoClient("mongodb://localhost:27017");

client.connect((err) => {
    if(err){
        return console.log("Unable to connect to database");
    }
    console.log("Connecting Successful");

    const db = client.db("TodoApp");
    db.collection('Todos').find().count()
    .then((count) => {
        console.log("Todos:", count);
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos", err);
    });
    // db.collection('Todos').insertOne({
    //     title: "To Buy Food",
    //     body: "buying food is really importatn so that you can continue eating",
    //     completed: false,
    // }, (err, res) => {
    //     if(err){
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify("New DOC", res.ops));
    // });

    // db.collection('Users').insertOne({
    //     name: "Pervez",
    //     age: 45,
    //     location: "Karachi",
    // }, (err, res) => {
    //     if(err){
    //         return console.log("Unable to insert user", err);
    //     }
    //     console.log("New Doc", JSON.stringify(res.ops));
    //     console.log("Time: ", res.ops[0]._id.getTimestamp());
    // });
    client.close();
});