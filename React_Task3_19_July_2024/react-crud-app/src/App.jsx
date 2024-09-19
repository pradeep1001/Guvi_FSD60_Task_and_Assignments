import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';
import './App.css';

const API_URL = 'https://667e43d1297972455f67aca8.mockapi.io/users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching data.');
        setLoading(false);
      });
  };

  const handleSaveUser = (user) => {
    if (user.id) {
      axios
        .put(`${API_URL}/${user.id}`, user)
        .then((response) => {
          setUsers(users.map((u) => (u.id === user.id ? response.data : u)));
          setCurrentUser(null);
        })
        .catch((error) => setError('Error updating user.'));
    } else {
      axios
        .post(API_URL, user)
        .then((response) => {
          setUsers([...users, response.data]);
          fetchUsers(); // Refresh the list to get the server-generated ID
        })
        .catch((error) => setError('Error adding user.'));
    }
    setIsModalOpen(false);
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => setError('Error deleting user.'));
  };

  const handleAddUser = () => {
    setCurrentUser(null);
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      <h1>User Management</h1>
      <button className="add-user-button" onClick={handleAddUser}>
        Add New User
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
        </>
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <UserForm currentUser={currentUser} onSave={handleSaveUser} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;