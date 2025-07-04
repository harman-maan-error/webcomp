import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

test('rendering radio button', () => {
  render(<RadioButton label="i am a radio button" name="i dont know" />);
  expect(screen.getByText('i am a radio button')).toBeVisible();
});

test('opacity reduced when R-button got disabled', () => {
  const { getByText } = render(<RadioButton label="Option B" name="group1" disabled />);
  expect(getByText('Option B').closest('label')).toHaveStyle('opacity: 0.6');
});
