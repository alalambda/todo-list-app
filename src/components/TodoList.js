import React from 'react';
import uuidv4 from "uuid/v4";
import Todo from './Todo';

class TodoList extends React.Component {

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
        this.setState( { todos: this.state.todos.map(todo => {
            if (todo.id === id){
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        }) });
    }

    deleteTodo = (id) => {
        var filteredTodos = this.state.todos.filter( todo => todo.id !== id);
        this.setState( { todos: filteredTodos } );
    }

    render(){

        return (
            this.state.todos.map((todo) => 
                <Todo key={todo.id} todo={todo} changeStatus={this.changeStatus} deleteTodo={this.deleteTodo} />
            )
        );
    }
}

export default TodoList;