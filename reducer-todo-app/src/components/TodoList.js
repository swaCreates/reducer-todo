import React from 'react';
import Todo from './Todo';


export default function TodoList(props) {

    return (
        <div className='container'>
            <div className='todo-list'>
                {props.todo_State.map(item => {
                   return <Todo key={item.id} todoItem={item} />
                })}
            </div>    
        </div>
    )
}