// Import necessary libraries and components
import React from 'react';
import styled from 'styled-components'; // Styled-components for styling

// Styled container for the list of books, arranged in a grid layout
const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  background-color: white;
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Styled component for each book's card
const BookCard = styled.div`
  background-color: #f8f9fa;
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

// Styled component for the book's title
const BookTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

// Styled component for the book's details (e.g., author, ISBN, publication date)
const BookDetails = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

// Styled container for the action buttons (Edit, Delete)
const BookActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;

// Styled button component, with variant for different styles (primary and secondary)
const Button = styled.button`
  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === 'secondary' ? '#E64A19' : '#388E3C'};
  }
`;

// BookList component definition
const BookList = ({ books, onEdit, onDelete }) => (
  <ListContainer>
    {/* Loop through the books array and render each book's card */}
    {books.map((book, index) => (
      <BookCard key={index}>
        {/* Display the book's title */}
        <BookTitle>{book.title}</BookTitle>
        
        {/* Display the author's name */}
        <BookDetails>by {book.author}</BookDetails>
        
        {/* Display the book's ISBN */}
        <BookDetails>ISBN: {book.isbn}</BookDetails>
        
        {/* Display the book's publication date */}
        <BookDetails>Published: {new Date(book.publicationDate).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
         })}</BookDetails>
        
        {/* Action buttons for editing and deleting the book */}
        <BookActions>
          <Button onClick={() => onEdit(index)}>Edit</Button>
          <Button variant="secondary" onClick={() => onDelete(index)}>Delete</Button>
        </BookActions>
      </BookCard>
    ))}
  </ListContainer>
);

// Export the BookList component to be used in other parts of the application
export default BookList;