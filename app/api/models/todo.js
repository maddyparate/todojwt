const mongoose = require('mongoose')

const ToDoSChema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    assigned_email:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('todo',ToDoSChema)