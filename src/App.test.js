import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

it('renders a welcome message when signed out', async () => {
  screen.getByText('Welcome');
});
