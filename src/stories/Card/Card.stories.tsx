import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    children: { control: 'text' }
  },
  args: {
    disabled: false,
    backgroundColor: '#fff',
    children: 'can u see me?'
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true
  }
};
