import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Defining the properties for the Button component
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    bgColor: { control: 'color' },
    textColor: { control: 'color' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }
  },
  args: {
    label: 'Button',
    disabled: false,
    bgColor: 'Red',
    textColor: 'white'
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled'
  }
};