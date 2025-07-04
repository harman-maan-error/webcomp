import type { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  args: {
    src: 'https://m.media-amazon.com/images/I/51rggtPgmRL._AC_.jpg',
    alt: 'its something again, isnt it?',
    width: '290px',
    disabled: false
  }
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true
  }
};
