import React from 'react';
import { render, screen } from '@testing-library/react';
import PaginaInicial from './views/pagina-inicial';
//import App from './App';

test('renders learn react link', () => {
  render(<PaginaInicial />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
export {}