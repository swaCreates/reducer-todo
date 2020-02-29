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
    payload: todo.id,
  })}

  return (
    <div className="App">
     <h1>Reducer-To-do-App</h1>
     <TodoForm addTodo={addTodo} /*deleteTodo={deleteTodo}*/ />
     <TodoList todoItems={state.todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
