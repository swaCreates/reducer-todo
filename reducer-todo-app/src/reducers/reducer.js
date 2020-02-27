export let initialState= [
    {
        task: 'create app',
        completed: false,
        id: 1,
    },
    {
        task: 'do homework',
        completed: false,
        id: 2
    },
    {
        task: 'complete homework',
        completed: false,
        id: 3
    }
]


export const toDoReducer= (state, action) => {
    switch(action.type){
        case 'add_TODO':
            const idHandler= state.id + 1;
            const newTodo= {
                task: action.task,
                completed: false,
                id: idHandler,
            };
            return {
                id: idHandler,
                task: [...state.task, newTodo]
            }
        case 'toggle':
            return state;
        case 'delete_TODO':
            return state;
        default:
            return state;
    }
} 