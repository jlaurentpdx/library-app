import { screen } from '@testing-library/react';

it('renders a welcome message when signed out', async () => {
  screen.getByText('Welcome');
});
