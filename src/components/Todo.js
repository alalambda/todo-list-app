import React from 'react';

class Todo extends React.Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
        };
    }

    getDeleteButtonStyle = () => {
        return {
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            border: 'none'
        };
    }

    render(){

        const {id, title, isCompleted} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <input type="checkbox" checked={isCompleted} onChange={this.props.changeStatus.bind(this, id)}/> {' '}
                {title}
                <button style={this.getDeleteButtonStyle()} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
            </div>
        );
    }
}

export default Todo;