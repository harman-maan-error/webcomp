import { render, screen } from '@testing-library/react';
import { Text } from './Text';

test('rendering me :) i guess??', () => {
  render(<Text content="Hello World" />);
  expect(screen.getByText('Hello World')).toBeVisible();
});

test('opasity reduced in disabled satte', () => {
  const { container } = render(<Text content="Disabled Text" disabled />);
  const p = container.querySelector('p');
  expect(p).toHaveStyle('opacity: 0.6');
  expect(p).toHaveStyle('color: #999999');
});
