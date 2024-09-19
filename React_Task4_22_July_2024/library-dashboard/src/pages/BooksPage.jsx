// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import BookForm from '../components/Books/BookForm'; // Form component for adding/editing books
import BookList from '../components/Books/BookList'; // List component for displaying books
import styled from 'styled-components'; // Styled-components for styling


// Styled container for the Books page
const PageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large}; // Padding around the page content
`;

// BooksPage component definition
const BooksPage = () => {
  // State to manage the list of books; retrieves from localStorage or initializes with an empty array
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const [isEditing, setIsEditing] = useState(false);
  // State to manage the index of the book currently being edited; null when no book is being edited
  const [editingIndex, setEditingIndex] = useState(false);

  // useEffect hook to store the books list in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  // Function to handle adding or editing a book
  const handleAddOrEditBook = (values, { setSubmitting, resetForm }) => {
    if (editingIndex !== null) {
      // If editing, update the existing book's details
      const updatedBooks = [...books];
      updatedBooks[editingIndex] = values;
      setBooks(updatedBooks);
      setEditingIndex(null);// Reset editing index after editing
      setIsEditing(false); // Reset editing state after editing
    } else {
      // If adding, add the new book to the list
      setBooks([...books, values]);
    }
    setSubmitting(false); // Mark the submission as complete
    resetForm(); // Reset the form fields
  };

  // Function to handle the start of editing a book
  const handleEdit = (index) => {
    setIsEditing(true);
    setEditingIndex(index); // Set the editing index to the selected book
  };

  // Function to handle deleting a book
  const handleDelete = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index); // Remove the selected book from the list
    setBooks(updatedBooks); // Update the books state
  };

  return (
    <PageContainer>
      <h1>Manage Books</h1>
      {/* Render the form for adding/editing a book */}
      <BookForm isEditing={isEditing}
        initialValues={
          editingIndex !== null
            ? books[editingIndex] // Set initial values for the form fields if editing
            : {
                title: '',
                author: '',
                isbn: '',
                publicationDate: '',
              }
        }
        onSubmit={handleAddOrEditBook} // Function to handle form submission
      />
      {/* Render the list of books */}
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </PageContainer>
  );
};

// Export the BooksPage component to be used in other parts of the application
export default BooksPage;