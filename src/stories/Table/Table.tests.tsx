import { render, screen } from '@testing-library/react';
import { Table } from './Table';

test('rendering table', () => {
  render(<Table headers={['Name', 'Age']} data={[['Alice', '24']]} />);
  expect(screen.getByText('Name')).toBeVisible();
  expect(screen.getByText('Age')).toBeVisible();
});

test('opacity reduced', () => {
  const { container } = render(<Table headers={['A']} data={[['B']]} disabled />);
  expect(container.querySelector('table')).toHaveStyle('opacity: 0.6');
});
