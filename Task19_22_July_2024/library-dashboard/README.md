# Library Management Dashboard

This project is a **Library Management Dashboard** built using React. The application allows users to manage books and authors, with the ability to add, edit, and delete records. The dashboard features a clean, responsive design and utilizes modern web development practices including styled-components for styling, Formik for form management, and Yup for form validation.

## Features

- **Books Management**: Add, edit, and delete book records. Each book record contains the title, author, ISBN number, and publication date.
- **Authors Management**: Add, edit, and delete author records. Each author record contains the author's name, birth date, and a short biography.
- **Responsive Design**: The dashboard is designed to be fully responsive, making it accessible on both desktop and mobile devices.
- **Theming**: Consistent styling across the application using a theme object provided by styled-components.
- **Form Validation**: Robust form validation using Formik and Yup to ensure data integrity.

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/library-management-dashboard.git
   cd library-management-dashboard
   Project Structure

	•	src/: Contains the source code for the application.
	•	components/: Reusable components such as forms and lists for books and authors.
	•	Authors/: Components related to authors management (AuthorForm, AuthorList).
	•	Books/: Components related to books management (BookForm, BookList).
	•	Common/: Common components like the Navbar and Button.
	•	pages/: The main pages of the application (BooksPage, AuthorsPage).
	•	styles/: Global styles and theming.
	•	GlobalStyle.js: Global CSS rules applied across the application.
	•	theme.js: Theme object containing colors, spacing, and font sizes.
	•	App.js: The root component that sets up routing and renders the Navbar and main content.
	•	index.js: The entry point of the application where ReactDOM renders the App component.

Styling

The application uses styled-components for styling, which allows for scoped, component-level styles and theming. The theme is defined in src/styles/theme.js and is applied globally using the ThemeProvider.

Global Styles

Global styles are defined in src/styles/GlobalStyle.js and include basic styling for the body, headings, buttons, and input fields.

Form Validation

The application uses Formik for form handling and Yup for validation. The validation schemas are defined in src/utils/validationSchemas.js.

Performance Monitoring

This project includes reportWebVitals for performance monitoring. To measure and log performance metrics, you can customize reportWebVitals.js.

Available Scripts

In the project directory, you can run:

	•	npm start: Runs the app in the development mode.
	•	npm test: Launches the test runner in the interactive watch mode.
	•	npm run build: Builds the app for production to the build folder.
	•	npm run eject: If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Deployment

The application can be deployed using various platforms such as Netlify, Vercel, or GitHub Pages. After running npm run build, the production-ready files will be in the build/ folder.

Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue to discuss what you would like to change.

License

This project is licensed under the MIT License.

Acknowledgements

	•	React: A JavaScript library for building user interfaces.
	•	Formik: A popular form library for React.
	•	Yup: A JavaScript schema builder for value parsing and validation.
	•	styled-components: A library for writing CSS-in-JS.