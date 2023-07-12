import { render, screen } from '@testing-library/react';
import App from './App';
import Team from './Team'

test('renders learn react link', () => {
  render(<App />);
  render(<Team/>)
   const teamLink = screen.getByText(/Team/i);
  expect(teamLink).toBeInTheDocument();
});
