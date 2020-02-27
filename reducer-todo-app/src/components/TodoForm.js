import React, {useState} from 'react';
import {Form, Input} from 'reactstrap';

export default function TodoForm() {

    const [todo, setTodo]= useState('');

    return (
        <div>
            <Form>
                <Input
                    className="title-input"
                    type="text"
                    name='addTask'
                />
            </Form>
        </div>
    )
}
