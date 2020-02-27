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
            const newTodo= {
                task: action.payload,
                completed: false,
                id: Date.now(),
            };
            return [{
                id: Date.now(),
                task: [...state, newTodo]
            }]
        case 'toggle':
            return state;
        case 'delete_TODO':
            const index= state.findIndex(todo => todo.id === action.payload)
            const tasks= [...state, state];
            tasks.splice(index, 1, tasks);
            return [{
                task: tasks,
            }]
        default:
            return state;
    }
} 