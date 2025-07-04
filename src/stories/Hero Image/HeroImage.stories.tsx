import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  args: {
    src: 'https://m.media-amazon.com/images/I/51rggtPgmRL._AC_.jpg',
    alt: 'its something!!',
    height: '250px',
    disabled: false
  }
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true
  }
};
