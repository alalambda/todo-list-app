import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import axios from 'axios';
import About from './pages/About';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';
const LIMIT = '?_limit=10';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios.get(API_ENDPOINT + LIMIT)
      .then(response => this.setState({ todos: response.data }));
  }

  changeStatus = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) => {
    axios.delete(API_ENDPOINT + '/' + id)
      .then(response => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
      });
  }

  addNewTodo = (title) => {
    if (title.length === 0) return;

    axios.post(API_ENDPOINT, {
      title,
      completed: false
    }).then(response => {
      this.setState({ todos: [...this.state.todos, response.data] })
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <TodoForm addNewTodo={this.addNewTodo} />
                <TodoList todos={this.state.todos} changeStatus={this.changeStatus} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )}></Route>
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
