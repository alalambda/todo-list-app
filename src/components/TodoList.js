import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    
    render(){
        return (
            this.props.todos.map((todo) => 
                <Todo key={todo.id} todo={todo} changeStatus={this.props.changeStatus} deleteTodo={this.props.deleteTodo} />
            )
        );
    }
}

export default TodoList;