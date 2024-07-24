import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    console.log("Adding todo:", todo); // Debugging log
    setTodos([...todos, { ...todo, id: Date.now() }]);
    console.log("Current todos:", todos); // Debugging log
  };

  const editTodo = (id) => {
    const task = prompt("Edit the task name:");
    const description = prompt("Edit the task description:");
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, task, description } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const updateStatus = (id, status) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, status } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => 
    filter === 'All' || todo.status === filter
  );

  return (
    <div className="App">
      <h1>My Todo</h1>
      <TodoForm addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList 
        todos={filteredTodos} 
        editTodo={editTodo} 
        deleteTodo={deleteTodo} 
        updateStatus={updateStatus} 
      />
    </div>
  );
}

export default App;
