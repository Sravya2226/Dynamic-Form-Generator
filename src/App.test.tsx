import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
  render(<App />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument(); // Replace with actual text from your app
});
