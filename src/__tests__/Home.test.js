import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('renders the h1 with the text "Name is a Web Developer from City"', () => {
  render(<Home />);
  const h1 = screen.queryByText(/Your Name is a Web Developer from Your City/i);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe('H1');
});

test('the h1 has an inline style attribute with a color of "firebrick"', () => {
  render(<Home />);
  const h1 = screen.queryByText(/Your Name is a Web Developer from Your City/i);
  expect(h1).toHaveStyle({ color: 'firebrick' });
});
