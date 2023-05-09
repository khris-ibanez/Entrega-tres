import { render, screen } from '@testing-library/react';
import {Saldo} from './Saldo';

test('renders learn react link', () => {
  render(<Saldo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
