import React from 'react';

class Todo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.todo.id,
            title: props.todo.title,
            isCompleted: props.todo.isCompleted
        };  
    }

    render(){
        return (
            <div>
                {this.state.title}
            </div>
        );
    }
}

export default Todo;