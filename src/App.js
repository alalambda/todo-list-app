import React from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import uuidv4 from "uuid/v4";

class App extends React.Component {

  state = {
    todos: [
      {
        id: uuidv4(),
        title: "First task",
        isCompleted: true
      },
      {
        id: uuidv4(),
        title: "Third task",
        isCompleted: false
      },
      {
        id: uuidv4(),
        title: "Fifth task",
        isCompleted: true
      }
    ]
  }

  changeStatus = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) => {
    var filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: filteredTodos });
  }

  addNewTodo = (title) => {
    if (title.length === 0) return;

    var newTodo = {
      id: uuidv4(),
      title: title,
      isCompleted: false
    };

    this.setState( { todos: this.state.todos.concat(newTodo) } );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TodoForm addNewTodo={this.addNewTodo} />
        <TodoList todos={this.state.todos} changeStatus={this.changeStatus} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}


export default App;
