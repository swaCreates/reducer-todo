import React from 'react';

export default function Todo(props) {

    return (
        <div className='container'>
            <div className='todo'>
                <p>{props.todoItem.task}</p>
            </div>
        </div>
    )
}
