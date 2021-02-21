//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");


const client = new MongoClient("mongodb://localhost:27017");

client.connect((err) => {
    if(err){
        return console.log("Unable to connect to database");
    }
    console.log("Connecting Successful");

    const db = client.db("TodoApp");

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("6032133f4a94a723b87d3399"),
    },{
        $set: {
            name: "Yashua Pervez",
        },
        $inc: {
            age: +1,
        }
    },
    {
        returnOriginal: false
    })
    .then(result => {
        console.log(result);
    })

    // db.collection("Users").deleteOne({_id: new ObjectID("6032170da215f4151c5760ec")})
    // .then(res => {
    //     console.log("Success Result = ", res.result);
    // }, err => {
    //     console.log("unable to delete records", err);
    // });

    // db.collection("Users").deleteMany({name: "Elisha"})
    // .then(res => {
    //     console.log("Success Result = ", res.result);
    // }, err => {
    //     console.log("unable to delete records");
    // });

    // db.collection("Todos").deleteOne({title: "To Buy Food"}).
    // then(result => {
    //     console.log("Success", result.result);
    // }, err => {
    //     console.log("Unable to delete record");
    // })
    // db.collection('Todos').find().count()
    // .then((count) => {
    //     console.log("Todos:", count);
    //     //console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    //});
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

    // db.collection('Users').({
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