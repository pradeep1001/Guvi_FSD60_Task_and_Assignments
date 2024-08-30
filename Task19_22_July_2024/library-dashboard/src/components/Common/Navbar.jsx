// Import necessary libraries and components
import React from 'react';
import styled from 'styled-components'; // Styled-components for styling
import { Link } from 'react-router-dom'; // Link component from react-router-dom for navigation

// Styled container for the navigation bar
const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary}; // Background color based on the theme's primary color
  padding: ${({ theme }) => theme.spacing.medium}; // Padding around the navbar content
  display: flex; // Flexbox layout for horizontal alignment
  justify-content: space-between; // Space between the left and right content
  align-items: center; // Align items vertically in the center
  color: white; // Text color set to white
`;

// Styled component for navigation items
const NavItem = styled(Link)`
  color: white; // Text color set to white
  text-decoration: none; // Remove underline from links
  margin: 0 ${({ theme }) => theme.spacing.medium}; // Horizontal margin between nav items
  font-size: ${({ theme }) => theme.fontSizes.medium}; // Font size based on the theme's medium font size

  &:hover {
    text-decoration: underline; // Add underline on hover to indicate interactivity
  }
`;

// Navbar component definition
const Navbar = () => (
  <NavbarContainer>
    {/* Home link */}
    <NavItem to="/">Library Dashboard</NavItem>
    
    {/* Links to different sections of the application */}
    <div>
      <NavItem to="/books">Books</NavItem>
      <NavItem to="/authors">Authors</NavItem>
    </div>
  </NavbarContainer>
);

// Export the Navbar component to be used in other parts of the application
export default Navbar;