import React from 'react';
import './UserList.css';

// Component to display the list of users in a card format
const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <div className="user-info">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          <div className="user-actions">
            <button className="edit-button" onClick={() => onEdit(user)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => onDelete(user.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
