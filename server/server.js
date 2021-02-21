const {Todo} = require("./models/Todo");
const {User} = require("./models/User");

const express = require("express");
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

// const newUser = new User({
//     email: "         yashuapervez@gmail.com    ",
//     age: 10,
//     password: "elisha123"
// });

// newUser.save()
// .then(doc => {
//     console.log("Saved Todo", doc);
// }, err => {
//     console.log("Unable to save todo");
// });

app.listen(3000, () => {
    console.log("App Running At Port 3000");
});