import { render, screen } from '@testing-library/react';
import { Label } from './Label';

test('rendering the label text', () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText('Test Label')).toBeVisible();
});

test('opacity reduced for the disabled label', () => {
  const { getByText } = render(<Label text="Disabled" disabled />);
  expect(getByText('Disabled')).toHaveStyle('opacity: 0.6');
});
