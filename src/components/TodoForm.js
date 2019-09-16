import React from 'react';

class TodoForm extends React.Component {
    render(){
        return (
            <div>
                <input type="text" name="todoInput" placeholder="Type new todo..."/>
                <button>Add</button>
            </div>
        );
    }
}

export default TodoForm;