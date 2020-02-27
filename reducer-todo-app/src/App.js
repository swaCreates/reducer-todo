import React, {useReducer} from 'react';
import {initialState, toDoReducer} from './reducers/reducer';
import './App.scss';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  

  const [state, dispatch]=  useReducer(toDoReducer, initialState);

  console.log(state);

  // addTodo
  const addTodo= todo => {dispatch({
    type: 'add_TODO',
    payload: todo,
  })}

  // deleteTodo
  // const deleteTodo= dispatch({
  //   type: 'delete_TODO',
  //   payload: ,
  // })

  return (
    <div className="App">
     <h1>Reducer-To-do-App</h1>
     <TodoForm /*addTodo={addTodo} deleteTodo={deleteTodo}*/ />
     <TodoList todo_State={state} />
    </div>
  );
}

export default App;
