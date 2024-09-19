import React, { useState, useEffect } from 'react';
import AuthorForm from '../components/Authors/AuthorForm';
import AuthorList from '../components/Authors/AuthorList';
import styled from 'styled-components';

// Styled container for the Authors page
const PageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large}; // Padding around the page content
`;

const AuthorsPage = () => {
  // State to manage the list of authors; retrieves from localStorage or initializes with an empty array
  const [authors, setAuthors] = useState(() => {
    const savedAuthors = localStorage.getItem('authors');
    return savedAuthors ? JSON.parse(savedAuthors) : [];
  });
  const [isEditing, setIsEditing] = useState(false);
  // State to manage the index of the author currently being edited; null when no author is being edited
  const [editingIndex, setEditingIndex] = useState(null);
  
  // useEffect hook to store the authors list in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('authors', JSON.stringify(authors));
  }, [authors]);

  // Function to handle adding or editing an author
  const handleAddOrEditAuthor = (values, { setSubmitting, resetForm }) => {
    console.log("Form submission received in AuthorsPage:", values); // Debugging line

    if (editingIndex !== null) {
      // If editing, update the existing author's details
      const updatedAuthors = [...authors];
      updatedAuthors[editingIndex] = values;
      setAuthors(updatedAuthors);
      setEditingIndex(null); // Reset editing index after editing
      setIsEditing(false);
    } else {
      // If adding, add the new author to the list
      setAuthors([...authors, values]);
    }

    console.log("Authors state after update:", authors); // Debugging line
    
    setSubmitting(false); // Mark the submission as complete
    resetForm(); // Reset the form fields
  };

  // Function to handle the start of editing an author
  const handleEdit = (index) => {
    setEditingIndex(index); // Set the editing index to the selected author
    setIsEditing(true);
  };

  // Function to handle deleting an author
  const handleDelete = (index) => {
    const updatedAuthors = authors.filter((_, i) => i !== index); // Remove the selected author from the list
    setAuthors(updatedAuthors); // Update the authors state
  };

  return (
    <PageContainer>
      <h1>Manage Authors</h1>
      {/* Render the form for adding/editing an author */}
      <AuthorForm isEditing={isEditing}
        initialValues={editingIndex !== null ? authors[editingIndex] : undefined} // Set initial values for the form fields
        onSubmit={handleAddOrEditAuthor} // Function to handle form submission
      />
      {/* Render the list of authors */}
      <AuthorList authors={authors} onEdit={handleEdit} onDelete={handleDelete} />
    </PageContainer>
  );
};

export default AuthorsPage;