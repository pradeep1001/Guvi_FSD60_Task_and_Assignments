import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik components for form handling
import { authorValidationSchema } from '../../utils/validationSchemas.jsx'; // Import validation schema for the form
import styled from 'styled-components'; // Import styled-components for styling
import Button from '../Common/Button'; // Import custom Button component
// import PropTypes from 'prop-types';

// Styled components for the form container
const FormContainer = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.large}; // Use theme spacing for padding
  border-radius: 8px; // Rounded corners for the container
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Subtle shadow for the container
  margin-bottom: ${({ theme }) => theme.spacing.large}; // Space below the container
`;

// Styled component for form fields
const FormField = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium}; // Space between form fields
`;

// Styled component for labels
const Label = styled.label`
  display: block; // Make label a block element
  font-size: ${({ theme }) => theme.fontSizes.medium}; // Use theme font size
  margin-bottom: ${({ theme }) => theme.spacing.small}; // Space below the label
`;

// Styled component for input fields (text, textarea, etc.)
const StyledField = styled(Field)`
  width: 100%; // Full width for input fields
  padding: ${({ theme }) => theme.spacing.small}; // Padding inside the input fields
  font-size: ${({ theme }) => theme.fontSizes.medium}; // Use theme font size
  border: 1px solid ${({ theme }) => theme.colors.border}; // Border color from theme
  border-radius: 4px; // Rounded corners for input fields
`;

// Styled component for error messages
const StyledErrorMessage = styled(ErrorMessage)`
  color: red; // Error messages in red
  font-size: ${({ theme }) => theme.fontSizes.small}; // Smaller font size for errors
`;

// The main AuthorForm component
const AuthorForm = ({ initialValues, onSubmit, isEditing }) => (
  <FormContainer>
    {/* Formik component to handle form state and validation */}
    <Formik
      initialValues={initialValues} // Set initial values for the form fields
      validationSchema={authorValidationSchema} // Apply validation schema
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Form Values on Submit:", values); // Log form values for debugging
        onSubmit(values, { setSubmitting, resetForm }); // Pass form values to onSubmit handler
      }}
      enableReinitialize // Reinitialize the form when initialValues change
    >
      {({ isSubmitting }) => (
        <Form>
          {/* Field for Author Name */}
          <FormField>
            <Label>Name</Label>
            <StyledField name="name" type="text" /> {/* Field component binds to 'name' */}
            <StyledErrorMessage name="name" component="div" /> {/* Error message for name field */}
          </FormField>

          {/* Field for Author Birth Date */}
          <FormField>
            <Label>Birth Date</Label>
            <StyledField name="birthDate" type="date" /> {/* Field component binds to 'birthDate' */}
            <StyledErrorMessage name="birthDate" component="div" /> {/* Error message for birthDate field */}
          </FormField>

          {/* Field for Author Biography */}
          <FormField>
            <Label>Biography</Label>
            <StyledField name="biography" type="textarea" rows="4" /> {/* Field component binds to 'biography' */}
            <StyledErrorMessage name="biography" component="div" /> {/* Error message for biography field */}
          </FormField>

          {/* Submit Button */}
          <Button type="submit" disabled={isSubmitting}>
          {isEditing ? 'Update Author' : 'Save Author'}
          </Button>
        </Form>
      )}
    </Formik>
  </FormContainer>
);

// Default initial values for the form fields
AuthorForm.defaultProps = {
  initialValues: {
    name: '', // Initial value for name
    birthDate: '', // Initial value for birth date
    biography: '',  // Initial value for biography, ensures field is managed by Formik
  },
};

export default AuthorForm;