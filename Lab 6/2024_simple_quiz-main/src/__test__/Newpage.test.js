import { render, screen } from '@testing-library/react';
import NewPage from '../pages/NewPage';

test('renders Hello World text in NewPage', () => {
  render(<NewPage />);
  expect(screen.getByText(/Hello World/)).toBeInTheDocument();
});
