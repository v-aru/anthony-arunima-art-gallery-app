import { render, screen } from '@testing-library/react';
import Navigation from './Navigation.jsx'; 
import { useRouter } from 'next/router.js';


jest.mock('next/router', () => ({
    useRouter: jest.fn(),
  }));

test('renders navigation links', () => {
  useRouter.mockReturnValue({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
  });

  render(<Navigation />);

  // Check if the links are displayed
  expect(screen.getByText('Spotlight')).toBeInTheDocument();
  expect(screen.getByText('Art Pieces')).toBeInTheDocument();
});
