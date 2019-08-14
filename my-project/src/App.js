import React, {useReducer} from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { initialState, todoListReducer } from './reducers/todoListReducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoListReducer, initialState);
  console.log('state', state);

  const addTask = task => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const toggleTask = id => {
    dispatch({type: 'TOGGLE_TASK', payload: id})
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED'});
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-do List</h1>
        <TodoForm addTask={addTask} clearCompleted={clearCompleted} />
      </header>
      <div className="todo-list">
        <TodoList todos={state.todos} toggleTask={toggleTask}/>
      </div>
    </div>
  );
}
export default App;
