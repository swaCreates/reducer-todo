import React from 'react';
import Todo from './Todo';
import './TodoList.scss';


export default function TodoList({todoItems, toggleTodo, deleteTodo}) {

    if(todoItems){
        return (
            <div className='todolist-container'>
                <ul className='todo-list'>
                    {todoItems.map(item => {
                       return <Todo key={item.id} todo={item} toggle={toggleTodo}  />
                    })}
                </ul>
                <div className='clear-div'>
                    <button onClick={deleteTodo} className='clear'>Clear</button>
                </div>  
            </div>
        )
    } else{
        return <h1>Add a Todo</h1>
    }
   
}