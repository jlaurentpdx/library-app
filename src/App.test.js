import { screen } from '@testing-library/react';

it('renders a welcome message', () => {
  screen.getByText('Welcome');
});
