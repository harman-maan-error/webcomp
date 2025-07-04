import { render } from '@testing-library/react';
import { Img } from './Img';

test('rendering img', () => {
  const { getByAltText } = render(<Img src="test.jpg" alt="Test Image" />);
  expect(getByAltText('Test Image')).toBeVisible();
});

test('opasity successfuly reduced!', () => {
  const { getByAltText } = render(<Img src="test.jpg" alt="Disabled Image" disabled />);
  expect(getByAltText('Disabled Image')).toHaveStyle('opacity: 0.6');
});
