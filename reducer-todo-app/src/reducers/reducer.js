let task= [];

export let initialState= {
    todos:[
        {
            task: task,
            completed: false,
            id: 1,
        },
    ]
}


export const toDoReducer= (state, action) => {
    switch(action.type){
        case 'add_TODO':
            const newState= {
                ...state,
                todos: [
                    ...state.todos,
                    {task: action.payload, completed: false, id: Date.now()}
                ]
            };
            const stateStringified = JSON.stringify(newState);
            localStorage.setItem('state', stateStringified);
            return newState;
        case 'toggle_TODO': {
            return {
                ...state,
                todos: state.todos.map(task => {
                    if(task.id === action.payload){
                        return{
                            ...task,
                            completed: !task.completed
                        }
                    } else{
                        return task
                    }
                })
            }
        }
        case 'delete_TODO':
            return{
                ...state,
                todos: state.todos.filter(task => !task.completed)
            }
        default:
            return state;
    }
} 