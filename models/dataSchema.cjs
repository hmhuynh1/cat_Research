const { Schema, model } = require('mongoose');


const TodoSchema = new Schema({
    title: {
        type: String,
    },
    done: {
        type: Boolean,
    },
    type: {
        type: String
    },
},  {

});




const Todo = model('Todo', TodoSchema);

module.exports = Todo;