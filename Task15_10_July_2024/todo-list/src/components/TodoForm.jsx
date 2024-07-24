import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit button clicked');
    console.log('Task:', task);
    console.log('Description:', description);
    
    if (task.trim() === '' && description.trim() === '') {
      console.log('Task is empty, should show alert');
      window.alert('Please enter a todo name and todo description.');
      return;
    }
    if (task.trim() === '') {
      console.log('Task is empty, should show alert');
      window.alert('Please enter a todo name.');
      return;
    }
    if (description.trim() === '') {
      console.log('Description is empty, should show alert');
      window.alert('Please enter a todo description.');
      return;
    }
    
    addTodo({
      task: task.trim(),
      description: description.trim(),
      status: 'Not Completed'
    });
    setTask('');
    setDescription('');
    console.log("Form submitted successfully."); // Debugging log
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Todo Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Todo Description"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;