import React from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
