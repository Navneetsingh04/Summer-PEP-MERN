const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength : 5,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true,
        minLength: 8
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const user = mongoose.model("User", userSchema);

module.exports = user;
