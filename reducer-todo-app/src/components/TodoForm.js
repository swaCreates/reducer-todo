import React, {useState} from 'react';
import './TodoForm.scss';

export default function TodoForm(props) {

    const [todo, setTodo]= useState('');

    const handleChanges= evt => {
        setTodo(evt.target.value);
    }

    const addTodo= evt =>{
        evt.preventDefault();
        props.addTodo(todo);
        setTodo('');
    }

    return (
        <div>
            <div>
                <input
                    className="title-input"
                    type="text"
                    name='addTask'
                    value={todo}
                    onChange={handleChanges}
                />
                <button onClick={addTodo}>add</button>
            </div>
        </div>
    )
}
