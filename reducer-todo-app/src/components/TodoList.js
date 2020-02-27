import React from 'react';
import Todo from './Todo';
import './TodoList.scss';


export default function TodoList(props) {

    return (
        <div className='container'>
            <div className='todo-list'>
                {props.todo_State.map(item => {
                   return <Todo key={item.id} todoItem={item} />
                })}
            </div>
            <div className='clear-div'>
                <button className='clear'>clear</button>
            </div>    
        </div>
    )
}