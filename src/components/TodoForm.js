import React from 'react';

class TodoForm extends React.Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState( { title: e.target.value } );

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewTodo(this.state.title);
        this.setState( { title: ''} );
    }

    render(){
        return (
            <form style={todoFormStyle} onSubmit={this.onSubmit}>
                <input 
                type="text" 
                name="todoInput" 
                placeholder="Type new todo..." 
                value={this.state.title}
                onChange={this.onChange}/>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

const todoFormStyle = {
    background: '#555',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

export default TodoForm;