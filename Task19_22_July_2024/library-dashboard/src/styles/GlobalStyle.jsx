// Import createGlobalStyle from styled-components
import { createGlobalStyle } from 'styled-components';

// GlobalStyle component definition
// This component creates global CSS styles that are applied across the entire application
const GlobalStyle = createGlobalStyle`
  // Styles applied to the body element
  body {
    font-family: 'Arial', sans-serif; // Set the default font family
    margin: 0; // Remove default margin
    padding: 0; // Remove default padding
    background-color: ${({ theme }) => theme.colors.background}; // Set background color based on theme
    color: ${({ theme }) => theme.colors.text}; // Set text color based on theme
  }

  // Styles applied to all heading elements (h1 to h6)
  h1, h2, h3, h4, h5, h6 {
    margin: 0; // Remove default margin
    padding: 0; // Remove default padding
  }

  // Styles applied to all button elements
  button {
    font-family: 'Arial', sans-serif; // Set the font family for buttons
  }

  // Styles applied to all input and textarea elements
  input, textarea {
    font-family: 'Arial', sans-serif; // Set the font family for inputs and textareas
  }
`;

// Export the GlobalStyle component to be used in the application entry point
export default GlobalStyle;