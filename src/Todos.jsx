import React, { use } from 'react';
import Todo from './Todo';

const Todos = ({fetchTodos}) => {
    const todos = use(fetchTodos);
    // console.log(todos.length);
  return (
    <div>
      <h2>Total Todos: {todos.length}</h2>
      {
        todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
      }
    </div>
  );
};

export default Todos;