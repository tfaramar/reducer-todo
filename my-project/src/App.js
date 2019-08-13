import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-do List</h1>
        <TodoForm />
      </header>
      <div className="todo-list">
        {/* <TodoList /> */}
      </div>
    </div>
  );
}

export default App;
