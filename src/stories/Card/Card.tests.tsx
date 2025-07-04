import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card Component', () => {
  test('View Card', () => {
    render(<Card>Testing Card</Card>);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  test('test passed! changed color when disabled', () => {
    const { container } = render(<Card disabled>Disabling Card</Card>);
    expect(container.firstChild).toHaveStyle('opacity: 0.5');
    expect(container.firstChild).toHaveStyle('cursor: not-allowed');
  });
});