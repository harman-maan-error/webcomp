import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
    disabled: { control: 'boolean' }
  },
  args: {
    options: ['DropBox', 'Course Content', 'Assignments'],
    disabled: false
  }
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true
  }
};
