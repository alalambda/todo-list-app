import React from 'react';
import uuidv4 from "uuid/v4";
import Todo from './Todo';

class TodoList extends React.Component {
    render(){
        const todos = [
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
        ];

        return (
            todos.map((todo) => 
                <Todo key={todo.id} todo={todo} />
            )
        );
    }
}

export default TodoList;