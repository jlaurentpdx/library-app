import { screen } from '@testing-library/react';

it('renders a welcome message', async () => {
  await screen.getByText('Welcome');
});
