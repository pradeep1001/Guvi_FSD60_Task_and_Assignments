// Import necessary libraries and components
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { bookValidationSchema } from '../../utils/validationSchemas.jsx'; // Validation schema for book form fields
import styled from 'styled-components'; // Styled-components for styling
import Button from '../Common/Button'; // Custom Button component

// Styled container for the form
const FormContainer = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

// Styled component for form fields
const FormField = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

// Styled component for labels
const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

// Styled input field using Formik's Field component
const StyledField = styled(Field)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;

// Styled component for displaying error messages
const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

// BookForm component definition
const BookForm = ({ initialValues, onSubmit, isEditing }) => (
  <FormContainer>
    {/* Formik is used for form handling, validation, and submission */}
    <Formik
      // initialValues={initialValues} // Initial values for the form fields
      initialValues={initialValues}
      validationSchema={bookValidationSchema} // Validation schema to enforce field requirements
      onSubmit={onSubmit} // Function to handle form submission
      enableReinitialize // Ensure form is reset when initialValues change
    >
      {({ isSubmitting }) => (
        <Form>
          {/* Title Field */}
          <FormField>
            <Label>Title</Label>
            <StyledField name="title" type="text" />
            <StyledErrorMessage name="title" component="div" />
          </FormField>

          {/* Author Field */}
          <FormField>
            <Label>Author</Label>
            <StyledField name="author" type="text" />
            <StyledErrorMessage name="author" component="div" />
          </FormField>

          {/* ISBN Field */}
          <FormField>
            <Label>ISBN</Label>
            <StyledField name="isbn" type="text" />
            <StyledErrorMessage name="isbn" component="div" />
          </FormField>

          {/* Publication Date Field */}
          <FormField>
            <Label>Publication Date</Label>
            <StyledField name="publicationDate" type="date" />
            <StyledErrorMessage name="publicationDate" component="div" />
          </FormField>

          {/* Submit Button */}
          <Button type="submit" disabled={isSubmitting}>
          {isEditing ? 'Update Book' : 'Save Book'}
          {/* {isSubmitting ? 'Saving...' : 'Save Book'} */}
          {/* {isSubmitting ? 'Saving...' : 'Save Book'} */}
      </Button>
        </Form>
      )}
    </Formik>
  </FormContainer>
);

// Export the BookForm component to be used in other parts of the application
export default BookForm;