const { Schema, model } = require('mongoose');

const userSchema = newSchema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})