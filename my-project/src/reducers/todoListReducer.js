
export const initialState = {
    todos: [
        {
            task: 'Water the plants',
            id: 1528817077286,
            completed: false
        },
    ]
};

export const todoListReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const newTodo = {
                task: action.payload,
                id: Date.now(),
                completed: false
            };
            console.log(newTodo)
            return {
                ...state.todos, newTodo  
            };
        //case 'CLEAR_COMPLETED':

        // case 'TOGGLE_TASK':
        //     return {
        //         ...state, 
        //         todos: state.todos.map(todo => {
        //             if (todo.id === action.payload) {
        //                 completed: !todo.completed
        //             };
        //             }
        //         )
        //     }

        default:
            return state;

    }
};