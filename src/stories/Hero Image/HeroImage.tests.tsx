import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

test('rendering hero img', () => {
  render(<HeroImage src="hero.jpg" alt="Hero" />);
  expect(screen.getByRole('img')).toBeVisible();
});

test('reduced Opasity in disabled hero img', () => {
  const { getByRole } = render(<HeroImage src="hero.jpg" alt="Hero" disabled />);
  expect(getByRole('img')).toHaveStyle('opacity: 0.6');
});
