const {mongoose} = require("./db/mongoose");
const {Todo} = require("./models/Todo");
const {User} = require("./models/User");

const express = require("express");
const {ObjectID} = require("mongodb");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save()
    .then(doc => {
        res.send(doc);
    }, e => {
        res.status(400).send(e);
    });
});

app.get("/todos", (req, res) => {
    //res.send("Received");
    Todo.find()
    .then(todos => {
        res.send({data: todos})
    }, e => {
        res.status(400).send("Error Occured: ", e);
    });
});

app.get("/todos/:id", (req, res) => {
    const id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send({
            error: "Todo not found",
        });
    }
    Todo.findById(id)
    .then(doc => {
        if(doc){
            res.status(200).send(doc);
        }
        
        res.status(404).send({
            error: "Todo not found",
        })
    }, error => {
        res.status(400).send({
            error: "Something bad happened",
        })
    })
});

app.listen(3000, () => {
    console.log("App Running At Port 3000");
});