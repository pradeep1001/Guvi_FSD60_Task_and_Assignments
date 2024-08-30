// Import styled-components library for styling
import styled from 'styled-components';

// Styled button component definition
const Button = styled.button`
  // Background color changes based on the 'variant' prop
  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  
  // Text color is set to white
  color: white;
  
  // Padding around the button text
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  
  // Removes the default border
  border: none;
  
  // Rounds the corners of the button
  border-radius: 4px;
  
  // Changes the cursor to a pointer when hovering over the button
  cursor: pointer;
  
  // Font size is set based on the theme's medium font size
  font-size: ${({ theme }) => theme.fontSizes.medium};

  // Changes the background color on hover based on the 'variant' prop
  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === 'secondary' ? '#E64A19' : '#388E3C'};
  }
`;

// Export the Button component to be used in other parts of the application
export default Button;