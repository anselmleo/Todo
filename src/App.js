import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';

import logo from './logo.png';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://github.com/anselmleo/" target="blank">
              <img src={logo} width="30px" height="30px" alt="Logo"/>
            </a>
            <Link to="/" className="navbar-brand">Anselm's Todo Application</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h1>Anselm's Todo Application</h1>
          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>

      </Router>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Anselm's Todo Application</h1>
//     </div>
//   );
// }

export default App;
