import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('is visible!!', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText('Test Button')).toBeVisible();
  });

  test('test passed, showed disabled state', () => {
    render(<Button label="Disabled" disabled />);
    const button = screen.getByText('Disabled');
    
    expect(button).toHaveStyle('background-color: #cccccc');
    expect(button).toHaveStyle('cursor: not-allowed');
    expect(button).toBeDisabled();
  });
});