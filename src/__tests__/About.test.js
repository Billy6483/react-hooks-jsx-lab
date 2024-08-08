import { render, screen } from '@testing-library/react';
import About from '../components/About';
import image from '../assets/image.jpg'; // Ensure the path is correct

test('renders a <div> with the ID of "about"', () => {
  const { container } = render(<About />);
  const about = container.querySelector('#about');
  expect(about).toBeInTheDocument();
});

test('the <div> has three child elements', () => {
  const { container } = render(<About />);
  const about = container.querySelector('#about');
  expect(about.children).toHaveLength(3);
});

test('renders a <h2> with the text "About Me"', () => {
  render(<About />);
  const h2 = screen.queryByText('About Me');
  expect(h2).toBeInTheDocument();
  expect(h2.tagName).toBe('H2');
});

test('renders a <p> element', () => {
  render(<About />);
  const p = screen.queryByText(/This is a brief description about me./i);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe('P');
});

test('renders a <img> element with the correct attributes', () => {
  render(<About />);
  const img = screen.queryByAltText('I made this');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', image);
});
