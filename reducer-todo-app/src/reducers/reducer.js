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
        case 'ADD_TODO':
            const newState= {
                ...state,
                todos: [
                    ...state.todos,
                    {task: action.payload, completed: false, id: Date.now()}
                ]
            };
            return newState;
        case 'TOGGLE_TODO': {
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
        case 'DELETE_TODO':
            return{
                ...state,
                todos: state.todos.filter(task => !task.completed)
            }
        default:
            return state;
    }
} 