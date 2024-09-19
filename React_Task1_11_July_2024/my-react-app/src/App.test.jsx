import { render, screen } from '@testing-library/react';
import App from './App';

test('renders All Courses heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/all courses/i);
  expect(headingElement).toBeInTheDocument();
});