import React from 'react';
function Todo({ todo, editTodo, deleteTodo, updateStatus }) {

  return (
    <div className="todo">
      <p>Name: {todo.task}</p>
      <p>Description: {todo.description}</p>
      <span>Status </span>
      <select  
        value={todo.status} 
        onChange={(e) => updateStatus(todo.id, e.target.value)}
        style={{
          backgroundColor: todo.status === 'Completed' ? '#16AB89' : '#FE7F7F',
          color: 'white'
        }}
      > 
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
      </select>
      <div className="button-container">
      <button  className="edit" onClick={() => editTodo(todo.id)}>Edit</button>
      <button  className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
