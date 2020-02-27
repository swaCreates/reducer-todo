import React from 'react';
import Todo from './Todo';
import './TodoList.scss';


export default function TodoList({todoItem}) {
    if(todoItem){
        return (
            <div className='container'>
                <ul className='todo-list'>
                    {todoItem.map(item => {
                       return <Todo key={item.id} todo={item} />
                    })}
                </ul>
                <div className='clear-div'>
                    <button className='clear'>clear</button>
                </div>    
            </div>
        )
    } else{
        return <h1>Add a Todo</h1>
    }
   
}