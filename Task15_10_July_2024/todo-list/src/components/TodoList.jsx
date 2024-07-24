import React from 'react';
import Todo from './Todo';

function TodoList({ todos, editTodo, deleteTodo, updateStatus }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          editTodo={editTodo} 
          deleteTodo={deleteTodo} 
          updateStatus={updateStatus} 
        />
      ))}
    </div>
  );
}

export default TodoList;
