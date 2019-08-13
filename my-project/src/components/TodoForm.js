import React from 'react';

const TodoForm = () => {
    return (
        <div>
            <input
                class="todo-input"
                type="text"
                name="newTodo"
            />
            <button>Add Task</button>
        </div>
    );
};

export default TodoForm;