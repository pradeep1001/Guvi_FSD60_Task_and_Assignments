import React, { useState, useEffect } from 'react';
import './UserForm.css';

// Component for adding and editing user details
const UserForm = ({ currentUser, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  // Pre-fill form if editing a user
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [currentUser]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Both fields are required.');
      return;
    }
    setError(null);
    onSave({ id: currentUser ? currentUser.id : null, name, email });
  };

  return (
    <div className="user-form">
      <h2>{currentUser ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default UserForm;
