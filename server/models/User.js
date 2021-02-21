const mongoose = require("mongoose");

const User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
    age: {
        type: Number,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
});

module.exports = {User};