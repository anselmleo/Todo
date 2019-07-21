const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
  todo_description: {type: string},
  todo_responsible: {type: string},
  todo_priority: {type: string},
  todo_completed: {type: boolean}
});

module.exports = mongoose.model('Todo', Todo);