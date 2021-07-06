import React from 'react';
import './Todo.scss';

export default function Todo({todo, toggle}) {
    return (
        <div
        onClick={() => {toggle(todo.id)}}
        className={`todo${todo.completed ? " completed" : ""}`}
        >
            <p>{todo.task}</p>
        </div>
    )
}