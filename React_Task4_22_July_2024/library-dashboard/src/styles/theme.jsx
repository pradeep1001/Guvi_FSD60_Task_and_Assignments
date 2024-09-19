// Export a theme object to be used with styled-components for consistent styling across the application
export const theme = {
    // Define the color palette for the application
    colors: {
      primary: '#4CAF50', // Primary color (green) used for main elements like buttons, navbar, etc.
      secondary: '#FF5722', // Secondary color (orange) used for accents or secondary buttons
      background: '#F9F9F9', // Background color for the application's pages
      text: '#333', // Default text color, a dark gray
      border: '#E0E0E0', // Border color used for input fields, cards, and other bordered elements
    },
    
    // Define spacing values for padding and margin to maintain consistency
    spacing: {
      small: '8px', // Small spacing, typically used for tight spacing between elements
      medium: '16px', // Medium spacing, used for moderate space between elements
      large: '24px', // Large spacing, used for more significant separation between elements
    },
    
    // Define font sizes for different text elements
    fontSizes: {
      small: '14px', // Small font size, used for less prominent text like captions
      medium: '16px', // Medium font size, used for body text
      large: '18px', // Large font size, used for headings or emphasized text
    },
  };