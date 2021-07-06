import React, {useState} from 'react';
import './TodoForm.scss';

export default function TodoForm(props) {

    const [todo, setTodo]= useState('');

    const handleChanges= evt => {
        evt.preventDefault();
        setTodo(evt.target.value);
    }
    console.log(todo);

    const addTodo= evt =>{
        evt.preventDefault();
        props.addTodo(todo);
        setTodo('');
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                <input
                    className="title-input"
                    type="text"
                    name='addTask'
                    value={todo}
                    onChange={handleChanges}
                />
                <button>add</button>
            </form>
        </div>
    )
}
