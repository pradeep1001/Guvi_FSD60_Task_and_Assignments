// Import Yup for schema validation
import * as Yup from 'yup';

// Validation schema for the book form using Yup
export const bookValidationSchema = Yup.object({
  // Title field validation: required string
  title: Yup.string().required('Title is required'),

  // Author field validation: required string
  author: Yup.string().required('Author is required'),

  // ISBN field validation: required string with a regex pattern for 10 or 13 digits
  isbn: Yup.string()
    .required('ISBN is required')
    .matches(/^[0-9]{10,13}$/, 'ISBN should be 10 or 13 digits'),

  // Publication date validation: required date
  publicationDate: Yup.date().required('Publication date is required'),
});

// Validation schema for the author form using Yup
export const authorValidationSchema = Yup.object({
  // Name field validation: required string
  name: Yup.string().required('Name is required'),

  // Birth date validation: required date
  birthDate: Yup.date().required('Birth date is required'),

  // Biography field validation: required string with a maximum length of 500 characters
  biography: Yup.string()
    .required('Biography is required')
    .max(500, 'Biography should be less than 500 characters'),
});