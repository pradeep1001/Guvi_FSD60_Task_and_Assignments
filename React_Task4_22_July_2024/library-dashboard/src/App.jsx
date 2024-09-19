// Import necessary libraries and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router for routing
import Navbar from './components/Common/Navbar'; // Navbar component for navigation
import BooksPage from './pages/BooksPage'; // Page component for managing books
import AuthorsPage from './pages/AuthorsPage'; // Page component for managing authors
import GlobalStyle from './styles/GlobalStyle'; // Global styles for the application

// App component definition
const App = () => {
  return (
    <Router>
      {/* Apply global styles to the entire application */}
      <GlobalStyle />
      
      {/* Render the Navbar component */}
      <Navbar />
      
      {/* Define routes for different pages */}
      <Routes>
        {/* Route for the BooksPage, rendered at the '/books' path */}
        <Route path="/books" element={<BooksPage />} />
        
        {/* Route for the AuthorsPage, rendered at the '/authors' path */}
        <Route path="/authors" element={<AuthorsPage />} />
        
        {/* Default route, renders the BooksPage */}
        <Route path="/" element={<BooksPage />} />
      </Routes>
    </Router>
  );
};

// Export the App component to be used as the root component in the application
export default App;