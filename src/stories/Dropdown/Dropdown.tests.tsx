import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

test('rendering dropdown options', () => {
  render(<Dropdown options={['One', 'Two']} />);
  expect(screen.getByText('One')).toBeVisible();
  expect(screen.getByText('Two')).toBeVisible();
});

test('disabled dropdoqn', () => {
  const { container } = render(<Dropdown options={['One']} disabled />);
  expect(container.querySelector('select')).toHaveStyle('opacity: 0.6');
});
