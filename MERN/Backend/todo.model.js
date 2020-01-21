const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_fullname: {
        type: String
    },
    todo_email: {
        type: String
    },
    todo_mobile: {
        type: String
    },
    todo_city: {
        type: String
    }
});

module.exports = mongoose.model('Todo', Todo);