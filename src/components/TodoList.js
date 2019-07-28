import React from 'react';
import Todo from './Todo';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/todos/')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  todoList() {
    return this.state.todos.map((currentTodo, i) => {
      return <Todo todo={currentTodo} key={i} />;
    })
  }

  render() {
    return(
      <div>
        <h3 className="my-5">Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }} >
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.todoList()}
          </tbody>
        </table>
      </div>

      
      // <div>
      //   <h3 style={{marginTop:50}}>Welcome to Todo List</h3>
      // </div>
    );
  }
}

export default TodoList;