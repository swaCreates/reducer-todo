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

  // toggleTodo
  const toggleTodo= id => {dispatch({
    type: 'toggle_TODO',
    payload: id,
  })}

  // deleteTodo
  const deleteTodo= todo => {dispatch({
    type: 'delete_TODO',
  })}

  return (
    <div className="App">
     <h1>To-do-List</h1>
     <TodoForm addTodo={addTodo} />
     <TodoList todoItems={state.todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
