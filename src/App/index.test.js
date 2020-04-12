import React from 'react';
import { render } from '@testing-library/react';
import App from './../App/index';

test('renders landing page', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Bienvenue à table !/i)).toBeInTheDocument();
});
