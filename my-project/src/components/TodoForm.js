import React, { useState, useReducer } from 'react';

import { initialState, todoListReducer } from '../reducers/todoListReducer';




const TodoForm = () => {
    const [newTask, setNewTask] = useState();

    const [state, dispatch] = useReducer(todoListReducer, initialState);
    console.log(state);

    const handleChanges = event => {
        setNewTask(event.target.value);
    };

    return (
        <div>
            <input
                className="todo-input"
                type="text"
                name="newTodo"
                onChange={handleChanges}
            />
            <button
                onClick={() => dispatch({ type: 'ADD_TASK', payload: newTask })}
                >
                Add Task
            </button>
        </div>
    );
};

export default TodoForm;