import { render, screen, fireEvent } from '@testing-library/react';
import Quiz from '../components/Quiz';

test('clicking start button starts the quiz', () => {
  render(<Quiz />);
  expect(screen.getByText(/My Questions/)).toBeInTheDocument(); // Assuming the first question is displayed
});
