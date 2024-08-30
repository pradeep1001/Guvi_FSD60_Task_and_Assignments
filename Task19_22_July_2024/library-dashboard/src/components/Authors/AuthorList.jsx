import React from 'react';
import styled from 'styled-components'; // Import styled-components for styling

// Container for the list of authors, styled as a grid
const ListContainer = styled.div`
  display: grid; // Display as a grid
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); // Grid with responsive columns
  gap: ${({ theme }) => theme.spacing.large}; // Space between grid items
  background-color: white; // Background color
  padding: ${({ theme }) => theme.spacing.large}; // Padding inside the container
  border-radius: 8px; // Rounded corners for the container
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Subtle shadow for the container
`;

// Styled card for each author
const AuthorCard = styled.div`
  background-color: #f8f9fa; // Light grey background
  padding: ${({ theme }) => theme.spacing.medium}; // Padding inside each card
  border-radius: 8px; // Rounded corners for the card
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); // Subtle shadow for the card
`;

// Styled component for author name
const AuthorName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large}; // Large font size for the name
  margin-bottom: ${({ theme }) => theme.spacing.small}; // Space below the name
`;

// Styled component for author details (birth date and biography)
const AuthorDetails = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium}; // Medium font size for details
  margin-bottom: ${({ theme }) => theme.spacing.medium}; // Space below the details
`;

// Container for action buttons (Edit, Delete)
const AuthorActions = styled.div`
  display: flex; // Display as a flexbox
  gap: ${({ theme }) => theme.spacing.small}; // Space between the buttons
`;

// Styled button component with dynamic background color based on variant prop
const Button = styled.button`
  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.secondary : theme.colors.primary}; // Dynamic background color
  color: white; // Text color
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium}; // Padding inside the button
  border: none; // No border
  border-radius: 4px; // Rounded corners for the button
  cursor: pointer; // Cursor changes to pointer on hover
  font-size: ${({ theme }) => theme.fontSizes.medium}; // Medium font size for button text

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === 'secondary' ? '#E64A19' : '#388E3C'}; // Darker background on hover
  }
`;

// Main AuthorList component
const AuthorList = ({ authors, onEdit, onDelete }) => (
  <ListContainer>
    {authors.map((author, index) => (
      <AuthorCard key={index}>
        <AuthorName>{author.name}</AuthorName> {/* Display the author's name */}
        <AuthorDetails>Born: {new Date(author.birthDate).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
   })}
</AuthorDetails>
        <AuthorDetails>Biography: {author.biography}</AuthorDetails> {/* Display the author's biography */}
        <AuthorActions>
          <Button onClick={() => onEdit(index)}>Edit</Button> {/* Button to edit the author */}
          <Button variant="secondary" onClick={() => onDelete(index)}>Delete</Button> {/* Button to delete the author */}
        </AuthorActions>
      </AuthorCard>
    ))}
  </ListContainer>
);

export default AuthorList;